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
                        "description": "공기질 로깅 ex)Foobot(5분 주기로 데이터를 가져옴)",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep(name) {name}}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep(name) {user}}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep(name) { address }}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep(name) {room }}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep(name) { location }}",
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
                            "sleepAnalysis": {
                                "@type": "totalSleep",
                                "type": "array",
                                "items": {
                                    "startDate": "string",
                                    "endDate": "string",
                                    "status": "string"
                                },
                                "title": "Sleep analysis",
                                "description": "sleep analysis status: Inbed or Asleep or Awake",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "forms": [
                                    {
                                        "href": "http://localhost:3000/graphql?query={ sleep(name, startDate, endDate) {sleepAnalysis{startDate endDate status} }}",
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
                                "htv:methodName": "GET",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "href": "http://localhost:4000/graphql?query={ sleep(name, startDate, endDate)  {name user   address    room   location stepCount{startDate endDate stepCount} heartRate{startDate endDate heartRate} exerciseTime{startDate endDate exerciseTime} standHour{startDate endDate standHour}}}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "op": [
                                            "readproperty"
                                        ],
                                        "contentType": "application/json",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name) {name}}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name) {user}}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name) { address }}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name) {room }}",
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
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name) { location }}",
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
                                "type": "array",
                                "items": {
                                    "startDate": "string",
                                    "endDate": "string",
                                    "stepCount": "integer"
                                },
                                "title": "Step Count",
                                "description": "걸음 수",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name, startDate, endDate) {stepCount{startDate endDate stepCount}}}",
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
                                "type": "array",
                                "items": {
                                    "startDate": "string",
                                    "endDate": "string",
                                    "heartRate": "integer"
                                },
                                "title": "Heart Rate",
                                "description": "심박수 - unit: count/min",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name:, startDate, endDate) { heartRate {startDate endDate heartRate}}}",
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
                                "type": "array",
                                "items": {
                                    "startDate": "string",
                                    "endDate": "string",
                                    "exerciseTime": "integer"
                                },
                                "title": "Exercise Time",
                                "description": "운동시간 - unit: minute",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name, startDate, endDate) { exerciseTime{startDate endDate exerciseTime} }}",
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
                                "type": "array",
                                "items": {
                                    "startDate": "string",
                                    "endDate": "string",
                                    "standHour": "number"
                                },
                                "title": "Stand Hour",
                                "description": "일어선 시간 - 1: 1시간, 0: 0시간",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "forms": [
                                    {
                                        "htv:methodName": "GET",
                                        "href": "http://localhost:3000/graphql?query={ smartWatch(name, startDate, endDate) { standHour{startDate endDate standHour} }}",
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
                                "htv:methodName": "GET",
                                "uriVariables": {
                                    "name": {
                                        "type": "string",
                                        "@type": "name"
                                    },
                                    "startDate": {
                                        "type": "string",
                                        "@type": "time"
                                    },
                                    "endDate": {
                                        "type": "string",
                                        "@type": "time"
                                    }
                                },
                                "href": "http://localhost:4000/graphql?query={ smartWatch(name, startDate, endDate)  {name user   address    room   location stepCount{startDate endDate stepCount} heartRate{startDate endDate heartRate} exerciseTime{startDate endDate exerciseTime} standHour{startDate endDate standHour}}}",
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
            const response = await fetch(`http://localhost:4000/td-manager/td`, {
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
