//'use strict';
//var featuredMuseums = [
//    {
//        name: 'The MET',
//        googleId: "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
//        youTubeId: "UCDlz9C2bhSW6dcVn_PO5mYw",
//        image: 'https://media.timeout.com/images/103374200/image.jpg',
//        website: 'https://www.metmuseum.org/art/collection',
//        onlineContent: "The MET Breuer & The Cloisters"
//    },
//    {
//        name: 'The Field Museum',
//        googleId: "ChIJV0AwM30rDogR2sd-X0cgErU",
//        youTubeId: "UC32ZWrUYSWXzupp2SiYw9mQ",
//        image: 'https://media.timeout.com/images/103374200/image.jpg',
//        featuredContent: 'https://www.youtube.com/thebrainscoop, The Brain Scoop Channel ID: "UCkyfHZ6bY2TjqbJhiH8Y2QQ"'
//    },
//    {
//        name: "Harvard Art Museums",
//        googleId: "ChIJbaeXiER344kRR_f4e89EQuM",
//        youTubeId: "UC32ZWrUYSWXzupp2SiYw9mQ",
//        image: 'https://media.timeout.com/images/103374200/image.jpg',
//        featuredContent: 'https://www.youtube.com/thebrainscoop, The Brain Scoop Channel ID: "UCkyfHZ6bY2TjqbJhiH8Y2QQ"'
//    },
//    {
//        name: "The British Museum",
//        //        googleId: ,
//        //        youTubeId: ,
//        featuredContent: 'https://www.youtube.com/thebrainscoop, The Brain Scoop Channel ID: "UCkyfHZ6bY2TjqbJhiH8Y2QQ"'
//    },
//    {
//        name: "Rijksmuseum",
//        //        googleId: ,
//        //        youTubeId: ,
//        featuredContent: 'http: //rijksmuseum.github.io/'
//    },
//    {
//        name: "Auckland Museum",
//        googleId: "ChIJbaeXiER344kRR_f4e89EQuM",
//        youTubeId: "UC32ZWrUYSWXzupp2SiYw9mQ",
//        featuredContent: 'https://www.youtube.com/thebrainscoop, The Brain Scoop Channel ID: "UCkyfHZ6bY2TjqbJhiH8Y2QQ"',
//    },
//    {
//        name: "Crystal Bridges Museum",
//        googleId: "ChIJbaeXiER344kRR_f4e89EQuM",
//        youTubeId: "UC32ZWrUYSWXzupp2SiYw9mQ",
//        featuredContent: 'https://www.youtube.com/thebrainscoop, The Brain Scoop Channel ID: "UCkyfHZ6bY2TjqbJhiH8Y2QQ"',
//    }
//]

