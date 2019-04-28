<template>

            <div id="full_div">
                <l-map

                        :zoom="zoom"
                        :center="center"
                        :options="mapOptions"
                        style="height: 80%"
                        @update:center="centerUpdate"
                        @update:zoom="zoomUpdate"
                >
                    <l-tile-layer :url="url" :attribution="attribution" />
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

<!--        <div v-if="!loading && model">-->
<!--            <h2><a v-bind:href="thingDescriptionURl">{{model.name}}</a></h2>-->
<!--            <p>Version of TD instance {{model.version.instance}}</p>-->
<!--            <h3>Description</h3>-->
<!--            <p>{{model.description}}</p>-->

<!--            <h3>Map</h3>-->



<!--            <h3>Security</h3>-->

<!--            <el-table-->
<!--                    :data="getSecurityArray()"-->
<!--                    border-->
<!--                    style="width: 100%">-->
<!--                <el-table-column-->
<!--                        prop="type"-->
<!--                        label="Type">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="scheme"-->
<!--                        label="Security mechanism">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="description"-->
<!--                        width="420"-->
<!--                        label="Description">-->
<!--                </el-table-column>-->
<!--            </el-table>-->


<!--            <h3>Properties</h3>-->

<!--            <el-table-->
<!--                    :data="getPropertiesArray()"-->
<!--                    border-->
<!--                    style="width: 100%">-->
<!--                <el-table-column-->
<!--                        prop="property"-->
<!--                        label="Property">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="type"-->
<!--                        label="Type">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="description"-->
<!--                        width="720"-->
<!--                        label="Description">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="readOnly"-->
<!--                        label="ReadOnly">-->
<!--                </el-table-column>-->
<!--            </el-table>-->


<!--            <h3>Forms</h3>-->

<!--            <el-table-->
<!--                    :data="model.forms"-->
<!--                    border-->
<!--                    style="width: 100%">-->
<!--                <el-table-column-->
<!--                        prop="href"-->
<!--                        label="URL"-->
<!--                        width="520">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="contentType"-->
<!--                        label="Content Type">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="op"-->

<!--                        label="Operation">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="secure"-->
<!--                        label="Access">-->
<!--                </el-table-column>-->
<!--            </el-table>-->
<!--        </div>-->
<!--        <div v-else class="text-center">-->
<!--            loading-->
<!--        </div>-->

</template>

<script>
    import { latLng } from "leaflet";
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";


    export default {
        name: 'AirQuality',
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip
        },
        data() {
            return {
                loading: false,
                model: null,
                error: null,
                zoom: 13,
                center: latLng(47.41322, -1.219482),
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                withPopup: latLng(47.41322, -1.219482),
                withTooltip: latLng(47.41422, -1.250482),
                currentZoom: 11.5,
                currentCenter: latLng(47.41322, -1.219482),
                showParagraph: false,
                mapOptions: {
                    zoomSnap: 0.5
                }
            }
        },
        created() {
            this.fetchData()
        },
        computed: {
            thingDescriptionURl: function () {
                return `${this.model['@context']}${this.model['@type']}`
            }
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
            },
            async fetchData() {
                this.error = this.model = null;
                this.loading = true;

                const response = await fetch(`http://localhost:3000/td/${this.$route.params.thing}`, {headers: {'Accept': 'application/json'}});

                this.loading = false;

                if (!response.ok) {
                    this.error = response.statusText;
                } else {
                    this.model = await response.json()
                }
            },
            getPropertiesArray() {
                let output = [];
                const obj = this.model.properties;

                for (const key of Object.keys(obj)) {
                    output.push(
                        {
                            property: obj[key].title,
                            type: obj[key].type,
                            description: obj[key].description,
                            readOnly: obj[key].readOnly.toString()
                        }
                    )
                }

                return output;
            },
            getSecurityArray() {
                let output = [];
                const obj = this.model.securityDefinitions;

                for (const key of Object.keys(obj)) {
                    // Type	Security mechanism	Description
                    output.push(
                        {
                            type: key,
                            scheme: obj[key].scheme,
                            description: obj[key].description
                        }
                    )
                }

                return output;
            },
            getFormsArray() {
                let output = [];
                const obj = this.model.forms;

                for (const key of Object.keys(obj)) {
                    output.push(
                        {
                            property: key,
                            type: obj[key].type,
                            description: obj[key].description,
                            readOnly: obj[key].readOnly.toString()
                        }
                    )
                }

                return output;
            }
        }
    }
</script>

<style scoped>
    #full_div {
        position: absolute;
        overflow-x: auto;
        top: 0;
        right: 0;
        left: 208px;
        bottom: 0;
        padding-left: 8px;
        border-left: 1px solid #ccc;
    }
</style>