$(document).ready(function(){
		
//Smooth scroll from w3schools
//This function adds a smooth scroll action when you click buttons at the nav bar
    var satMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/cj01h2sdw008k2rplxbe3t80g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 13,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/cj01h2sdw008k2rplxbe3t80g/',
  });
	//Street map layer
  var streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/cj01hbnf100862sll60gc7vtk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 13,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/cj01hbnf100862sll60gc7vtk/'
});
  //Outdoors map layer
  var outdoorsMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/cj01hfwt7008a2smmiqc7ea2w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	  maxZoom: 13,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/cj01hfwt7008a2smmiqc7ea2w/'
});
  //Different layers that you can select on the map satellite, streets, and outdoors
  var baseMap = {
    "Satellite": satMap,
    "Streets": streetMap,
    "Outdoors": outdoorsMap,
  };

  //These are the different markers on the map with popup descriptions
  var elevated = L.marker([47.8317, -122.2080]).bindPopup('Elevated Sportz, place for fun with family'),
      airportPark = L.marker([47.8638, -122.2379]).bindPopup('Airport Park, nice place to relax and explore'),
      marthaPark = L.marker([47.8507304, -122.2425288]).bindPopup('Martha Lake Park, beautiful trails and lake'),
			azul = L.marker([47.8608,-122.2209]).bindPopup('Azul Restaurant, Nice restaurant and lounge to get food'),
			zen = L.marker([47.8776, -122.2121]).bindPopup('Sushi Zen, place for nice sushi'),
      pelican = L.marker([47.8555, -122.2196]).bindPopup('Rusty Pelican, restaurant for breakfast and lunch'),
      palmera = L.marker([47.8593, -122.2206]).bindPopup('La Palmera, restaurant for some nice mexican food'),
			tablas = L.marker([47.8568,-122.2210]).bindPopup('Tablas Woodstone Taverna, enjoy nice music and good food'),
			sawmill = L.marker([47.8582, -122.2193]).bindPopup('Saw Mill Cafe, nice homestyle cafe for families'),
      shawn = L.marker([47.8815, -122.2302]).bindPopup('Shawn O Donnell, american grill and irish pub'),
      brunswick = L.marker([47.8482, -122.2501]).bindPopup('Brunswick Lanes, fun bowling with family'),
			towncenter = L.marker([47.8601,-122.2043]).bindPopup('Mill Creek Towncenter, enjoy shopping, food and entertainment')
			
			
  //This is the layer group of markers that you can find on the map   
  var visit = L.layerGroup([elevated,airportPark,marthaPark,azul,zen,pelican,palmera,tablas,sawmill,shawn,brunswick,towncenter]);
  
  var mapOverlay = {
      "visit": visit
  };
    //Default position and zoom of the map when you start the page up     
  var myMap = L.map('map-container', {
    center: [47.855, -122.218],
    zoom: 13,
    layers: [satMap,visit]
  });
// smooth scrolling function
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
	
    L.control.layers(baseMap, mapOverlay).addTo(myMap);
})