'use strict'; //--> Breaks Google Maps API code, throws reference error on 'markers' @526

//////////Featured Museums Data////////////////

let featuredMuseums = [{
        "name": "The MET",
        "googleId": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
        "youtubeId": "UCDlz9C2bhSW6dcVn_PO5mYw",
        "address": "1000 5th Ave",
        "city": "New York, USA",
        "website": "https://www.metmuseum.org/",
        "image": "images/met.jpg",
        "screenshot": "images/met-screenshot.jpg",
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
        "image": "images/louvre.jpg",
        "screenshot": "images/louvre-screenshot.jpg",
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
        "image": "images/te-papa.jpg",
        "screenshot": "images/tepapa-screenshot.jpg",
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
        "image": "images/field-museum.jpg",
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
        "image": "images/british-museum.jpg",
        "screenshot": "images/british-screenshot.jpg",
        "screenshot2": "images/british-screenshot-2.jpg",
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
        "image": "images/rijksmuseum.jpg",
        "screenshot": "images/rijks-screenshot.jpg",
        "screenshot2": null,
        "artwork": "https://www.rijksmuseum.nl/en/rijksstudio",
        "artwork2": "https://github.com/Rijksmuseum",
        "youtubeId2": "",
        "cssClass": "six"
    }];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////Youtube API Functions//////////////



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
        } else { //Displays link for each Museums online art gallery
            buildTheHtmlOutput += '<li>';
            buildTheHtmlOutput += '<a href="' + featuredMuseumsValue.artwork + '" target="_blank">Online Art Gallery</a>';
            buildTheHtmlOutput += '</li>';
        }
        //second LI and closing tags
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<a href="https://www.youtube.com/channel/' + featuredMuseumsValue.youtubeId + '" target="_blank">Youtube Channel</a>';
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
        //API call for The Field Museums Featured Youtube Channel, The Brain Scoop
        getDataFromYouTube(featuredMuseums[index].youtubeId2, 'The Brain Scoop', 6, ".results-section-2");
    } else if (index === '4') { // for British Museum Format
        console.log('The British Museum was Chosen');
        //Special Feature: The British Museum with Google
        buildTheHtmlOutput2 += `<div class="british-thumbnails">`;
        buildTheHtmlOutput2 += `<a href="${featuredMuseums[index].artwork}" target="_blank">`;
        buildTheHtmlOutput2 += `<h2 id="results-str">The British Museum with Google</h2>`;
        buildTheHtmlOutput2 += `<img src="${featuredMuseums[index].screenshot}" alt="Artwork Gallery Screenshot" class="art-preview">`
        buildTheHtmlOutput2 += `</a>`;
        buildTheHtmlOutput2 += `</div>`;
        //British Museum Online Artwork
        buildTheHtmlOutput2 += `<div class="british-thumbnails">`;
        buildTheHtmlOutput2 += `<a href="${featuredMuseums[index].artwork2}" target="_blank">`;
        buildTheHtmlOutput2 += `<h2 id="results-str">British Museum: Online Artwork</h2>`;
        buildTheHtmlOutput2 += `<img src="${featuredMuseums[index].screenshot2}" alt="Artwork Gallery Screenshot" class="art-preview">`
        buildTheHtmlOutput2 += `</a>`;
        buildTheHtmlOutput2 += `</div>`;
        //Appends to result section
        $(".results-section-2").html(buildTheHtmlOutput2);
        //Online Artwork link, screenshot artwork artwork2
        //Feature interactive Google with title "The Museum of the World"
    } else { //All Other Museums displays thumbnail of Online Artwork
        buildTheHtmlOutput2 += `<a href="${featuredMuseums[index].artwork}" target="_blank">`;
        buildTheHtmlOutput2 += `<h2 id="results-str">Online Artwork</h2>`;
        buildTheHtmlOutput2 += `<div class="container">`;
        buildTheHtmlOutput2 += `<img src="${featuredMuseums[index].screenshot}" alt="Artwork Gallery Screenshot" class="art-preview">`
        buildTheHtmlOutput2 += `</div>`;
        buildTheHtmlOutput2 += `</a>`;
        //Appends to result section
        $(".results-section-2").html(buildTheHtmlOutput2);
    }

    //use the HTML output to show it in the index.html
    $("#info-container").html(buildTheHtmlOutput1);

    //Youtube API Call for Featured Museums Youtube Channel videos
    getDataFromYouTube(featuredMuseums[index].youtubeId, featuredMuseums[index].name, 6);

};

function populateMapMuseum(place, details) {

    var buildTheHtmlOutput = "";
    var placePhoto;

    if (!place.photos) {
        placePhoto = 'images/no-image.jpg'; //no image image
    } else {
        //console.log(place.photos[0]);
        placePhoto = place.photos[0].getUrl({
            maxHeight: 640
        })
    }

    //    currentPlace += '"directions":"' + details.url + '",'; //Place on Google Maps
    //    currentPlace += '"types":"' + details.types + '"'; //Place categories

    // Builds HTML with Museum's information
    buildTheHtmlOutput += '<div class="museum-img" style="background-image: url(' + placePhoto + ')"></div>';
    buildTheHtmlOutput += '<span class="text-container">';
    buildTheHtmlOutput += '<h2>' + place.name + '</h2>';
    //conditionals in case a detail is undefined for a given Museum
    if (details.address == "") { //field will be empty if detail is undefined
        console.log(details.address);
    } else {
        buildTheHtmlOutput += '<p id="address">' + details.address + '</p>';
    }
    if (details.phone == "") {
        console.log(details.phone);
    } else {
        buildTheHtmlOutput += '<p>P:   ' + details.phone + '</p>';
    }
    if (details.rating == "") {
        console.log(details.rating);
    } else {
        buildTheHtmlOutput += '<p>Google Rating:   ' + details.rating + '</p>';
    }
    if (details.website == "") {
        console.log(details.website);
    } else {
        buildTheHtmlOutput += '<p><a href="' + details.website + '" target="_blank">Website</a></p>';
    }
    buildTheHtmlOutput += '</span>';
    buildTheHtmlOutput += '</div>';

    //Appends to Museum Info Section
    $("#info-container").html(buildTheHtmlOutput);

}

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
        //        "width": "25%",
        //        "float": "left",
        //        "overflow-y": "hidden",
        //        "border-right": "5px solid #073E57"
        "border-top": "none"
    })
    // May use this to reformate Featured Museums section when museum selected
    //    $('#museum-info-page').css({
    //        "float": "right",
    //        "margin": "none",
    //        "width": "75%"
    //    })
    //    $('.featured-div').css({
    //        "width": "80%"
    //    })
    //    $('.thumbnail-div').css({
    //        "width": "44%"
    //    })
}

function renderMuseumPage(place, details) {
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

//Document ready function
$(function () {
    populateFeatThumbnails(featuredMuseums)
});
