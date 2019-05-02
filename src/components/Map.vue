<template>
  <div id="full_div">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :options="options" :url="url" />
      <div v-if="locations.length">
        <l-marker :lat-lng="withPopup">
          <l-popup>
            <div>
              <p v-bind:key="location.name" v-for="location in locations">
                Name: {{ location.name }} Room: {{ location.room }} Location:
                {{ location.location }}
              </p>
            </div>
          </l-popup>
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  props: {
    locations: Array //[{name: '', room: '', location: ''}]
  },
  data() {
    return {
      zoom: 13,
      center: latLng(37.5984373, 127.0454027),
      url:
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      options: {
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiYWxleC1raXN0IiwiYSI6ImNqdHpjMjlqZTMydHY0ZW11aXk5MWJyaWIifQ.qreRX0rWCu5Rez1Tv-m0xA"
      },
      withPopup: latLng(37.59852, 127.043216),
      currentZoom: 11.5,
      currentCenter: latLng(37.784373, 127.754027),
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>
<style scoped>
#full_div {
  display: flex;
  width: 100%;
  height: 500px;
}
</style>