var featuredMuseums = [{
        "name": "The MET",
        "googleId": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
        "youTubeId": "UCDlz9C2bhSW6dcVn_PO5mYw",
        "address": "1000 5th Ave, New York, NY 10028, USA",
        "city": "New York, USA",
        "website": "https://www.metmuseum.org/",
        "image": "../images/met.jpg",
        "artwork": "https://www.metmuseum.org/art/collection",
        "artwork2": "https://artsandculture.google.com/partner/the-metropolitan-museum-of-art",
        "youtube2": "",
        "cssClass": "one"
    },
    {
        "name": "The Louvre",
        "googleId": "ChIJD3uTd9hx5kcR1IQvGfr8dbk",
        "youTubeId": "UCDlz9C2bhSW6dcVn_PO5mYw",
        "address": "Rue de Rivoli, 75001 Paris, France",
        "city": "Paris, France",
        "website": "https://www.louvre.fr/en",
        "image": "../images/louvre.jpg",
        "artwork": "https://www.louvre.fr/en/selections",
        "artwork2": "",
        "youtube2": "",
        "cssClass": "two"
    },
    {
        "name": "Museum of New Zealand Te Papa Tongarewa",
        "googleId": "ChIJnRaYrdGvOG0RMJot6PyfQJo",
        "youTubeId": "UC6cnrd8SMMC2x9rud3RfqlA",
        "address": "55 Cable St, Te Aro, Wellington 6011, New Zealand",
        "city": "Wellington, NZ",
        "website": "http://www.tepapa.govt.nz/",
        "image": "../images/te-papa.jpg",
        "artwork": "https://collections.tepapa.govt.nz/",
        "artwork2": "",
        "youtube2": "",
        "cssClass": "three"
    },
    {
        "name": "The Field Museum",
        "googleId": "ChIJV0AwM30rDogR2sd-X0cgErU",
        "youTubeId": "UC32ZWrUYSWXzupp2SiYw9mQ",
        "address": "1400 S Lake Shore Dr, Chicago, IL 60605, USA",
        "city": "Chicago, USA",
        "website": "https://www.fieldmuseum.org/",
        "image": "../images/field-museum.jpg",
        "artwork": "",
        "artwork2": "",
        "youtube2": "UCkyfHZ6bY2TjqbJhiH8Y2QQ",
        "cssClass": "four"
    },
    {
        "name": "The British Museum",
        "googleId": "ChIJB9OTMDIbdkgRp0JWbQGZsS8",
        "youTubeId": "UCvpQ-l09fCVxJd3urZbxzHg",
        "address": "Great Russell St, Bloomsbury, London WC1B 3DG, UK",
        "city": "London, England",
        "website": "http://www.britishmuseum.org/",
        "image": "../images/british-museum.jpg",
        "artwork": "Preview: http://www.britishmuseum.org/research/collection_online/search.aspx\nPreview: https://britishmuseum.withgoogle.com",
        "artwork2": "",
        "youtube2": "",
        "cssClass": "five"
    },
    {
        "name": "Rijksmuseum",
        "googleId": "",
        "youTubeId": "UCEXuPfYt1M3e8DT1LDeSfVg",
        "address": "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
        "city": "Amsterdam, Netherlands",
        "website": "http: //rijksmuseum.github.io/",
        "image": "../images/rijksmuseum.jpg",
        "artwork": "https://www.rijksmuseum.nl/nl/rijksstudio?ii=3&p=0&from=2018-03-12T19%3A21%3A31.2689755Z",
        "artwork2": "",
        "youtube2": "",
        "cssClass": "six"
    }];

function populateFeatThumbnails(featuredMuseums) {
    var buildTheHtmlOutput = "";

    $.each(featuredMuseums, function (featuredMuseumsIndex, featuredMuseumsValue) {
        //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
        buildTheHtmlOutput += '<div class="featured-div ' + featuredMuseumsValue.cssClass + ' js-' + (featuredMuseumsIndex + 1) + '">';
        buildTheHtmlOutput += '<h4>' + featuredMuseumsValue.name + '</h4>';
        buildTheHtmlOutput += '<div class="img-div">';
        buildTheHtmlOutput += '<p>' + featuredMuseumsValue.city + '</p>';
        buildTheHtmlOutput += '<ul>';
        console.log(featuredMuseumsValue.youTubeId);
        console.log(featuredMuseumsValue.youtube2);
        if (!featuredMuseumsValue.artwork) { //Displays The Field Museums Second YouTube Channel instead of Online Gallery Link
            buildTheHtmlOutput += '<li>';
            buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youtube2 + '" target="_blank">The Brain Scoop</a>';
            buildTheHtmlOutput += '</li>';
        } else {
            buildTheHtmlOutput += '<li>';
            buildTheHtmlOutput += '<a href="' + featuredMuseumsValue.artwork + '" target="_blank">Online Art Gallery</a>';
            buildTheHtmlOutput += '</li>';
        }
        //        (!featuredMuseumsValue.artwork) ?
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youTubeId + '" target="_blank">Youtube Channel</a>';
        buildTheHtmlOutput += '</li>';
        buildTheHtmlOutput += '</ul>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
    });

    //use the HTML output to show it in the index.html
    $(".featured-wrapper").html(buildTheHtmlOutput);
}

