let YTchannelId;
//API Call using Google Name as Search Term to find museum channel
function findYoutubeChannel(searchTerm) {

    let result = $.ajax({
            /* update API end point */
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                q: searchTerm + ' channel',
                part: 'snippet',
                maxResults: 20,
                key: APIkey,
            },
            dataType: "jsonp",
            /*set the call type GET / POST*/
            type: "GET",
            crossDomain: true
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
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
    let foundElem = [];
    //searches results for Youtube Channels
    data.items.forEach(function (elem) {
        if (elem.id.kind === 'youtube#channel') {
            foundElem.push(elem);
        }
    })
    //if youtube channel results are found
    if (foundElem.length > 0) {
        let museumName = searchTerm.split(" ");
        let foundChannel = foundElem[0].snippet.channelTitle;
        let counter = 0;
        //if current keyword matches word from channel title, add to counter
        museumName.forEach((elem) => {
            if (foundChannel.indexOf(elem) != -1) {
                counter++;
            }
        })
        // if 50% of keywords match
        if (counter >= parseInt(museumName.length / 2)) {
            //returns first channel result
            getDataFromYouTube(foundElem[0].id.channelId, foundElem[0].snippet.channelTitle);
        } else {
            console.log('No relevant channels found');
            $('.yt-results-section').html('');
        }
    } else { // No channel found by Youtube API Call
        console.log("No channel found");
        $('.yt-results-section').html('');
    }
}
//API Call searching for videos by channel
function getDataFromYouTube(channelId, channelTitle, resultCount, HTMLclass) {
    let result = $.ajax({
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
    let section = '.yt-results-section';
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
    HTMLOutput += `<div class ="thumbnail-div">`;
    HTMLOutput += `<a href="https://www.youtube.com/watch?v=${elem.id.videoId}" target=_blank>`;
    HTMLOutput += `<img src="${elem.snippet.thumbnails.medium.url}" class="thumbnail-img">`;
    HTMLOutput += `<h3 class='video-title'>${elem.snippet.title}</h3>`;
    HTMLOutput += `</a>`;
    HTMLOutput += `</div>`;
    return HTMLOutput;
}
