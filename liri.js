// require twitter npm package
var Twitter = require('twitter');

// Use this to request data from OMBD?
var request = require('request');

// code to store twitterKeys object in a variable
var keys = require('./keys.js');

var client = new Twitter(keys);

var chooseService = process.argv[2];
var string = process.argv[3];

// 
switch (chooseService) {
  case "my-tweets":
    myTweets();
    break;
  case "spotify-this-song":
    spotifyThisSong();
    break;
  case "movie-this":
    movieThis();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
}

// Grab spotify client id and client secret from keys.js
var spotify = require('./keys.js');

// Concatenate link to Spotify JSON file
var const_url = 'https://api.spotify.com/v1/search?q=';

//var success_url = const_url + songName;

function myTweets() {
	var params = {
		screen_name: 'Alice_B_Alice_B'
	};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    		console.log(response);
  		}
	});
}
// console.log(text + created_at);

// 
/* function spotifyThisSong() {
Request spotify url
request(success_url, function(error, response, track) {
	if (!error && statusCode === 200) {
		console.log(spotify.track.artists);
		console.log(spotify.track.name);
		console.log(spotify.track.preview_url);
		console.log(spotify.track.album);
	}
	else if (error) {
		console.log('error:', error);
	}
	else if (statusCode !== 200) {
		console.log('statusCode:', response && response.statusCode);
	}
});
}
// alternative
function spotifyThisSong() {
	spotify
	  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
	  .then(function(data) {
	    console.log(spotify.track.artists);
		console.log(spotify.track.name);
		console.log(spotify.track.preview_url);
		console.log(spotify.track.album); 
	  })
	  .catch(function(err) {
	    console.error('Error occurred: ' + err); 
	  });
}
*/

// Connect to Spotify JSON file
/*document.curl -X 
GET success_url 
-H "Authorization: Bearer {your access token}"*/
