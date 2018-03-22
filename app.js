var featuredMuseums = [{
        "name": "The MET",
        "googleId": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
        "youtubeId": "UCDlz9C2bhSW6dcVn_PO5mYw",
        "address": "1000 5th Ave",
        "city": "New York, USA",
        "website": "https://www.metmuseum.org/",
        "image": "../images/met.jpg",
        "screenshot": "../images/met-screenshot.jpg",
        "screenshot2": null,
        "artwork": "https://www.metmuseum.org/art/collection",
        "artwork2": "https://artsandculture.google.com/partner/the-metropolitan-museum-of-art",
        "youtubeId2": "",
        "cssClass": "one"
    },
    {
        "name": "The Louvre",
        "googleId": "ChIJD3uTd9hx5kcR1IQvGfr8dbk",
        "youtubeId": "UCDlz9C2bhSW6dcVn_PO5mYw",
        "address": "Rue de Rivoli",
        "city": "Paris, France",
        "website": "https://www.louvre.fr/en",
        "image": "../images/louvre.jpg",
        "screenshot": "../images/louvre-screenshot.jpg",
        "screenshot2": null,
        "artwork": "https://www.louvre.fr/en/selections",
        "artwork2": "",
        "youtubeId2": "",
        "cssClass": "two"
    },
    {
        "name": "Museum of New Zealand Te Papa Tongarewa",
        "googleId": "ChIJnRaYrdGvOG0RMJot6PyfQJo",
        "youtubeId": "UC6cnrd8SMMC2x9rud3RfqlA",
        "address": "55 Cable St",
        "city": "Wellington, NZ",
        "website": "http://www.tepapa.govt.nz/",
        "image": "../images/te-papa.jpg",
        "screenshot": "../images/tepapa-screenshot.jpg",
        "screenshot2": null,
        "artwork": "https://collections.tepapa.govt.nz/",
        "artwork2": "",
        "youtubeId2": "",
        "cssClass": "three"
    },
    {
        "name": "The Field Museum",
        "googleId": "ChIJV0AwM30rDogR2sd-X0cgErU",
        "youtubeId": "UC32ZWrUYSWXzupp2SiYw9mQ",
        "address": "1400 S Lake Shore Dr",
        "city": "Chicago, USA",
        "website": "https://www.fieldmuseum.org/",
        "image": "../images/field-museum.jpg",
        "screenshot": "",
        "screenshot2": null,
        "artwork": "",
        "artwork2": "",
        "youtubeId2": "UCkyfHZ6bY2TjqbJhiH8Y2QQ",
        "cssClass": "four"
    },
    {
        "name": "The British Museum",
        "googleId": "ChIJB9OTMDIbdkgRp0JWbQGZsS8",
        "youtubeId": "UCvpQ-l09fCVxJd3urZbxzHg",
        "address": "Great Russell St, Bloomsbury",
        "city": "London, England",
        "website": "http://www.britishmuseum.org/",
        "image": "../images/british-museum.jpg",
        "screenshot": "../images/british-screenshot.jpg",
        "screenshot2": "../images/british-screenshot-2.jpg",
        "artwork": "https://britishmuseum.withgoogle.com",
        "artwork2": "https://artsandculture.google.com/partner/the-british-museum",
        "youtubeId2": "",
        "cssClass": "five"
    },
    {
        "name": "Rijksmuseum",
        "googleId": "ChIJ5Ra7we4JxkcRhYVAaq5zQ9U",
        "youtubeId": "UCEXuPfYt1M3e8DT1LDeSfVg",
        "address": "Museumstraat 1, 1071 XX",
        "city": "Amsterdam, Netherlands",
        "website": "https://www.rijksmuseum.nl/en",
        "image": "../images/rijksmuseum.jpg",
        "screenshot": "../images/rijks-screenshot.jpg",
        "screenshot2": null,
        "artwork": "https://www.rijksmuseum.nl/en/rijksstudio",
        "artwork2": "https://github.com/Rijksmuseum",
        "youtubeId2": "",
        "cssClass": "six"
    }];


