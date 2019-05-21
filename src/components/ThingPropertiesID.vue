<template>
  <div>
    <div v-if="property">
      <span style="font-size: 20px">
          {{ property.title }}
        </span>
          <p>Type of:
          [ <el-link
                v-bind:href="thingDescriptionPropertyURL()"
                type="primary"
        >{{property.title}}</el-link> ]
          </p>

      <h3>Property details</h3>
      <p>{{ property.description }}</p>

      <p><b>Type:</b> {{ property.type }}</p>
      <p><b>Read only:</b> {{ property.readOnly }}</p>
      <p><b>Observable:</b> {{ property.observable }}</p>
      <p><b>Write only:</b> {{ property.writeOnly }}</p>

      <h3>Forms</h3>

      <el-table :data="property.forms" border style="width: 100%">
        <el-table-column prop="href" label="URL" width="520"></el-table-column>
        <el-table-column prop="contentType" label="Content Type"></el-table-column>
        <el-table-column prop="op" label="Operation"> </el-table-column>
        <el-table-column prop="secure" label="Access"> </el-table-column>
      </el-table>
    </div>
    <div v-else class="text-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: "ThingPropertyDetails",
  created() {
    this.property = this.getPropertyDetailsOfSensor(this.$route.params.thing, this.$route.params.name)
  },
  data() {
    return {
      property: null,
      context: "https://schema.iot.webizing.org/",
      error: null,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["getPropertyDetailsOfSensor"])
  },
  methods: {
    thingDescriptionPropertyURL: function() {
      return `${this.context}${this.property["@type"]}`;
    }
  }
};
</script>

<style scoped></style>
