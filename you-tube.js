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
//Filtering the found Channels
function identifyChannelResult(data, searchTerm) {
    var foundElem = [];
    //searches results for Youtube Channels
    data.items.forEach(function (elem) {
        if (elem.id.kind === 'youtube#channel') {
            foundElem.push(elem);
        }
    })

    //if results are found
    if (foundElem.length > 0) {
        var museumName = searchTerm.split(" ");
        var foundChannel = foundElem[0].snippet.channelTitle;
        var counter = 0;

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
//API Call searching for videos by channel
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