/////////////////////////////////////////////////////////////////////////
//////////////////////// Google Maps ///////////////////////////////////

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


//Google Map Tester Locations
//    var NYC = {
//        lat: 40.749460,
//        lng: -73.988631
//    };
//    var Wellington = {
//        lat: -41.2865,
//        lng: 174.7762
//    };
//    var Paris = {
//        lat: 48.8566,
//        lng: 2.3522
//    }
//    var Motor = {
//        lat: 50.8230,
//        lng: -1.4536
//    }
//    var Wight = {
//        lat: 50.7005,
//        lng: -1.2930
//    }

// Client ID zWsHIInzwkCXLA9ZS5q4HAaLOwadiHOi
// Client Secret kyGL18H4d80Ag6CD

// AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM

const APIkey = 'AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM';

var map;
var infowindow;
var service;
var bounds;

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

// The Map
function initMap() {
    var Center = {
        lat: 0,
        lng: 0
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

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input)

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {

        bounds = new google.maps.LatLngBounds();

        var places = searchBox.getPlaces();
        var place = places[0];

        // places long form
        // var places = new google.maps.places.SearchBox(document.getElementById('pac-input')).getPlaces();


        if (places.length == 0) {
            return;
        }
        // Places Search Option: Nearby Search
        service.nearbySearch({
            location: place.geometry.location,
            radius: 40000,
            type: 'museum',
            maxResults: 20
            // rankby: distance
        }, callback);

        //Places Search Option: Text Search
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
        //        map.setZoom(10);

    });
}

//callback function as dictated by Google Maps API
function callback(results, status) {
    //console.log(`status parameter is ${status}`);

    if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(createMarker);
    }
}
//creates markers for each museum found by NearbySearch
function createMarker(place) {
    markers = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: iconBase + 'museum_maps.png'
    });

    // Displays Museum's info when user clicks on Marker
    google.maps.event.addListener(markers, 'click', function () {
        var currentWebsite;
        var currentPlace = '';

        var request = {
            reference: place.reference
        };

        service.getDetails(request, function (details, status) {
            //            currentWebsite = details.website;
            //            console.log(currentWebsite);
            console.log(details);
            // infowindow.open(map, marker);

            currentPlace += '{';
            currentPlace += '"address":"' + details.formatted_address + '",'; //address
            currentPlace += '"phone":"' + details.formatted_phone_number + '",'; //address
            currentPlace += '"rating":"' + details.rating + '",'; //address
            currentPlace += '"directions":"' + details.url + '",'; //address
            currentPlace += '"website":"' + details.website + '",'; //address
            currentPlace += '"types":"' + details.types + '"';
            currentPlace += '}';

            renderMuseumPage(place, JSON.parse(currentPlace));

            console.log(place.vicinity, place.types);

            //            currentPlace["address"] = place.vicinity;
            //            currentPlace["types"] = place.types;

            //            details.formatted_phone_number
            //            details.rating
            //            details.url   //Link to Place on Google Maps

            //            console.log(currentPlace);
            //            console.log(JSON.parse(currentPlace));
            //            //console.log(place);
            //            console.log(details.photos[0].getUrl({
            //                maxHeight: 640
            //            }));

        });
        console.log(currentPlace);
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


////////////////End of Google Maps////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////Youtube API Functions//////////////


// getApiData ('The MET', (data) => //console.log(data))


var YTchannelId;
//API Call using Google Name as Search Term to find museum channel
function findYoutubeChannel(searchTerm) {

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
            /* if the results are meeningful, we can just //console.log them */
            //console.log(result);
            identifyChannelResult(result, searchTerm);
        })
        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}
