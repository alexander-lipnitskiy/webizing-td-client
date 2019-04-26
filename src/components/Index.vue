<template>
    <div>
        <h1>Webizing Web Thing Model</h1>
        <p>Version 1.0.0</p>

        <h3>Things</h3>

        <p v-bind:key="key" v-for="(value, key) in things">
            <a v-bind:href="'/td/' + key">{{value.name}}</a>
            <br>
            {{value.description}}
        </p>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data () {
            return {
                things: {
                    "airQuality": {
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "AirQuality"
                        ],
                        "id": "https://.../td/AirQuality",
                        "name": "Air Quality Sensor",
                        "names": "",
                        "description": "공기질 로깅 ex)Foobot(5분 주기로 데이터를 가져옴)",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {name}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {user}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {address}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {room}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {location}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {time}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "humidity": {
                                "@type": "humidity",
                                "type": "number",
                                "title": "Humidity",
                                "description": "습도 - unit: %",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {humidity}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "temp": {
                                "@type": "temp",
                                "type": "number",
                                "title": "Temp",
                                "description": "temperature - unit: Celsius(℃)",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {temp}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "particle": {
                                "@type": "particle",
                                "type": "number",
                                "title": "Particle",
                                "description": "pm2.5 - unit: ㎍/㎥",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {particle}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "co2": {
                                "@type": "co2",
                                "type": "number",
                                "title": "Co2",
                                "description": "이산화탄소 - unit: ppm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {co2}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "voc": {
                                "@type": "voc",
                                "type": "number",
                                "title": "Voc",
                                "description": "휘발성 유기 화합물 - unit: ppb",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {voc}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "pollution": {
                                "@type": "pollution",
                                "type": "number",
                                "title": "Pollution",
                                "description": "미세먼지 - unit: TBD",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ airQuality {pollution}}",
                                        "contentType": "application/json",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ airQuality {name user   address    room   location    time    humidity    temp   particle   co2    voc    pollution  }}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "scheme": "nosec",
                                "description": "no security"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "cushion": {
                        "id": "https://.../td/Cushion",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "Cushion"
                        ],
                        "name": "Cushion Sensor",
                        "names": "",
                        "description": "앉아 있는지 여부를 판단",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "pressure": {
                                "@type": "pressure",
                                "type": "number",
                                "title": "Pressure",
                                "description": "unit is to be defined",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "temp": {
                                "@type": "temp",
                                "type": "number",
                                "title": "Temp",
                                "description": "temperature - unit: Celsius(℃)",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "status": {
                                "@type": "status",
                                "type": "number",
                                "title": "Status",
                                "description": "pm2.5 - unit: ㎍/㎥",
                                "forms": [
                                    {
                                        "href": "there should be url for access value of this property",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "there should be url for access value of this property",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "energyApplianceMonitor": {
                        "id": "https://.../td/Cushion",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "EnergyApplianceMonitor"
                        ],
                        "name": "EnergyApplianceMonitor Sensor",
                        "names": "",
                        "description": "공기질 로깅 ex)Foobot(5분 주기로 데이터를 가져옴)",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {user}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {address}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "observable": false,
                                "readOnly": true,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {room}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "observable": false,
                                "readOnly": true,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {location}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "observable": false,
                                "readOnly": true,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {time}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "observable": false,
                                "readOnly": true,
                                "writeOnly": false
                            },
                            "applianceId": {
                                "@type": "applianceId",
                                "type": "string",
                                "title": "ApplianceId",
                                "description": "unit is to be defined",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {applianceId}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "observable": false,
                                "readOnly": true,
                                "writeOnly": false
                            },
                            "activePower": {
                                "@type": "activePower",
                                "type": "number",
                                "title": "ActivePower",
                                "description": "appliance activePower - unit: W, 양수: On, 음수: Off",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {activePower}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {name user address room location time applianceId activePower}}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "energyMonitor": {
                        "id": "https://.../td/EnergyMonitor",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "EnergyMonitor"
                        ],
                        "name": "EnergyMonitor Sensor",
                        "names": "",
                        "description": "전력 사용량 모니터링 ex)Smappee(5분 주기로 데이터를 가져옴), Enertalk",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {user}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {address}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {room}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {location}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {time}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "consumption": {
                                "@type": "consumption",
                                "type": "number",
                                "title": "Consumption",
                                "description": "unit is to be defined",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor { consumption }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "alwaysOn": {
                                "@type": "schema:Float",
                                "type": "number",
                                "title": "AlwaysOn",
                                "description": "Standby Power - unit: W",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ energyMonitor {alwaysOn}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ energyMonitor {name user   address    room   location    time    consumption   alwaysOn }}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "ipCamera": {
                        "id": "https://.../td/IPCamera",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "IPCamera"
                        ],
                        "name": "IPCamera Sensor",
                        "names": "",
                        "description": "video content from the IP Camera",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ ipCamera {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ ipCamera {user }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ ipCamera { address }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "schema:Text",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ ipCamera {room}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ ipCamera {location}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ ipCamera {time }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "url": {
                                "@type": "url",
                                "type": "string",
                                "title": "URL",
                                "description": "link to the video",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={url}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ ipCamera {name user address room location time url}}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "ipfsCamera": {
                        "id": "https://.../td/IPFSCamera",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "IPFSCamera"
                        ],
                        "name": "IPFSCamera Sensor",
                        "names": "",
                        "description": "video content from the IP Camera",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {user}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {address}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera { room }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {location}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {time}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "url": {
                                "@type": "url",
                                "type": "string",
                                "title": "URL",
                                "description": "link to the video",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {url}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "hash": {
                                "@type": "hash",
                                "type": "string",
                                "title": "Hash",
                                "description": "hash to the video file in the IPFS system",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ipfsCamera {hash}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ipfsCamera {name user   address    room   location    time    url  hash}}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "sleep": {
                        "id": "https://.../td/Sleep",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "Sleep"
                        ],
                        "name": "Sleep Monitoring Sensor",
                        "names": "",
                        "description": "수면 시작 시간, 수면 끝 시간, 총 수면 시간 로깅 JSON-LD Format ex)Beddit, Fitbit",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep {user}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep { address}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep {room }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep { location }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep {time }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "startDate": {
                                "@type": "startDate",
                                "type": "string",
                                "title": "StartDate",
                                "description": "start time ex)2017-09-10T00:00:00+09:00",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep {startDate}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "endDate": {
                                "@type": "endDate",
                                "type": "string",
                                "title": "EndDate",
                                "description": "sleep end time ex)2017-09-10T06:30:00+09:00",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep { endDate }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "totalSleep": {
                                "@type": "totalSleep",
                                "type": "number",
                                "title": "TotalSleep",
                                "description": "totalSleep time - unit: minute",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep {totalSleep }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ sleep {name user   address    room   location    time    startDate   endDate totalSleep }}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "smartTable": {
                        "id": "https://.../td/SmartTable",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "SmartTable"
                        ],
                        "name": "SmartTable Sensor",
                        "names": "",
                        "description": "음식 리스트, 음식 칼로리, 사진 로깅",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "schema:Text",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable {user }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable { address }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "@type": "room",
                                "type": "string",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable { room }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable { location }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable { time }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "foodList": {
                                "@type": "foodList",
                                "type": "array",
                                "title": "FoodList",
                                "description": "List of food items",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable { foodList }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "caloryList": {
                                "@type": "caloryList",
                                "type": "array",
                                "title": "CaloryList",
                                "description": "List of calories for the food items",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable { caloryList }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "snapShot": {
                                "@type": "snapShot",
                                "type": "string",
                                "title": "SnapShot",
                                "description": "url of the snap shot of the table",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartTable {snapShot}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ smartTable {name user   address    room   location    time    foodList   caloryList snapShot }}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "smartWatch": {
                        "id": "https://.../td/SmartWatch",
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "SmartWatch"
                        ],
                        "name": "SmartWatch Sensor",
                        "names": "",
                        "description": "걸음 수, 심박, 운동시간, 일어서 있는 시간 로깅 ex)Fitbit, AppleWatch",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {name}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "user": {
                                "@type": "user",
                                "type": "string",
                                "title": "User",
                                "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {user}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch { address }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "room": {
                                "type": "room",
                                "@type": "schema:Text",
                                "title": "Room",
                                "description": "room number of the building where the sensor resides - ex) L8321",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {room }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "location": {
                                "@type": "location",
                                "type": "string",
                                "title": "Location",
                                "description": "location of the sensor - format: free",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch { location }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "time": {
                                "@type": "time",
                                "type": "string",
                                "title": "Time",
                                "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch { time }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "startDate": {
                                "@type": "startDate",
                                "type": "string",
                                "title": "Start Date",
                                "description": "start time ex)2017-09-10T00:00:00+09:00",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {startDate }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "endDate": {
                                "@type": "endDate",
                                "type": "string",
                                "title": "End Date",
                                "description": "sleep end time ex)2017-09-10T06:30:00+09:00",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {endDate}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "stepCount": {
                                "@type": "stepCount",
                                "type": "integer",
                                "title": "Step Count",
                                "description": "걸음 수",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {stepCount}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "heartRate": {
                                "@type": "heartRate",
                                "type": "integer",
                                "title": "Heart Rate",
                                "description": "심박수 - unit: count/min",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch { heartRate }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "exerciseTime": {
                                "@type": "exerciseTime",
                                "type": "number",
                                "title": "Exercise Time",
                                "description": "운동시간 - unit: minute",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch { exerciseTime }}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            },
                            "standHour": {
                                "@type": "standHour",
                                "type": "number",
                                "title": "Stand Hour",
                                "description": "일어선 시간 - 1: 1시간, 0: 0시간",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ smartWatch {standHour}}",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "secure": "nosec_sc"
                                    }
                                ],
                                "readOnly": true,
                                "observable": false,
                                "writeOnly": false
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ smartWatch {name user   address    room   location    time    startDate   endDate stepCount heartRate exerciseTime standHour}}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "nosec_sc": {
                                "description": "no security",
                                "scheme": "nosec"
                            }
                        },
                        "security": [
                            "nosec_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    }
                }
            }}
        ,
        computed: {
            thingDescriptionURL: function () {
                return ``
            }
        }
    }
</script>

<style scoped>

</style>