//function populateFeatMuseum(target) {
//    console.log(`render Featured Museum ran, target is ${target}`);
//    var buildTheHtmlOutput = "";
//
//    $.each(featuredMuseums, function (featuredMuseumsIndex, featuredMuseumsValue) {
//        //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
//        buildTheHtmlOutput += '<div class="featured-div ' + featuredMuseumsValue.cssClass + ' js-' + (featuredMuseumsIndex + 1) + '">';
//        buildTheHtmlOutput += '<h4>' + featuredMuseumsValue.name + '</h4>';
//        buildTheHtmlOutput += '<div class="img-div">';
//        buildTheHtmlOutput += '<p>' + featuredMuseumsValue.city + '</p>';
//        buildTheHtmlOutput += '<ul>';
//        if (!featuredMuseumsValue.artwork) { //Displays The Field Museums Second YouTube Channel instead of Online Gallery Link
//            buildTheHtmlOutput += '<li>';
//            buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youTubeId2 + '" target="_blank">The Brain Scoop</a>';
//            buildTheHtmlOutput += '</li>';
//        } else {
//            buildTheHtmlOutput += '<li>';
//            buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.artwork + '" target="_blank">Online Art Gallery</a>';
//            buildTheHtmlOutput += '</li>';
//        }
//        //        (!featuredMuseumsValue.artwork) ?
//        buildTheHtmlOutput += '<li>';
//        buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youTubeId + '" target="_blank">Youtube Channel</a>';
//        buildTheHtmlOutput += '</li>';
//        buildTheHtmlOutput += '</ul>';
//        buildTheHtmlOutput += '</div>';
//        buildTheHtmlOutput += '</div>';
//    });
//
//    //use the HTML output to show it in the index.html
//    $(".museum-info-page").html(buildTheHtmlOutput);
//
//};

//STEP 1 Populate the Parks options

//STEP 2 - get the input from the user


//STEP 3 - Results of park information from the external API will be returned(fullName, description, weatherInfo, states, directionsInfo, url)

function getMuseumDetails(googleId, youTubeId) {
    //getDetails call

    //youTube ajax call

}

//var currentFeatInd = 0;
//
//function displayFeatured (data) {
//
//}
//
//function loadMoreFeatured (data) {
//
//}

//var resources = [
//    {
//        name: 'Google Arts and Culture Institute',
//        website: 'https://www.google.com/culturalinstitute/beta/',
//        features: 'Recently best known for the application that compares your face to artwork, it is an amazing collection of online Art content.'
//    }
//]

var mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8ec3b9"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1a3646"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4b6878"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#64779e"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4b6878"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#334e87"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#283d6a"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6f9ba5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3C7680"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#304a7d"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#98a5be"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c6675"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#255763"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b0d5ce"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#98a5be"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#283d6a"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3a4762"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0e1626"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#4e6d70"
            }
        ]
    }
]
// Client ID zWsHIInzwkCXLA9ZS5q4HAaLOwadiHOi
// Client Secret kyGL18H4d80Ag6CD

//Google Maps
////////////////////////////////////////////////////////////////////////////////////////////////////////
// AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM
const APIkey = 'AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM';

var map;
var infowindow;
var service;
var bounds;

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