//Filtering found Channels
function identifyChannelResult(data, searchTerm) {
    var foundElem = [];
    //searches results for Youtube Channels
    data.items.forEach(function (elem) {
        if (elem.id.kind === 'youtube#channel') {
            foundElem.push(elem);
        }
    })

    //console.log(foundElem);
    //console.log(foundElem[0].snippet.channelTitle);

    //if results are found
    if (foundElem.length > 0) {
        var museumName = searchTerm.split(" ");
        var foundChannel = foundElem[0].snippet.channelTitle;
        var counter = 0;

        console.log(museumName);
        console.log(foundChannel);
        for (var i = 0; i < museumName.length; i++) {
            if (foundChannel.indexOf(museumName[i]) != -1) {
                console.log(museumName[i], 'yes');
                counter++;
            } else {
                console.log(museumName[i], "no");
            }
        }
        if (counter >= parseInt(museumName.length / 2)) {
            console.log('counter is greater than half');
            //returns first channel result
            //console.log(foundElem[0].id.channelId);
            getDataFromYouTube(foundElem[0].id.channelId, foundElem[0].snippet.channelTitle);
        } else {
            console.log('No relevant channels found');
            $('.yt-results-section').html('');
        }
        console.log(counter);
    } else {
        console.log("No channel found");
        $('.yt-results-section').html('');
    }

}
//API Call searching by channel for videos
function getDataFromYouTube(channelId, channelTitle, resultCount, HTMLclass) {
    var result = $.ajax({
            /* update API end point */
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                channelId: channelId,
                part: 'snippet',
                maxResults: (resultCount) ? resultCount : 9, //Allows for total number of results to be changed
                key: APIkey
            },
            dataType: "jsonp",
            /*set the call type GET / POST*/
            type: "GET",
            crossDomain: true
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
            /* if the results are meeningful, we can just //console.log them */
            //console.log(channelTitle);
            //console.log(result);
            displayResults(result, channelTitle, channelId, HTMLclass);
        })
        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}
//Displays videos to page if found
function displayResults(data, channel, id, HTMLclass) {
    //console.log(`Display Results ran`);
    //console.log(data);
    var section = '.yt-results-section';
    if (HTMLclass) {
        section = HTMLclass
    }

    //Adds Header describing Channel
    $(section).html(`<h2 id="results-str"><a href="https://www.youtube.com/channel/${id}" target="_blank">${channel} Channel Videos</a></h2>`);

    //if no videos are found from Channel, tell the user
    if (data.items.length === 0) {
        $(section).append('<h6>No Videos Found</h6>');
    } //otherwise generate HTML string for results and append to HTML
    else {
        const results = data.items.map((elem, index) => generateResults(elem));
        $(section).append(results);
    }
}
//generates HTML string for each video result
function generateResults(elem) {
    let HTMLOutput = ``;
    //console.log(`generate results ran`);
    HTMLOutput += `<div class ="thumbnail-div">`;
    HTMLOutput += `<a href="https://www.youtube.com/watch?v=${elem.id.videoId}" target=_blank>`;
    HTMLOutput += `<img src="${elem.snippet.thumbnails.medium.url}" class="thumbnail-img">`;
    HTMLOutput += `<h3 class='video-title'>${elem.snippet.title}</h3>`;
    HTMLOutput += `</a>`;
    HTMLOutput += `</div>`;
    return HTMLOutput;
}

///////////////End of Youtube API Functions//////////////
//////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Populate HTML Strings for Museum Info Pages///////////////////////////


function populateFeatThumbnails(featuredMuseums) {
    var buildTheHtmlOutput = "";

    $.each(featuredMuseums, function (featuredMuseumsIndex, featuredMuseumsValue) {
        //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
        buildTheHtmlOutput += '<div class="featured-div ' + featuredMuseumsValue.cssClass + ' js-' + (featuredMuseumsIndex) + '">';
        buildTheHtmlOutput += '<h4>' + featuredMuseumsValue.name + '</h4>';
        buildTheHtmlOutput += '<div class="img-div">';
        buildTheHtmlOutput += '<p>' + featuredMuseumsValue.city + '</p>';
        buildTheHtmlOutput += '<ul>';
        if (!featuredMuseumsValue.artwork) { //Displays The Field Museums Second YouTube Channel instead of Online Gallery Link
            buildTheHtmlOutput += '<li>';
            buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youtubeId2 + '" target="_blank">The Brain Scoop</a>';
            buildTheHtmlOutput += '</li>';
        } else {
            buildTheHtmlOutput += '<li>';
            buildTheHtmlOutput += '<a href="' + featuredMuseumsValue.artwork + '" target="_blank">Online Art Gallery</a>';
            buildTheHtmlOutput += '</li>';
        }
        //        (!featuredMuseumsValue.artwork) ?
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youtubeIdubeId + '" target="_blank">Youtube Channel</a>';
        buildTheHtmlOutput += '</li>';
        buildTheHtmlOutput += '</ul>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
    });

    //use the HTML output to show it in the index.html
    $(".featured-wrapper").html(buildTheHtmlOutput);
}

