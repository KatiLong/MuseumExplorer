// Client ID zWsHIInzwkCXLA9ZS5q4HAaLOwadiHOi
// Client Secret kyGL18H4d80Ag6CD

//Google Maps
// AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM
      const APIkey = 'AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM';

      var map;
      var infowindow;
      var service;

      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

///////////////////////////////////////////////////////////////////////////////////////
    // function getPlaceDetailsById (placeId) {
    //    var params = {
    //       tags: placeId,
    //       tagmode: "any",
    //       format: "json"
    //         };
    //         var result = $.ajax({
    //             /* update API end point */

    //             url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId + "&key=AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM",
    //             data: params,
    //             dataType: "json",
    //             /*set the call type GET / POST*/
    //             type: "GET",
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*'
    //             },
    //             crossDomain: true
    //         })
    //         /* if the call is successful (status 200 OK) show results */
    //         .done(function (result) {
    //             /* if the results are meeningful, we can just console.log them */
    //             // console.log(result);
    //         })
    //         /* if the call is NOT successful show errors */
    //         .fail(function (jqXHR, error, errorThrown) {
    //             console.log(jqXHR);
    //             console.log(error);
    //             console.log(errorThrown);
    //         });
    // }
///////////////////////////////////////////////////////////////////////////////////////

  function initMap() {
    var NYC = {lat: 40.749460, lng: -73.988631};

    map = new google.maps.Map(document.getElementById('map'), {
      center: NYC,
      zoom: 12
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    console.log(service);
    service.nearbySearch({
      location: NYC,
      radius: 50000,
      type: ['museum']
    }, callback);

    console.log(google);
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

  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      icon: iconBase + 'museum_maps.png'
    });

      // Opens new window when user clicks on marker
    google.maps.event.addListener(marker, 'click', function() {
      // window.open("https://www.w3schools.com");
      var request = {
        reference: place.reference
      };
      service.getDetails(request, function(details, status) {
        console.log([
          details.name,
          details.formatted_address,
          details.website,
          details.rating,
          details.formatted_phone_number]);
        // infowindow.open(map, marker);
      });
    });

    // Shows name when user hovers over markers
    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
      });
  }

  // $(initMap());

  // service.getDetails({
  //   placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  // }, function(place, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     var marker = new google.maps.Marker({
  //       map: map,
  //       position: place.geometry.location
  //     });
  //     google.maps.event.addListener(marker, 'click', function() {
  //       infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
  //         'Place ID: ' + place.place_id + '<br>' +
  //         place.formatted_address + '</div>');
  //       infowindow.open(map, this);
  //     });
  //   }
  // });



//Google Street View

//YouTube API



// function getApiData (searchTerm, callback) {
//   //create API object [inside getApiData]
//   $.getJSON('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     maxResults: 5,
//     key: APIkey,
//     q: searchTerm
//     },
//     callback);
// }

// getApiData ('The MET', (data) => console.log(data))
