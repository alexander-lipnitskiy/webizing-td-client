<template>
  <div v-if="model">
    <span style="font-size: 20px">
      {{ model.name }}
    </span>
    <p>Type of:</p>
    [ <el-link
          v-bind:href="thingDescriptionURl()"
          type="primary"
    >{{model.name}}</el-link> ]
    <p>Version of TD instance {{ model.version.instance }}</p>
    <h3>Description</h3>
    <p>{{ model.description }}</p>

    <h3>Location</h3>
    <Map v-bind:locations="locations"></Map>

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
      <el-table-column label="Property">
        <template slot-scope="scope">
          <el-link
            v-bind:href="`properties/${scope.row.property}`"
            type="primary"
            >{{ scope.row.property }}</el-link
          >
        </template>
      </el-table-column>
      <el-table-column prop="type" label="Type"> </el-table-column>
      <el-table-column prop="description" width="720" label="Description">
      </el-table-column>
      <el-table-column prop="readOnly" label="ReadOnly"> </el-table-column>
    </el-table>

    <h3>Forms</h3>

    <el-table :data="model.forms" border style="width: 100%">
      <el-table-column prop="href" label="URL" width="520"> </el-table-column>
      <el-table-column prop="contentType" label="Content Type">
      </el-table-column>
      <el-table-column prop="op" label="Operation"> </el-table-column>
      <el-table-column prop="secure" label="Access"> </el-table-column>
    </el-table>
  </div>
  <div v-else class="text-center">
    loading
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Map from "./Map";

export default {
  name: "AirQuality",
  components: {
    Map
  },
  data() {
    return {
      loading: false,
      model: null,
      error: null,
      locations: []
    };
  },
  created() {
    this.model = this.getSensorByName(this.$route.params.thing);
    this.fetchLocationData();
  },
  computed: {
    ...mapGetters(["getSensorByName"])
  },
  methods: {
    thingDescriptionURl: function() {
      return `${this.model["@context"]}${this.model["@type"]}`;
    },
    async fetchLocationData() {
      this.loading = true;

      const response = await fetch(`http://localhost:4000/graphql`, {
          method: "POST",
          headers: { Accept: "application/json",  "Content-Type":"application/json"},
          body: JSON.stringify({ query: `{${this.$route.params.thing} {name address room location}}`})
        }
      );

      this.loading = false;

      if (!response.ok) {
        this.error = response.statusText;
      } else {
        const res = await response.json();
        const locations = await res.data[this.$route.params.thing];

        if(Array.isArray(locations)) {
          this.locations = locations
        } else {
          this.locations = [locations]
        }
      }
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