function populateFeatMuseum(index) {
    //console.log(`Populate Featured Museum ran, index is ${index}`);
    var buildTheHtmlOutput1 = "";
    var buildTheHtmlOutput2 = "";

    //HTML string for Upper Info Section
    buildTheHtmlOutput1 += '<div class="museum-img" style="background-image: url(' + featuredMuseums[index].image + ')"></div>';
    buildTheHtmlOutput1 += '<span class="text-container">';
    buildTheHtmlOutput1 += '<h2>' + featuredMuseums[index].name + '</h2>';
    buildTheHtmlOutput1 += '<p>' + featuredMuseums[index].address + '</p>';
    buildTheHtmlOutput1 += '<p>' + featuredMuseums[index].city + '</p>';
    buildTheHtmlOutput1 += '<p>Website: <a href="' + featuredMuseums[index].website + '">' + featuredMuseums[index].website + '</a></p>';
    buildTheHtmlOutput1 += '</span>';
    buildTheHtmlOutput1 += '</div>';

    //HTML string for featured Online Content
    if (index === '3') { //exception for Field Museum format
        console.log('Field Museum was chosen');
        getDataFromYouTube(featuredMuseums[index].youtubeId2, 'The Brain Scoop', 6, ".results-section-2");
    } else if (index === '4') { // for British Museum Format
        console.log('The British Museum was Chosen');
        buildTheHtmlOutput2 += `<a href="${featuredMuseums[index].artwork}" target="_blank">`;
        buildTheHtmlOutput2 += `<h2 id="results-str">The British Museum with Google</h2>`;
        buildTheHtmlOutput2 += `< /a>`;
        buildTheHtmlOutput2 += `<img src="${featuredMuseums[index].screenshot}" alt="Artwork Gallery Screenshot" class="art-preview">`
        buildTheHtmlOutput2 += `<a href="${featuredMuseums[index].artwork2}" target="_blank">`;
        buildTheHtmlOutput2 += `<h2 id="results-str">British Museum: Online Artwork</h2>`;
        buildTheHtmlOutput2 += `<img src="${featuredMuseums[index].screenshot2}" alt="Artwork Gallery Screenshot" class="art-preview">`
        buildTheHtmlOutput2 += `< /a>`;

        $(".results-section-2").html(buildTheHtmlOutput2);
        //Online Artwork link, screenshot artwork artwork2
        //Feature interactive Google with title "The Museum of the World"
    } else {
        buildTheHtmlOutput2 += `<a href="${featuredMuseums[index].artwork}" target="_blank">`;
        buildTheHtmlOutput2 += `<h2 id="results-str">Online Artwork</h2>`;
        buildTheHtmlOutput2 += `< /a>`;
        buildTheHtmlOutput2 += `<img src="${featuredMuseums[index].screenshot}" alt="Artwork Gallery Screenshot" class="art-preview">`

        $(".results-section-2").html(buildTheHtmlOutput2);
    }

    //console.log(buildTheHtmlOutput);
    //use the HTML output to show it in the index.html
    $("#info-container").html(buildTheHtmlOutput1);


    getDataFromYouTube(featuredMuseums[index].youtubeId, featuredMuseums[index].name, 6);

};

