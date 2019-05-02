<template>
  <div v-if="model">
    <h2>
      <el-link
        style="font-size: 20px; font-weight: bold;"
        v-bind:href="thingDescriptionURl()"
        type="primary"
        >{{ model.name }}</el-link
      >
    </h2>
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
            v-bind:href="`${$route.params.thing}/${scope.row.property}`"
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
      locations: [{name: '1', room: '2', location: '3'}]
    };
  },
  created() {
    this.model = this.getSensorByName(this.$route.params.thing)
  },
  computed: {
    ...mapGetters(["getSensorByName"])
  },
  methods: {
    thingDescriptionURl: function() {
      return `${this.model["@context"]}${this.model["@type"]}`;
    },
    async fetchData() {
      this.error = this.model = null;
      this.loading = true;

      const response = await fetch(
        `http://localhost:3000/td/${this.$route.params.thing}`,
        { headers: { Accept: "application/json" } }
      );

      this.loading = false;

      if (!response.ok) {
        this.error = response.statusText;
      } else {
        this.model = await response.json();
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