function initMap() {
    var Center = {
        lat: 0,
        lng: 0
    }
    var NYC = {
        lat: 40.749460,
        lng: -73.988631
    };
    var Wellington = {
        lat: -41.2865,
        lng: 174.7762
    };
    var Paris = {
        lat: 48.8566,
        lng: 2.3522
    }
    var Motor = {
        lat: 50.8230,
        lng: -1.4536
    }
    var Wight = {
        lat: 50.7005,
        lng: -1.2930
    }
    var markers = [];

    map = new google.maps.Map(document.getElementById('map'), {
        center: Center,
        zoom: 1,
        gestureHandling: 'cooperative',
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        styles: mapStyle
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    console.log(service);
    //     service.nearbySearch({
    //       location: NYC,
    //       radius: 50000,
    //       keyword: 'museum',
    //       maxResults: 20,
    //       // rankby: distance
    //     }, callback);

    console.log(google);
    // console.log(markers);

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input)


    /////////////////////////////////////////////////////////////////////////////////////////////
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {

        bounds = new google.maps.LatLngBounds();

        var places = searchBox.getPlaces();
        var place = places[0];
        // places long form
        // var places = new google.maps.places.SearchBox(document.getElementById('pac-input')).getPlaces();
        console.log(places);
        console.log(places[0].name);

        if (places.length == 0) {
            return;
        }

        service.nearbySearch({
            location: place.geometry.location,
            radius: 40000,
            type: 'museum',
            maxResults: 20
            // rankby: distance
        }, callback);

        //                        service.textSearch({
        //                                    query: place.name,
        //                                    type: 'museum'               }, callback);

        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }

        map.fitBounds(bounds);

        $('#pac-input').val('');
        //        map.setZoom(12);
        //       console.log(markers);
        //   });
        //        searchBox.val('');
    });
    /////////////////////////////////////////////////////////////////////////////////////////////
    //    searchBox.addListener('blur', function () {
    //        input.val('');
    //    })
}


function callback(results, status) {
    console.log(`status parameter is ${status}`);
    console.log(results);
    console.log(results[0].place_id);
    // getPlaceDetailsById (results[0].place_id);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
    }
}

function checkIfFeatured(id) {
    console.log(`Place id is ${id}`);
}

function createMarker(place) {
    markers = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: iconBase + 'museum_maps.png'
    });

    // Opens new window when user clicks on marker
    google.maps.event.addListener(markers, 'click', function () {

        var currentPlace = '';

        currentPlace += `{`;
        currentPlace += `address: ${place.vincinity},`; //address
        currentPlace += `types: ${place.types}`;
        currentPlace += `}`;

        console.log(JSON.parse(currentPlace));

        console.log(place);
        console.log(place.photos[0].getUrl({
            maxWidth: 640
        }));
        var request = {
            reference: place.reference
        };

        service.getDetails(request, function (details, status) {

            console.log([
                details.name,
                details.formatted_address,
                details.website,
                details.rating,
                details.formatted_phone_number,
                details.place_id
            ]);
            // infowindow.open(map, marker);
        });
        //Invoke parent function to display museum info
        renderMuseumPage(place);
    });

    // Shows name when user hovers over markers
    google.maps.event.addListener(markers, 'mouseover', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });


    // Change Museum results as User moves around the map
}

// Clear out the old markers.
// markers.forEach(function(marker) {
//   marker.setMap(null);
// });
// markers = [];


//     // For each place, get the icon, name and location.
//     places.forEach(function(place) {
//       if (!place.geometry) {
//         console.log("Returned place contains no geometry");
//         return;
//       }
//       var icon = {
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25)
//       };

//       // Create a marker for each place.
//       markers.push(new google.maps.Marker({
//         map: map,
//         icon: icon,
//         title: place.name,
//         position: place.geometry.location
//       }));


//Google Street View

//YouTube API


// getApiData ('The MET', (data) => console.log(data))

// Function takes in Museum Name from Google as parameter
// API call using YouTube search to identify if channel is present
// If Channel is present,

///////////////////////////////////////////////////////////////////////////////////////
//Google to YouTube "Translator"
//Language translation for YouTube search Louvre Museum to Musee du Louvre
//Youtube search parameters for accuracy


var YTchannelId;

function findYoutubeChannel(searchTerm) {
    // if (search) {
    //   endpoint = "https://www.googleapis.com/youtube/v3/search"
    // }
    var result = $.ajax({
            /* update API end point */
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                q: searchTerm + ' channel',
                part: 'snippet',
                maxResults: 20,
                key: APIkey,
                // order: 'relevance'
                // location: '(-41.3064,174.8243)',
                // locationRadius: '1000km',
                // type: 'channel'
            },
            dataType: "jsonp",
            /*set the call type GET / POST*/
            type: "GET",
            crossDomain: true
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
            /* if the results are meeningful, we can just console.log them */
            console.log(result);
            findChannel(result);
            // YTchannelId = result.items[0].id.channelId;
            // console.log(result.items[0].id.channelId)
            // getDataFromYouTube(result.items[0].id.channelId);
        })
        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}


