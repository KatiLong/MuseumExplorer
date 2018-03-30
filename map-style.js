let mapStyle = [
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


const APIkey = 'AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM';

var map;
var infowindow;
var service;
var bounds;
var markers = [];
//var index = 0;

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

// The Map
function initMap() {
    var Center = {
        lat: 0,
        lng: 0
    }

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
        //        index = 0;

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
        //      type: 'museum'               }, callback);


        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
            //            console.log('Place had viewport');
        } else {
            bounds.extend(place.geometry.location);
            //            console.log('Place did not have viewport ELSE');
        }

        map.fitBounds(bounds);

        //sets Google search box back to empty
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
