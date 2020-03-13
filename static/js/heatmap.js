var myMap = L.map("map", {
  center: [39.381266, -97.922211],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var url = "mountains.json";

d3.json(url, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = [response[i].latitude, response[i].longitude]

    if (location) {
      heatArray.push([response[i].latitude, response[i].longitude,response[i].elevation]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    color:"Yellow",
    radius: 35,
    blur: response.elevation
  
  }).addTo(myMap);

});