## "Museum Explorer" | Thinkful API Capstone
Museum Explorer is designed for everyone from art enthusiasts to families looking to see what their local museums hold. It compiles digital information and online content for each museum, allowing the user to browse museums on map (by location) or gives the option to view featured museums.

## Screenshots

Home Page View #1 | Home Page View #2
:-------------------------:|:-------------------------:
![Home Page view-1](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/home-page-1.jpg)  |  ![Home Page view-2](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/home-page-2.jpg)
Museum by Map View #1 | Museum by Map View #2
:-------------------------:|:-------------------------:
![Map Museum view-1](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/map-museum-1.jpg) | ![Map Museum view-2](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/map-museum-2.jpg)
Featured Museums View  | Featured Museums View
:-------------------------:|:-------------------------:
![Featured Museums view-1](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/featured-museum-1.jpg) | ![Featured Museums view-2](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/featured-museum-2.jpg)
![Featured Museums view-3](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/featured-museum-3.jpg) |

## User Cases
This app is for three types of users:
1. As an art enthusiast, I want to gather digital Art Resources in order to view all the resources in one place.
2. As a budget strapped tourist, I want to know what features are already available virtually in order to "travel" at home on my computer.
3. As a patron of local businesses, I want to know what Museums are in my area and what features they have in order to best evaluate how to spend my time and money.

### UI Flow
![UI Flow handwritten draft](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/FullSizeRender%2011.jpg)
### Wireframe _main
![Wireframe _Main](https://github.com/KatiLong/museum-explorer-capstone/blob/master/readme-images/Wireframev1.jpg)
### Wireframe _User Cases
![Wireframe _User Case 1]

## Working Prototype
You can access a working prototype of the app here: [https://katilong.github.io/museum-explorer-capstone/](https://katilong.github.io/museum-explorer-capstone/)

## Functionality
The app's functionality includes:
* The ability to browse Museums by location on a searchable map.
* The app contains a Featured Museum section, which contains museums that have distinct digital content, such as Open Access artwork, exceptional YouTube Channels, and exceptional online features.
* The app displays details about each Museum, such as location, website, and Google rating.
* The app displays a museum's Youtube Channel if it has one.

## Technology
* HTML5
* CSS3
* JavaScript ES5 & ES6
* jQuery

* The app uses AJAX JSON calls to the <a href="https://maps.googleapis.com/maps/api">Google Maps</a> Open Platform API, including the Places Library, to return an interactive map to search for Museums in a given area with clickable icons, which return Place Details for each museum result.
* The app uses AJAX JSON calls to the <a href=""https://www.googleapis.com/youtube/v3/search"">YouTube</a> V3 Data API to find Museum's channels and display a list of videos from that channel.

## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* A better interface for non-English speaking users, including search-specific language translators to ensure all availble digital content (i.e. YouTube Channel) is displayed.
* More advanced filter capabilities for finding a Museum's Youtube Channel.
* Higher interactivity with Google Maps.
