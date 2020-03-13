// Adding tile layer
var lightmap= L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});
var layers = {
  Alpine: new L.LayerGroup(),
  Snowboard: new L.LayerGroup(),
  Freestyle: new L.LayerGroup(),
  NordicCombined: new L.LayerGroup(),
  Freeski: new L.LayerGroup(),
  CrossCountry: new L.LayerGroup(),
  SkiJumping: new L.LayerGroup()
};

// Create the map with our layers
var myMap = L.map("map", {
  center: [39.381266, -97.922211],
  zoom:4.5,
  layers: [
    layers.Alpine,
    layers.Snowboard,
    layers.Freestyle,
    layers.NordicCombined,
    layers.Freeski,
    layers.CrossCountry,
    layers.SkiJumping
  ]
});
lightmap.addTo(myMap);

// Create an overlays object to add to the layer control
var overlays ={ 

  "Alphine" :layers.Alpine,
  "Snowboard" :layers.Snowboard,
  "Frees tyle" :layers.Freestyle,
  "Nordic Combined" :layers.NordicCombined,
  "Free ski" :layers.Freeski,
  "Cross Country" :layers.CrossCountry,
  "Ski Jumping" :layers.SkiJumping
};
// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(myMap);
var newtry = ("ski.json");

var node = document.createElement("LI"); 
d3.json(newtry, function(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var newMarker = L.marker([data[i].lat, data[i].long])
    .bindPopup("<h1>" + data[i].name + "</h1> <hr> <h3>" + data[i].team + "</h1> <hr> <h3>" + data[i].city + "</h3>").addTo(myMap);
    switch(data[i].team){
      case 'Alpine':
        newMarker.addTo(layers['Alpine'])
        break;
      case 'Snowboard':
        newMarker.addTo(layers['Snowboard']);
        break;
      case 'Freestyle':
        newMarker.addTo(layers['Freestyle']);
        break;
      case 'Nordic Combined':
        newMarker.addTo(layers['NordicCombined']);
        break;
      case 'Freeski':
        newMarker.addTo(layers['Freeski']);
        break;
      case 'Cross Country':
        newMarker.addTo(layers['CrossCountry']);
        break;
      case 'Ski Jumping':
        newMarker.addTo(layers['SkiJumping']);
        break;         
    
    }
  }
});
