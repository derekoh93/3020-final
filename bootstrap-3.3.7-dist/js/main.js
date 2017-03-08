$(document).ready(function(){
//Smooth scroll from w3schools
//This function adds a smooth scroll action when you click buttons at the nav bar
    var satMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/cj01h2sdw008k2rplxbe3t80g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/cj01h2sdw008k2rplxbe3t80g/',
  });
	//Street map layer
  var streetMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/cj01hbnf100862sll60gc7vtk/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/cj01hbnf100862sll60gc7vtk/'
});
  //Outdoors map layer
  var outdoorsMap = L.tileLayer('https://api.mapbox.com/styles/v1/derekoh93/cj01hfwt7008a2smmiqc7ea2w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVyZWtvaDkzIiwiYSI6ImNpeXJteWVjdjAwMjYzMnMxM2NsYnZxb2UifQ.WkKLRw3Mk7pEXoSNfW7B3w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	  maxZoom: 14,
    id: 'https://www.mapbox.com/studio/styles/derekoh93/cj01hfwt7008a2smmiqc7ea2w/'
});
  //Different layers that you can select on the map satellite, streets, and outdoors
  var baseMap = {
    "Satellite": satMap,
    "Streets": streetMap,
    "Outdoors": outdoorsMap,
  };
    //Default position and zoom of the map when you start the page up     
  var myMap = L.map('map-container', {
    center: [47.855, -122.218],
    zoom: 14,
    layers: [satMap, visit]
  });
    
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