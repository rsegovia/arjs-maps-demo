//STYLE START//
const mapURL = "http://osm2vectortiles.tileserver.com/v2.json";
var style = {
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": "#a1eda8"
        },
        "interactive": true,
        "layout": {
          "visibility": "visible"
        }
      },
      {
        "id": "landuse_overlay_national_park",
        "type": "fill",
        "source": "mapbox",
        "source-layer": "landuse_overlay",
        "filter": [
          "==",
          "class",
          "national_park"
        ],
        "paint": {
          "fill-color": "#6ed7a6",
          "fill-opacity": 0.75
        },
        "interactive": true,
        "layout": {
          "visibility": "visible"
        }
      },
      {
        "id": "landuse_park",
        "type": "fill",
        "source": "mapbox",
        "source-layer": "landuse",
        "filter": [
          "==",
          "class",
          "park"
        ],
        "paint": {
          "fill-color": "#6ed7a6"
        },
        "interactive": true,
        "layout": {
          "visibility": "visible"
        }
      },
      {
        "id": "waterway",
        "type": "line",
        "source": "mapbox",
        "source-layer": "waterway",
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "in",
            "class",
            "river",
            "canal"
          ]
        ],
        "paint": {
          "line-color": "#a0cfdf",
          "line-width": {
            "base": 1.4,
            "stops": [
              [
                8,
                0.5
              ],
              [
                20,
                15
              ]
            ]
          }
        },
        "interactive": true
      },
      {
        "id": "water",
        "type": "fill",
        "source": "mapbox",
        "source-layer": "water",
        "paint": {
          "fill-color": "#a0cfdf"
        },
        "interactive": true
      },
      {
        "id": "building",
        "type": "fill",
        "source": "mapbox",
        "source-layer": "building",
        "paint": {
          "fill-color": "#dafae4",
          "fill-translate-anchor": "map"
        },
        "interactive": true,
        "layout": {
          "visibility": "visible"
        }
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway_link",
              "street",
              "street_limited",
              "service",
              "track",
              "pedestrian",
              "path",
              "link"
            ],
            [
              "==",
              "structure",
              "tunnel"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "tunnel_minor outline",
        "paint": {
          "line-color": "#d6c7a3",
          "line-width": {
            "base": 1.6,
            "stops": [
              [
                12,
                0.5
              ],
              [
                20,
                10
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway_link",
              "street",
              "street_limited",
              "service",
              "track",
              "pedestrian",
              "path",
              "link"
            ],
            [
              "==",
              "structure",
              "tunnel"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "tunnel_minor",
        "paint": {
          "line-color": "#dfd7b9",
          "line-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          },
          "line-dasharray": [
            0.36,
            0.18
          ],
          "line-opacity": 1
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway",
              "primary",
              "secondary",
              "tertiary",
              "trunk"
            ],
            [
              "==",
              "structure",
              "tunnel"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "tunnel_major outline",
        "paint": {
          "line-color": "#d6c7a3",
          "line-width": {
            "base": 1.4,
            "stops": [
              [
                12,
                0.5
              ],
              [
                20,
                10
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.35,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway",
              "primary",
              "secondary",
              "tertiary",
              "trunk"
            ],
            [
              "==",
              "structure",
              "tunnel"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "tunnel_major",
        "paint": {
          "line-color": "#dfd7b9",
          "line-width": {
            "base": 1.4,
            "stops": [
              [
                6,
                0.5
              ],
              [
                20,
                30
              ]
            ]
          },
          "line-dasharray": [
            0.28,
            0.14
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway_link",
              "street",
              "street_limited",
              "service",
              "track",
              "pedestrian",
              "path",
              "link"
            ],
            [
              "in",
              "structure",
              "none",
              "ford"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "road_minor outline",
        "paint": {
          "line-color": "#d6c7a3",
          "line-width": {
            "base": 1.6,
            "stops": [
              [
                12,
                0.5
              ],
              [
                20,
                10
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway_link",
              "street",
              "street_limited",
              "service",
              "track",
              "pedestrian",
              "path",
              "link"
            ],
            [
              "in",
              "structure",
              "none",
              "ford"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "road_minor",
        "paint": {
          "line-color": "#dfd7b9",
          "line-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway",
              "primary",
              "secondary",
              "tertiary",
              "trunk"
            ],
            [
              "in",
              "structure",
              "none",
              "ford"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "road_major outline",
        "paint": {
          "line-color": "#d6c7a3",
          "line-width": {
            "base": 1.6,
            "stops": [
              [
                12,
                0.5
              ],
              [
                20,
                10
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway",
              "primary",
              "secondary",
              "tertiary",
              "trunk"
            ],
            [
              "in",
              "structure",
              "none",
              "ford"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "road_major",
        "paint": {
          "line-color": "#dfd7b9",
          "line-width": {
            "base": 1.4,
            "stops": [
              [
                6,
                0.5
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway_link",
              "street",
              "street_limited",
              "service",
              "track",
              "pedestrian",
              "path",
              "link"
            ],
            [
              "==",
              "structure",
              "bridge"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "bridge_minor outline",
        "paint": {
          "line-color": "#d6c7a3",
          "line-width": {
            "base": 1.6,
            "stops": [
              [
                12,
                0.5
              ],
              [
                20,
                10
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "butt",
          "line-join": "miter",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway",
              "primary",
              "secondary",
              "tertiary",
              "trunk"
            ],
            [
              "==",
              "structure",
              "bridge"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "bridge_major outline",
        "paint": {
          "line-color": "#d6c7a3",
          "line-width": {
            "base": 1.6,
            "stops": [
              [
                12,
                0.5
              ],
              [
                20,
                10
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway_link",
              "street",
              "street_limited",
              "service",
              "track",
              "pedestrian",
              "path",
              "link"
            ],
            [
              "==",
              "structure",
              "bridge"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "bridge_minor",
        "paint": {
          "line-color": "#dfd7b9",
          "line-width": {
            "base": 1.55,
            "stops": [
              [
                4,
                0.25
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "in",
              "class",
              "motorway",
              "primary",
              "secondary",
              "tertiary",
              "trunk"
            ],
            [
              "==",
              "structure",
              "bridge"
            ]
          ]
        ],
        "type": "line",
        "source": "mapbox",
        "id": "bridge_major",
        "paint": {
          "line-color": "#dfd7b9",
          "line-width": {
            "base": 1.4,
            "stops": [
              [
                6,
                0.5
              ],
              [
                20,
                30
              ]
            ]
          }
        },
        "source-layer": "road"
      }
    ],
    "sprite": "https://raw.githubusercontent.com/osm2vectortiles/mapbox-gl-styles/master/sprites/basic-v9",
    "glyphs": "https://raw.githubusercontent.com/osm2vectortiles/mapbox-gl-styles/master/glyphs/{fontstack}/{range}.pbf",
    "created": "2016-10-16T04:40:12.678Z",
    "modified": "2016-11-21T07:39:43.968Z",
    "name": "Basic",
    "metadata": {
      "mapbox:autocomposite": true,
      "mapbox:type": "template"
    },
    "version": 8,
    "sources": {
      "mapbox": {
        "url": mapURL,
        "type": "vector"
      }
    },
    "id": "giqd6hug7"
  };

//STYLE END//


var mapEl = document.querySelector('a-map');
var markerEl = document.querySelector('#marker');
var setProperty = window.AFRAME.utils.entity.setComponentProperty;


// Custom vectormap style from osm2vectortiles CDN
var mapEl = document.querySelector('a-map')
mapEl.addEventListener('map-loaded', function () {
    mapEl.setAttribute('map', 'style', JSON.stringify(style));

    navigator.geolocation.getCurrentPosition(function (position) {
      var zoom = 10;
      var long = position.coords.longitude;
      var lat = position.coords.latitude;
      console.log("Got Coordinaates " + long + ' ' + lat);

      setProperty(mapEl, 'map.center', long + ' ' + lat);
      setProperty(mapEl, 'map.zoom', zoom);
      // can set a marker on the map with project method. not working well with with ar.js.
      // so visibility set to false
      setProperty(markerEl, 'position', mapEl.components.map.project(long, lat));
      setProperty(markerEl, 'visible', false);

      window.addEventListener("keypress", function (event) {
        if (event.code === "BracketLeft") {
          zoom++;
          setProperty(mapEl, 'map.zoom', zoom);
          console.log("zoom out");
        }
        if (event.code === "BracketRight") {
          zoom--;
          setProperty(mapEl, 'map.zoom', zoom);
          console.log("zoom in")
        }

      });

      window.addEventListener("keydown", function (event) {

        if (event.code === "KeyW") {
          lat = lat + 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("lat ++");
          console.log(lat);
        }
        if (event.code === "KeyS") {
          lat = lat - 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("lat --")
          console.log(lat);
        }
        if (event.code === "KeyA") {
          long = long - 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("long --");
          console.log(long);
        }
        if (event.code === "KeyD") {
          long = long + 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("long ++")
          console.log(long);
        }

      });

    }, function (error) {
      console.error(error);
    });

});

// Keyboard control


      