function findChannel(data) {
    var foundElem = [];
    //searches results for Youtube Channels
    data.items.forEach(function (elem) {
        if (elem.id.kind === 'youtube#channel') {
            console.log(elem);
            foundElem.push(elem);
        }
    })
    // Use filterChannel function to check returned channels for viability
    //    foundElem.forEach(filterChannel)

    //returns first channel result
    if (foundElem.length > 0) {
        console.log(foundElem[0].id.channelId);
        getDataFromYouTube(foundElem[0].id.channelId, foundElem[0].snippet.channelTitle);
    } else {
        console.log("No channel found");
    }
}

//Filter functions to be added here
function filterChannel(foundElem) {
    //filter results by keyword here
    console.log(`Filter channel results function ran`);
}

function getDataFromYouTube(channelId, channelTitle) {
    var result = $.ajax({
            /* update API end point */
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                channelId: channelId,
                part: 'snippet',
                maxResults: 9,
                key: APIkey
            },
            dataType: "jsonp",
            /*set the call type GET / POST*/
            type: "GET",
            crossDomain: true
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
            /* if the results are meeningful, we can just console.log them */
            console.log(channelTitle);
            console.log(result);
            displayResults(result, channelTitle);
        })
        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}
///////////////////////////////////////////////////////////////////////////////////////\

function displayResults(data, channel) {
    console.log(`Display Results ran`);
    console.log(data);
    const results = data.items.map((elem, index) => generateResults(elem));
    $('.js-results-section').html(`<h2 id="results-str">${channel} Channel Videos</h2> <p>I'm Emily, the Chief Curiosity Correspondent of The Field Museum in Chicago, former volunteer of the University of Montana Zoological Museum, and I'd like to share some of the amazing things we have in the collection with the Internet!</p>`);
    $('.js-results-section').append(results);
}
// function that generates results string
function generateResults(elem) {
    console.log(`generate results ran`);
    return `
        <div class ="thumbnail-div">
            <a href="https://www.youtube.com/watch?v=${elem.id.videoId}" target=_blank>
                <img src="${elem.snippet.thumbnails.medium.url}" class="thumbnail-img">
                <h3 class='video-title'>${elem.snippet.title}</h3>
            </a>
        </div>`;
}


//////////////////////////////////////////////////////////
//CSS Related Listeners

//Lightens div whenever user hovers over entire box, using on-mouseenter/mouseleave for Event Delegation
$('.featured-wrapper').on('mouseenter', '.featured-div', function (event) {
    // do something
    $(this).find("div").css({
        "background-blend-mode": "normal"
    })
}).on('mouseleave', '.featured-div', function (event) {
    // do something different
    $(this).find("div").css({
        "background-blend-mode": "multiply"
    })
});

//////////////////////////////////////////////////////////
//Click on museum from Map

function renderMuseumPage(place) {
    checkIfFeatured(place.id); //function to check if place is featured museum
    changeMapStyle();
    findYoutubeChannel(place.name);
    getDataFromYouTube();

    displayMuseumPage();
}

function displayMuseumPage() {
    console.log(`display museum page ran`);
    $('#featured-museums').hide();
    $('#museum-info-page').show();
}

function changeMapStyle() {
    console.log('changeMapStyle ran');
    $('#map').css({
        "height": "275px",
        "max-width": "725px"
    })
}


function displayFeatMuseum() {
    console.log("displayFeatMuseum's ran");
    $('#map').hide();
    $('#museum-info-page').show();
}

function changeFeaturedStyle() {
    $('#featured-museums').css({
        "border-top": "none"
    })
}

//Click on featured museum
$('.featured-wrapper').on('click', '.featured-div', function () {
    let currentTarget = this;
    //Generate Museum Info
    //    populateFeatMuseum(this);
    //Hide Map Main
    //Display Museum Info Main
    changeFeaturedStyle();
    displayFeatMuseum();
})




$(function () {
    populateFeatThumbnails(featuredMuseums);
});
