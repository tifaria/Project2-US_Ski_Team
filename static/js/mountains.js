// Adding tile layer
var lightmap= L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});


// Create the map with our layers
var myMap = L.map("map", {
  center: [39.381266, -97.922211],
  zoom:4.5,

});
lightmap.addTo(myMap);
var newtry = ("mountains.json");

var node = document.createElement("LI"); 
d3.json(newtry, function(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var newMarker = L.marker([data[i].latitude, data[i].longitude])
    .bindPopup("<h1>" + data[i].mountain + "</h1> <hr> <h3>" + data[i].state + "</h1> <hr> <h3>" + data[i].elevation + "</h3>").addTo(myMap);
    
  }
});
