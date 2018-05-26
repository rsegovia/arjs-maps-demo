var newStyle 
var mapEl = document.querySelector('a-map');
var markerEl = document.querySelector('#marker');
var setProperty = window.AFRAME.utils.entity.setComponentProperty;
var mapEl = document.querySelector('a-map')

//Local vector tile style
//fetch('/styles/klokantech-basic.json') // Call the fetch function passing the url of the API as a parameter
fetch('https://maps.tilehosting.com/c/9387f2e7-20f9-4bd6-8ace-823ffd5ae8ce/styles/basic/style.json?key=u97ZyzhSlgbbrA7IPN6E')
.then(function(resp) {
    // Your code for handling the data you get from the API
    //console.log(data)
   return resp.json()
})
.then(function(data){[]
 console.log(data)
 newStyle = data;
})
.catch(function(data) {
    // This is where you run code if the server returns any errors
    console.log("fetch error")
});


//On map loading in the aframe:
//1) Load in vector style
//2) Get current position
//3) draw location as a red dot
//4) instantiate keyboard controls

mapEl.addEventListener('map-loaded', function () {
    mapEl.setAttribute('map', 'style', JSON.stringify(newStyle));
    //displays map at users current location if allowed
    navigator.geolocation.getCurrentPosition(function (position) {
      var zoom = 10;
      var long = position.coords.longitude;
      var lat = position.coords.latitude;
      
      console.log("Got Coordinaates " + long + ' ' + lat);

      setProperty(mapEl, 'map.center', long + ' ' + lat);
      setProperty(mapEl, 'map.zoom', zoom);
      
      //shows red dot on canvas
      setProperty(markerEl, 'position', mapEl.components.map.project(long, lat));
      setProperty(markerEl, 'visible', true);
      
      //Zoom controls
      window.addEventListener("keypress", function (event) {
        //console.log(event.code);
        if (event.code === "BracketLeft" || event.code === "Minus" ||  event.code === "NumpadSubtract" ) {
          zoom--;
          setProperty(mapEl, 'map.zoom', zoom);
          console.log("zoom out");
        }
        if (event.code === "BracketRight" || event.code === "Add" || event.code === "Equal" ||  event.code === "NumpadAdd") {
          zoom++;
          setProperty(mapEl, 'map.zoom', zoom);
          console.log("zoom in")
        }
      });
      //Panning controls
      window.addEventListener("keydown", function (event) {

        if (event.code === "KeyW" || event.code === "ArrowUp") {
          lat = lat + 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("lat ++");
          console.log(lat);
        }
        if (event.code === "KeyS" || event.code === "ArrowDown") {
          lat = lat - 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("lat --")
          console.log(lat);
        }
        if (event.code === "KeyA" || event.code === "ArrowLeft") {
          long = long - 0.005;
          setProperty(mapEl, 'map.center', long + ' ' + lat);
          console.log("long --");
          console.log(long);
        }
        if (event.code === "KeyD" || event.code === "Arrowright") {
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

