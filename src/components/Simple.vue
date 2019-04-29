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
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  import { latLng } from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

  export default {
    name: "Example",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LTooltip
    },
    data() {
      return {
        zoom: 13,
        center: latLng(37.5984373, 127.0454027),
        url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        options: {
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoiYWxleC1raXN0IiwiYSI6ImNqdHpjMjlqZTMydHY0ZW11aXk5MWJyaWIifQ.qreRX0rWCu5Rez1Tv-m0xA'
        },
        withPopup: latLng(37.600734, 127.044901),
        withTooltip: latLng(37.5984373, 127.0454027),
        currentZoom: 11.5,
        currentCenter: latLng(37.784373, 127.754027),
        showParagraph: true,
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
      },
      showLongText() {
        this.showParagraph = !this.showParagraph;
      },
      innerClick() {
        alert("Click!");
      }
    }
  };
</script>
<style scoped>
  #full_div {
    display: flex;
    width:100%;
    height: 500px;
  }
</style>