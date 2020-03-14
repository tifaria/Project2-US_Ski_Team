d3.json("ski.json").then((data) => {
  //Filtering for Alpine team members
  function filterAlpine(ski) {
    if (ski.team == "Alpine") {
      return ski.team;
    }
  }
  var filteredAlpine = data.filter(filterAlpine);

  var alpine_names = filteredAlpine.map(skiers => skiers.name);
  var alpine_cities = filteredAlpine.map(skiers => skiers.city);
  var alpine_states = filteredAlpine.map(skiers => skiers.state);
  var alpine_team = filteredAlpine.map(skiers => skiers.team);

  //Filtering for Freeski team members
  function filterFreeski(ski) {
    if (ski.team == "Freeski") {
      return ski.team;
    }
  }
  var filteredFreeski = data.filter(filterFreeski);

  var freeski_names = filteredFreeski.map(skiers => skiers.name);
  var freeski_cities = filteredFreeski.map(skiers => skiers.city);
  var freeski_states = filteredFreeski.map(skiers => skiers.state);
  var freeski_team = filteredFreeski.map(skiers => skiers.team);

  //Filtering for Freestyle team members
  function filterFreestyle(ski) {
    if (ski.team == "Freestyle") {
      return ski.team;
    }
  }
  var filteredFreestyle = data.filter(filterFreestyle);

  var freestyle_names = filteredFreestyle.map(skiers => skiers.name);
  var freestyle_cities = filteredFreestyle.map(skiers => skiers.city);
  var freestyle_states = filteredFreestyle.map(skiers => skiers.state);
  var freestyle_team = filteredFreestyle.map(skiers => skiers.team);

  //Filtering for Cross Country team members
  function filterCrossCountry(ski) {
    if (ski.team == "Cross Country") {
      return ski.team;
    }
  }
  var filteredCrossCountry = data.filter(filterCrossCountry);

  var cross_country_names = filteredCrossCountry.map(skiers => skiers.name);
  var cross_country_cities = filteredCrossCountry.map(skiers => skiers.city);
  var cross_country_states = filteredCrossCountry.map(skiers => skiers.state);
  var cross_country_team = filteredCrossCountry.map(skiers => skiers.team);

  //Filtering for Ski Jumping team members
  function filterSkiJumping(ski) {
    if (ski.team == "Ski Jumping") {
      return ski.team;
    }
  }
  var filteredSkiJumping = data.filter(filterSkiJumping);

  var ski_jumping_names = filteredSkiJumping.map(skiers => skiers.name);
  var ski_jumping_cities = filteredSkiJumping.map(skiers => skiers.city);
  var ski_jumping_states = filteredSkiJumping.map(skiers => skiers.state);
  var ski_jumping_team = filteredSkiJumping.map(skiers => skiers.team);

  //Filtering for Nordic team members
  function filterNordic(ski) {
    if (ski.team == "Nordic Combined") {
      return ski.team;
    }
  }
  var filteredNordic = data.filter(filterNordic);

  var nordic_names = filteredNordic.map(skiers => skiers.name);
  var nordic_cities = filteredNordic.map(skiers => skiers.city);
  var nordic_states = filteredNordic.map(skiers => skiers.state);
  var nordic_team = filteredNordic.map(skiers => skiers.team);

  //Filtering for Snowboard team members
  function filterSnowboard(ski) {
    if (ski.team == "Snowboard") {
      return ski.team;
    }
  }
  var filteredSnowboard = data.filter(filterSnowboard);

  var snowboard_names = filteredSnowboard.map(skiers => skiers.name);
  var snowboard_cities = filteredSnowboard.map(skiers => skiers.city);
  var snowboard_states = filteredSnowboard.map(skiers => skiers.state);
  var snowboard_team = filteredSnowboard.map(skiers => skiers.team);

  var values = [alpine_names, alpine_cities, alpine_states, alpine_team]

  var data = [{
    type: 'table',
    header: {
      values: [["<b>Name</b>"], ["<b>City</b>"], ["<b>State</b>"], ["<b>Team</b>"]],
     align: "center",
     line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: values,
      align: "center",
      line: {color: "black", width: 1},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
  }]

  Plotly.newPlot('table', data);

  // On change to the DOM, call getData()
  d3.selectAll("#selDataset").on("change", getData);

  // Function called by DOM changes
  function getData() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // Initialize empty arrays
    var names = [];
    var cities = [];
    var states = [];
    var team = [];

    //Conditional loops
    if (dataset == 'alpine') {
      names = alpine_names;
      cities = alpine_cities;
      states = alpine_states;
      team = alpine_team;
    }
    else if (dataset == 'freeski') {
      names = freeski_names;
      cities = freeski_cities;
      states = freeski_states;
      team = freeski_team;
    }
    else if (dataset == 'freestyle') {
      names = freestyle_names;
      cities = freestyle_cities;
      states = freestyle_states;
      team = freestyle_team;
    }
    else if (dataset == 'cross_country') {
      names = cross_country_names;
      cities = cross_country_cities;
      states = cross_country_states;
      team = cross_country_team;
    }
    else if (dataset == 'ski_jumping') {
      names = ski_jumping_names;
      cities = ski_jumping_cities;
      states = ski_jumping_states;
      team = ski_jumping_team;
    }
    else if (dataset == 'nordic') {
      names = nordic_names;
      cities = nordic_cities;
      states = nordic_states;
      team = nordic_team;
    }
    else if (dataset == 'snowboard') {
      names = snowboard_names;
      cities = snowboard_cities;
      states = snowboard_states;
      team = snowboard_team;
    }
    //Creating an array
    values = [names, cities, states, team]
    // Call function to update the chart
    updatePlotly(values);
  }

  function updatePlotly(newvalues) {
    Plotly.restyle("table", "values", [newvalues]);
  }

});