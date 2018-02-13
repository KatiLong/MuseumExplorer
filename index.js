// Client ID zWsHIInzwkCXLA9ZS5q4HAaLOwadiHOi
// Client Secret kyGL18H4d80Ag6CD

//Google Maps
////////////////////////////////////////////////////////////////////////////////////////////////////////
// AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM
      const APIkey = 'AIzaSyDttWY6FVRVPYVS04eTBI7OX0xMHgeEFNM';

      var map;
      var infowindow;
      var service;

      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


  function initMap() {
    var NYC = {lat: 40.749460, lng: -73.988631};
    var Wellington = {lat: -41.2865, lng: 174.7762};

    map = new google.maps.Map(document.getElementById('map'), {
      center: Wellington,
      zoom: 12
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    console.log(service);
    service.nearbySearch({
      location: Wellington,
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
      getChannelFromYouTube(place.name);
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// function getDataFromApi(searchTerm, callback) {
//   const settings = {
//     url: GITHUB_SEARCH_URL,
//     data: {
//       q: `${searchTerm} in:name`,
//       per_page: 5
//     },
//     dataType: 'json',
//     type: 'GET',
//     success: callback
//   };

//   $.ajax(settings);
// }

// getApiData ('The MET', (data) => console.log(data))

// Function takes in Museum Name from Google as parameter
// API call using YouTube search to identify if channel is present
// If Channel is present,

///////////////////////////////////////////////////////////////////////////////////////
var YTchannelId;

function getChannelFromYouTube (searchTerm, search) {
  console.log(searchTerm + ' channel');
  // if (search) {
  //   endpoint = "https://www.googleapis.com/youtube/v3/search"
  // }
  var result = $.ajax({
      /* update API end point */
      url: "https://www.googleapis.com/youtube/v3/search",
      data: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 1,
        key: APIkey,
        type: 'channel'
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
      YTchannelId = result.items[0].id.channelId;
      console.log(result.items[0].id.channelId)
  })
  /* if the call is NOT successful show errors */
  .fail(function (jqXHR, error, errorThrown) {
      console.log(jqXHR);
      console.log(error);
      console.log(errorThrown);
  });
}

function findChannel (searchTerm, data) {

}

function getDataFromYouTube (searchTerm, search) {
  console.log(searchTerm + ' channel');
  // if (search) {
  //   endpoint = "https://www.googleapis.com/youtube/v3/search"
  // }
  var result = $.ajax({
      /* update API end point */
      url: "",
      data: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 6,
        key: APIkey,
        type: 'channel'
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
  })
  /* if the call is NOT successful show errors */
  .fail(function (jqXHR, error, errorThrown) {
      console.log(jqXHR);
      console.log(error);
      console.log(errorThrown);
  });
}
///////////////////////////////////////////////////////////////////////////////////////
