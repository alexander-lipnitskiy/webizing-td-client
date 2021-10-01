import NProgress from 'nprogress/nprogress';

const state = {
    td: {},
    loading: true,
    error: null
};

const getters = {
    getSensorByName: (state) => (name) => {
        return state.td[name]
    },
    getPropertyDetailsOfSensor: (state) => (nameOfSensor, nameOfProperty) => {
        return state.td[nameOfSensor].properties[nameOfProperty]
    },
    getThings: (state) => () => {
        return state.td
    }
};

const actions = {
    async fetchMockupThings({commit, state}) {
        // if(Object.keys(state.td).length === 0 && state.td.constructor === Object) {
            commit('startLoading');
            NProgress.start();
            await setTimeout(() => {
                commit('addThings', {
                    "airQuality": {
                        "@context": [
                          "http://iotschema.org/",
                          {"schema": "https://schema.org/"}
                        ],
                        "@type": [
                            "Sensor"
                        ],
                        "id": "https://localhost:3000/td/AirQuality",
                        "name": "Air Quality Sensor",
                        "names": "",
                        "description": "A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it.",
                        "properties": {
                            "name": {
                                "@type": "schema:name",
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
                                "@type": "schema:user",
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
                                "@type": "schema:address",
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
                                "@type": "schema:room",
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
                                "@type": "schema:location",
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
                                "@type": "schema:time",
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
                                "@type": "schema:humidity",
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
                                "@type": "schema:temp",
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
                                "@type": "schema:particle",
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
                                "@type": "schema:co2",
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
                                "@type": "schema:voc",
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
                                "@type": "schema:pollution",
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
                                "description": "No security"
                            },
                            "oauth2_sc": {
                                "description": "Protocol that allows a user to grant a third-party web site or application access to the user's protected resources",
                                "scheme": "oauth2",
                                "flow": "code",
                                "scopes": ["readallproperty:air-quality-sensor", "readtopic:cushion"],
                                "refresh": "https://dev-t9gm0jy5.eu.auth0.com/oauth/token",
                                "token": "https://dev-t9gm0jy5.eu.auth0.com/oauth/token",
                                "authorization": "https://dev-t9gm0jy5.eu.auth0.com/oauth/token"
                            }
                        },
                        "security": [
                            "oauth2_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "cushion": {
                        "@context": "https://www.w3.org/2019/wot/td/v1",
                        "id": "https://schema.iot.webizing.org/td/cushion",
                        "name": "Сushion",
                        "names": "",
                        "description": "앉아 있는지 여부를 판단",
                        "title": "Сushion Sensor",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:4000/graphql?query={cushion{name}}",
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
                                        "href": "http://localhost:4000/graphql?query={cushion{user}}",
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
                                        "href": "http://localhost:4000/graphql?query={cushion{address}}",
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
                                        "href": "http://localhost:4000/graphql?query={cushion{room}}",
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
                                        "href": "http://localhost:4000/graphql?query={cushion{location}}",
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
                                        "href": "http://localhost:4000/graphql?query={cushion{time}}",
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
                            "points": {
                                "@type": "points",
                                "type": "array",
                                "title": "Points",
                                "items":{
                                    "current": {
                                        "@type": "PressureData",
                                        "type": "number",
                                        "description": "value of pressure"
                                    },
                                    "coord": {
                                        "type": "object",
                                        "properties": {
                                            "x": {
                                                "@type": "number",
                                                "type": "number",
                                                "description": "location X on a smart cushion"
                                            },
                                            "y": {
                                                "@type": "number",
                                                "type": "number",
                                                "description": "location Y on a smart cushion"
                                            }
                                        }
                                    }
                                },
                                "description": "array of each sensor on a smart cushion that represent amount of pressure",
                                "forms": [
                                    {
                                        "href": "http://localhost:4000/graphql?query={cushion{points}}",
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
                        "events": {
                            "pressure": {
                                "description": "array of each sensor on a smart cushion that represent amount of pressure",
                                "data": {
                                    "type": "object",
                                    "items" : {
                                        "type" : "object",
                                        "properties": {
                                            "time": {
                                                "type": "string"
                                            },
                                            "points": {
                                                "type": "array",
                                                "minItems": 36,
                                                "maxItems": 36,
                                                "items" : {
                                                    "type" : "object",
                                                    "properties": {
                                                        "current": {"type": "number"},
                                                        "coord": {"type": "object",
                                                        "properties": {
                                                            "x": {"type": "number"},
                                                            "y": {"type": "number"}
                                                        }}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "mqtt://192.168.1.130:1883/cushion/7",
                                        "contentType" : "text/json",
                                        "op" : "subscribeevent",
                                        "secure": "oauth2_sc"
                                    }
                                ]
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={cushion{name+user+address+room+location+time+points}}",
                                "contentType": "application/json",
                                "op": [
                                    "readallproperties"
                                ],
                                "secure": "nosec_sc"
                            }
                        ],
                        "securityDefinitions": {
                            "oauth2_sc": {
                                "description": "Protocol that allows a user to grant a third-party web site or application access to the user's protected resources",
                                "scheme": "oauth2",
                                "flow": "code",
                                "scopes": ["read:cushion-sensor"],
                                "refresh": "https://dev-t9gm0jy5.eu.auth0.com/oauth/token",
                                "token": "https://dev-t9gm0jy5.eu.auth0.com/oauth/token",
                                "authorization": "https://dev-t9gm0jy5.eu.auth0.com/oauth/token"
                            },
                            "nosec_sc": {
                                "scheme": "nosec",
                                "description": "no security"
                            }
                        },
                        "security": [
                            "oauth2_sc"
                        ],
                        "version": {
                            "instance": "0.0.1"
                        }
                    },
                    "matress": {
                        "@context": "https://www.w3.org/2019/wot/td/v1",
                        "id": "https://schema.iot.webizing.org/td/cushion",
                        "name": "Matress",
                        "names": "",
                        "description": "Matress",
                        "title": "Matress",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:4000/graphql?query={ cushion {name}}",
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
                                        "href": "http://localhost:4000/graphql?query={ cushion {user}}",
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
                                        "href": "http://localhost:4000/graphql?query={ cushion {address}}",
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
                                        "href": "http://localhost:4000/graphql?query={ cushion {room}}",
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
                                        "href": "http://localhost:4000/graphql?query={ cushion {location }}",
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
                                        "href": "http://localhost:4000/graphql?query={ cushion {time}}",
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
                            "points": {
                                "@type": "points",
                                "type": "array",
                                "title": "Points",
                                "items":{
                                    "current": {
                                        "@type": "PressureData",
                                        "type": "number",
                                        "description": "value of pressure"
                                    },
                                    "coord": {
                                        "type": "object",
                                        "properties": {
                                            "x": {
                                                "@type": "number",
                                                "type": "number",
                                                "description": "location X on a smart cushion"
                                            },
                                            "y": {
                                                "@type": "number",
                                                "type": "number",
                                                "description": "location Y on a smart cushion"
                                            }
                                        }
                                    }
                                },
                                "description": "array of each sensor on a smart cushion that represent amount of pressure",
                                "forms": [
                                    {
                                        "href": "http://localhost:4000/graphql?query={ cushion {points}}",
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
                        "events": {
                            "pressure": {
                                "description": "array of each sensor on a matress that represent amount of pressure",
                                "data": {
                                    "type": "object",
                                    "items" : {
                                        "type" : "object",
                                        "properties": {
                                            "time": {
                                                "type": "string"
                                            },
                                            "points": {
                                                "type": "array",
                                                "minItems": 435,
                                                "maxItems": 435,
                                                "items" : {
                                                    "type" : "object",
                                                    "properties": {
                                                        "current": {"type": "number"},
                                                        "coord": {"type": "object",
                                                        "properties": {
                                                            "x": {"type": "number"},
                                                            "y": {"type": "number"}
                                                        }}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "mqtt://192.168.1.130:1883/cushion/7",
                                        "contentType" : "text/json",
                                        "op" : "subscribeevent"
                                    }
                                ]
                            }
                        },
                        "forms": [
                            {
                                "href": "http://localhost:3000/graphql?query={ cushion {name user address room location time points}}",
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
                    // "cushion": {
                    //     "id": "https://localhost:3000/td/Cushion",
                    //     "@context": [
                    //         "http://iotschema.org/",
                    //         {"schema": "https://schema.org/"}
                    //       ],
                    //       "@type": [
                    //           "Sensor"
                    //       ],
                    //     "name": "Smart Cushion Sensor",
                    //     "names": "",
                    //     "description": "앉아 있는지 여부를 판단",
                    //     "properties": {
                    //         "name": {
                    //             "@type": "name",
                    //             "type": "string",
                    //             "title": "Name",
                    //             "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {name}}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         },
                    //         "user": {
                    //             "@type": "user",
                    //             "type": "string",
                    //             "title": "User",
                    //             "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {user}}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         },
                    //         "address": {
                    //             "@type": "address",
                    //             "type": "string",
                    //             "title": "Address",
                    //             "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {address}}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         },
                    //         "room": {
                    //             "@type": "room",
                    //             "type": "string",
                    //             "title": "Room",
                    //             "description": "room number of the building where the sensor resides - ex) L8321",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {room}}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         },
                    //         "location": {
                    //             "@type": "location",
                    //             "type": "string",
                    //             "title": "Location",
                    //             "description": "location of the sensor - format: free",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {location }}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         },
                    //         "time": {
                    //             "@type": "time",
                    //             "type": "string",
                    //             "title": "Time",
                    //             "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {time}}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         },
                    //         "points": {
                    //             "@type": "points",
                    //             "type": "array",
                    //             "title": "Points",
                    //             "items":{
                    //                 "current": {
                    //                     "@type": "PressureData",
                    //                     "type": "number",
                    //                     "description": "value of pressure"
                    //                 },
                    //                 "coord": {
                    //                     "type": "object",
                    //                     "properties": {
                    //                         "x": {
                    //                             "@type": "number",
                    //                             "type": "number",
                    //                             "description": "location X on a smart cushion"
                    //                         },
                    //                         "y": {
                    //                             "@type": "number",
                    //                             "type": "number",
                    //                             "description": "location Y on a smart cushion"
                    //                         }
                    //                     }
                    //                 }
                    //             },
                    //             "description": "array of each sensor on a smart cushion that represent amount of pressure",
                    //             "forms": [
                    //                 {
                    //                     "href": "http://localhost:4000/graphql?query={ cushion {points}}",
                    //                     "op": [
                    //                         "readproperty"
                    //                     ],
                    //                     "contentType": "application/json",
                    //                     "secure": "nosec_sc"
                    //                 }
                    //             ],
                    //             "readOnly": true,
                    //             "observable": false,
                    //             "writeOnly": false
                    //         }
                    //     },
                    //     "forms": [
                    //         {
                    //             "href": "http://localhost:3000/graphql?query={ energyApplianceMonitor {name user address room location time applianceId activePower}}",
                    //             "contentType": "application/json",
                    //             "op": [
                    //                 "readallproperties"
                    //             ],
                    //             "secure": "nosec_sc"
                    //         }
                    //     ],
                    //     "securityDefinitions": {
                    //         "nosec_sc": {
                    //             "description": "no security",
                    //             "scheme": "nosec"
                    //         }
                    //     },
                    //     "security": [
                    //         "nosec_sc"
                    //     ],
                    //     "version": {
                    //         "instance": "0.0.1"
                    //     }
                    // },
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
                            "state": {
                                "@type": "temp",
                                "type": "boolean",
                                "title": "State",
                                "description": "Current state of LED, true - turn on. false - turn off",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ led {state}}",
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
                                "href": "http://localhost:3000/graphql?query={ led {name  address    room   location state  }}",
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
                    "led": {
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "led"
                        ],
                        "id": "https://.../td/led",
                        "name": "Led Sensor",
                        "names": "",
                        "description": "A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it.",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ led {name}}",
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
                                        "href": "http://localhost:3000/graphql?query={ led {address}}",
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
                                        "href": "http://localhost:3000/graphql?query={ led {room}}",
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
                                        "href": "http://localhost:3000/graphql?query={ led {location}}",
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
                            "state": {
                                "@type": "temp",
                                "type": "boolean",
                                "title": "State",
                                "description": "Current state of LED, true - turn on. false - turn off",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ led {state}}",
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
                                "href": "http://localhost:3000/graphql?query={ led {name  address    room   location state  }}",
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
                    "motion": {
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "motion"
                        ],
                        "id": "https://.../td/AirQuality",
                        "name": "Motion Pir Sensor",
                        "names": "",
                        "description": "Allow you to sense motion, almost always used to detect whether a human has moved in or out of the sensors range.",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ motion {name}}",
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
                                        "href": "http://localhost:3000/graphql?query={ motion {address}}",
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
                                        "href": "http://localhost:3000/graphql?query={ motion {room}}",
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
                                        "href": "http://localhost:3000/graphql?query={ motion {location}}",
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
                            "state": {
                                "@type": "temp",
                                "type": "boolean",
                                "title": "State",
                                "description": "Current state of motion sensor, true - motion detected. false - motion undetected",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ motion { state }}",
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
                                "href": "http://localhost:3000/graphql?query={ motion {name  address    room   location state  }}",
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
                    "light": {
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "light"
                        ],
                        "id": "https://.../td/AirQuality",
                        "name": "Light Sensor",
                        "names": "",
                        "description": "A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it.",
                        "properties": {
                            "name": {
                                "@type": "name",
                                "type": "string",
                                "title": "Name",
                                "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ light {name}}",
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
                                        "href": "http://localhost:3000/graphql?query={ light {address}}",
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
                                        "href": "http://localhost:3000/graphql?query={ light {room}}",
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
                                        "href": "http://localhost:3000/graphql?query={ light {location}}",
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
                            "state": {
                                "@type": "temp",
                                "type": "boolean",
                                "title": "State",
                                "description": "Current state of Light sensor, true -light. false - dark",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ light { state }}",
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
                                "href": "http://localhost:3000/graphql?query={ light {name  address    room   location state  }}",
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
                    "gyroscope": {
                        "@context": "https://schema.iot.webizing.org/",
                        "@type": [
                            "gyroscope"
                        ],
                        "id": "https://.../td/AirQuality",
                        "name": "Gyroscope Sensor",
                        "names": "",
                        "description": "A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it.",
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
                            "address": {
                                "@type": "address",
                                "type": "string",
                                "title": "Address",
                                "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ gyroscope {address}}",
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
                                        "href": "http://localhost:3000/graphql?query={ gyroscope {room}}",
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
                                        "href": "http://localhost:3000/graphql?query={ gyroscope {location}}",
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
                            "x": {
                                "@type": "temp",
                                "type": "integer",
                                "title": "X",
                                "description": "Current state of LED, true - turn on. false - turn off",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ gyroscope {x}}",
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
                            "y": {
                                "@type": "y",
                                "type": "integer",
                                "title": "Y",
                                "description": "Current state of LED, true - turn on. false - turn off",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ gyroscope {y}}",
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
                            "z": {
                                "@type": "z",
                                "type": "integer",
                                "title": "Z",
                                "description": "Current state of LED, true - turn on. false - turn off",
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ gyroscope {z}}",
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
                                "href": "http://localhost:3000/graphql?query={ gyroscope {name  address    room   location x y z  }}",
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
                    }
                })
                NProgress.done();
                commit('finishLoading');
            }, 1000);
        // }
    },
    async fetchThings({commit, state}) {
        if(Object.keys(state.td).length === 0 && state.td.constructor === Object){
            commit('startLoading');
            NProgress.start()
            const response = await fetch(`http://localhost:4000/thing/td`, {
                    headers: { Accept: "application/json",  "Content-Type":"application/json"},
                }
            );

            if (!response.ok) {
                commit('showError', response.statusText);
            } else {
                const res = await response.json();
                
                const output = {};
                for (const key of res) {
                    console.log(key)
                    output[Object.keys(key)[1]] = key[Object.keys(key)[1]];
                }

                commit('addThings', output);
                commit('finishLoading');
                NProgress.done()
            }
        }
    },
};

const mutations = {
    addThings(state, payload) {
        state.td = payload
    },
    addThing(state, payload) {
        state.td = {...state.td, ...payload}
    },
    startLoading(state) {
        state.loading = true;
    },
    finishLoading(state) {
        state.loading = false;
    },
    showError(state, error) {
        state.error = error;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
