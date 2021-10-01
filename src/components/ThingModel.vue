<template>
  <div v-if="!loading">

    <div style="display: flex; width: 100%; justify-content: flex-end;">
      <span style="font-size: 20px; margin-right: auto;">
        {{ model ? model.name : null }}
      </span>

      <el-button-group>
        <el-button size="small" v-on:click="toogleRepresentation(1)">JSON</el-button>
        <el-button size="small" v-on:click="toogleRepresentation(2)">Visual</el-button>
        <el-button size="small" v-on:click="toogleRepresentation(3)">Dashboard</el-button>
      </el-button-group>
    </div>
    <div v-if="$route.params.thing == 'ipCamera'">
      <router-link class="el-link el-link--primary is-underline" v-bind:to="`/ipCamera/dashboard`" style="font-size: 16px">dashboard (in dev)</router-link>
    </div>
    <div v-if="representation==1">
      <br>
      <vue-json-pretty
      :path="'res'"
      :data="model"
      @click="handleClick">
    </vue-json-pretty>

    </div>
    <div v-if="representation==2">

      <p>Type of:
        [ <el-link
                v-bind:href="thingDescriptionURl()"
                type="primary"
        >{{model.name}}</el-link> ]
      </p>
      <p>Version of TD instance {{ model.version.instance }}</p>
      <h3>Description</h3>
      <p>{{ model.description }}</p>



      <h3>Security</h3>

      <el-table :data="getSecurityArray()" border style="width: 100%">
        <el-table-column prop="type" label="Type"> </el-table-column>
        <el-table-column prop="scheme" label="Security mechanism">
        </el-table-column>
        <el-table-column prop="description" width="420" label="Description">
        </el-table-column>
      </el-table>

      <h3>Properties</h3>

      <el-table :data="getPropertiesArray()" border style="width: 100%">
        <el-table-column width="180" label="Property">
          <template slot-scope="scope">
            <router-link class="el-link el-link--primary is-underline" v-bind:to="`${thingName}/properties/${scope.row.property}`" style="font-size: 16px">{{ scope.row.property }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="Type"> </el-table-column>
        <el-table-column prop="description" width="720" label="Description">
        </el-table-column>
        <el-table-column prop="readOnly" label="ReadOnly"> </el-table-column>
      </el-table>

      <div v-if="model.events">
        <h3>Events</h3>

        <el-table :data="getEventsArray()" border style="width: 100%">
          <el-table-column prop="event" label="Event"> </el-table-column>
          <el-table-column prop="type" width="720" label="Type"></el-table-column>
          <el-table-column prop="protocol" width="720" label="Protocol"></el-table-column>
        </el-table>
      </div>
      

      <h3>Forms</h3>

      <el-table :data="model.forms" border style="width: 100%">
        <el-table-column prop="href" label="URL" width="520"> </el-table-column>
        <el-table-column prop="contentType" label="Content Type">
        </el-table-column>
        <el-table-column prop="op" label="Operation"> </el-table-column>
        <el-table-column prop="secure" label="Access"> </el-table-column>
      </el-table>
    </div>

  <div v-if="representation==3">
    dashboard
  </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import Map from "./Map";

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  name: "AirQuality",
  components: {
    Map,
    VueJsonPretty
  },
  data() {
    return {
      locations: [],
      representation: 2
    };
  },

  created() {
    this.fetchLocationData();
  },
  computed: {
    thingName() {
      return this.$route.params.thing
    },

    model () {
      return this.$store.getters.getSensorByName(this.$route.params.thing)
    },
    ...mapState({
      loading: state => state.things.loading,
      error: state => state.things.error
    })
  },
  watch: {
    '$route':'fetchLocationData'
  },
  methods: {
    thingDescriptionURl: function() {
      return `${this.model["@context"][0]}${this.model["@type"]}`;
    },
    async fetchLocationData() {
      // this.loading = true;

      const response = await fetch(`http://localhost:4000/graphql`, {
          method: "POST",
          headers: { Accept: "application/json",  "Content-Type":"application/json"},
          body: JSON.stringify({ query: `{${this.$route.params.thing} {name address room location}}`})
        }
      );

      // this.loading = false;

      if (!response.ok) {
        // this.error = response.statusText;
      } else {
        const res = await response.json();
        if(res.hasOwnProperty('errors')) {
          this.locations = []
        } else {
          const locations = await res.data[this.$route.params.thing];

          if(Array.isArray(locations)) {
            this.locations = locations
          } else {
            this.locations = [locations]
          }
        }
      }
    },
    toogleRepresentation: function (number) {
      this.representation = number
    },
    getPropertiesArray() {
      let output = [];
      const obj = this.model.properties;

      for (const key of Object.keys(obj)) {
        output.push({
          property: key,
          type: obj[key].type,
          description: obj[key].description,
          readOnly: obj[key].readOnly.toString()
        });
      }

      return output;
    },
    getEventsArray() {
      let output = [];
      const obj = this.model.events;

      for (const key of Object.keys(obj)) {
        output.push({
          event: key,
          type: obj[key].data.type + '{' + Object.keys(obj[key].data.items.properties) + '}',
          protocol: "MQTT"
        });
      }

      return output;
    },
    getSecurityArray() {
      let output = [];
      const obj = this.model.securityDefinitions;

      for (const key of Object.keys(obj)) {
        // Type	Security mechanism	Description
        output.push({
          type: key,
          scheme: obj[key].scheme,
          description: obj[key].description
        });
      }
      return output;
    }
  }
};
</script>

<style></style>