function populateMapMuseum(place, details) {
    //console.log("populateMapMuseum ran");
    var buildTheHtmlOutput = "";
    var placePhoto;

    if (!place.photos) {
        placePhoto = '../images/no-image.jpg'; //no image image
    } else {
        //console.log(place.photos[0]);
        placePhoto = place.photos[0].getUrl({
            maxHeight: 640
        })
    }

    console.log(place);
    //    console.log(place.photos[0].getUrl({
    //        maxHeight: 640
    //    }));

    //    currentPlace += '"directions":"' + details.url + '",'; //Place on Google Maps
    //    currentPlace += '"types":"' + details.types + '"'; //Place categories

    buildTheHtmlOutput += '<div class="museum-img" style="background-image: url(' + placePhoto + ')"></div>';
    buildTheHtmlOutput += '<span class="text-container">';
    buildTheHtmlOutput += '<h2>' + place.name + '</h2>';
    buildTheHtmlOutput += '<p>' + details.address + '</p>';
    buildTheHtmlOutput += '<p>P:   ' + details.phone + '</p>';
    buildTheHtmlOutput += '<p>Google Rating:   ' + details.rating + '</p>';
    buildTheHtmlOutput += '<p><a href="' + details.website + '" target="_blank">Website</a></p>';
    buildTheHtmlOutput += '</span>';
    buildTheHtmlOutput += '</div>';


    $("#info-container").html(buildTheHtmlOutput);

}


//STEP 1 Populate the Parks options
//STEP 2 - get the input from the user
//STEP 3 - Results of park information from the external API will be returned(fullName, description, weatherInfo, states, directionsInfo, url)


//////////////////////////////////////////////////////////////////////////////
//CSS Related Listeners

function displayMuseumPage() {
    //console.log(`display museum page ran`);
    $('#featured-museums').hide();
    $('#museum-info-page').show();

    //Hide feat-button display #hFeat
    $('#feat-button').show();
    $('#hFeat').hide();
}

function changeMapStyle() {
    //console.log('changeMapStyle ran');
    $('#map').css({
        "height": "275px",
        "max-width": "725px"
    })
}

function displayFeatMuseum() {
    //console.log("displayFeatMuseum's ran");
    $('#map').hide();
    $('#museum-info-page').show();
    $('.results-section-2').show();

    //Display Map Button
    $('#hMap').hide();
    $('#map-button').show();
}

function changeFeaturedStyle() {
    $('#featured-museums').css({
        "width": "25%",
        "float": "left",
        "overflow-y": "hidden",
        "border-right": "5px solid #073E57"
    })
    $('#museum-info-page').css({
        "float": "right",
        "margin": "none",
        "width": "75%"
    })
    $('.featured-div').css({
        "width": "80%"
    })
    $('.thumbnail-div').css({
        "width": "44%"
    })
}

function renderMuseumPage(place, details) {

    console.log(details);
    //    console.log(details.address);

    //    checkIfFeatured(place.id); //function to check if place is featured museum

    changeMapStyle();
    findYoutubeChannel(place.name);
    populateMapMuseum(place, details);

    displayMuseumPage();
}

//Click on featured museum
$('.featured-wrapper').on('click', '.featured-div', function (event) {
    //string of the current Featured div classes
    let currentTarget = $(event.currentTarget).closest('.featured-div').attr('class');
    //Generate Museum Info
    populateFeatMuseum(currentTarget[currentTarget.length - 1]);
    //Hide Map Main
    //Display Museum Info Main
    changeFeaturedStyle();
    displayFeatMuseum();
});

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

/////////////////////////////////////////////////////////
//Restart Buttons

$('header').on('click', '#map-button', function (event) {
    //Reload Page
    event.preventDefault();
    window.location.reload(true);
});

$('header').on('click', '#feat-button', function (event) {
    //Show Map
    $('#map').show();
    //Hide museum-info
    $('#museum-info-page').hide();
    //show Feat Museums
    $('#featured-museums').show();

    //Hide feat-button display #hFeat
    $('#feat-button').hide();
    $('#hFeat').show();

    //display #map-button hide #hMap
    $('#hMap').hide();
    $('#map-button').show();

});

$(function () {
    populateFeatThumbnails(featuredMuseums);
});
