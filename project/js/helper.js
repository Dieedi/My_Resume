/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/

if (!localStorage.getItem("lang"))
{
    // detect browser/user language
    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
}
else
{
    var userLang = localStorage.getItem("lang");
}

// change language file depending on detected language
if (userLang === "fr")
{
    $("<script src='js/fr.js'></script>").insertAfter("#helper");
    document.getElementsByTagName("html")[0].setAttribute("lang", "fr");
    // load english button onclick function
    loadLang();
}
else
{
    $("<script src='js/en.js'></script>").insertAfter("#helper");
    document.getElementsByTagName("html")[0].setAttribute("lang", "en");
    // load french button onclick function
    loadLang();
}

/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name" class="header">%data%</h1>';
var HTMLheaderRole = '<h4 class="header">%data%</h4><hr>';
var HTMLheaderBtn = '<a id="lang" class="header"><img class="header" src="images/%data%.png" alt=""></a>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="white-text header">%contact%</span><span class="text header"> %data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="white-text header">mobile :</span><span class="text header"><a href="tel:%data%" class="header"> %data%</a></span></li>';
var HTMLemail = '<li class="flex-item"><span class="white-text header">email :</span><span class="text header"><a href="mailto:%data%" class="header"> %data%</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="white-text header">twitter :</span><span class="text header"> %data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="white-text header">github :</span><span class="text header"><a href="https://github.com/%data%" class="header" target="_blank"> %data%</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="white-text header">blog :</span><span class="text header"> %data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="white-text header">location :</span><span class="text header"> %data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic header">';
var HTMLWelcomeMsg = '<span class="welcome-message header">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3" class="header">Skill at a Glance:</h3><ul id="skills" class="list-unstyled header"></ul>';
var HTMLskills = '<li class="flex-item"><span class="text header">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h5>%data%';
var HTMLworkTitle = ' - %data%</h5>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';
var HTMLworkImg = '<img src="%data%" class="logo" width="25%">'

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h5>%data%</h5></div><br clear="all">';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<div class="project-title"><img src="%data%" class="logo">';
var HTMLprojectUrl = '<a href="%data%" target="_blank">%data%</a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<h5>%data%';
var HTMLschoolDegree = '%data%</h5>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<h5>%data%';
var HTMLonlineSchool = ' - %data%</h5><br clear="all">';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a href="%data%" target="_blank">%data%</a>';
var HTMLonlineImage = '<img src="%data%" class="logo">';
var HTMLonlineDescription = '<p>%data%</p>';

var HTMLhobbiesStart = '<div class="hobbies-entry"></div>';
var HTMLhobbiesTitle = '<h5>%data%</h5><br>';
var HTMLhobbiesUrl = '<a href="%data%" target="_blank">%data%</a>';
var HTMLhobbiesDesc = '<p>%data%</p>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
//
function loadLang() {
    $(document).ready(function() {
    $('#lang').click(function() {
        if (userLang === "fr")
        {
            userLang = "en";
        }
        else
        {
            userLang = "fr";
        }

        // store userLang
        localStorage.setItem("lang", userLang);

        // reload page
        document.location.reload();
    });
    });
}

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
 // logClick(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
/*function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

*/
  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
/*  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }
*/
  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
/*  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }
*/
  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
/*  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }
*/
  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
 /* function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}
*/
/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
/*window.addEventListener('load', initializeMap);*/

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
