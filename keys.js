// twitter package
var twitter = require('twitter');
// node-spotify-api package
var spotify = require('node-spotify-api');
// request package
var omdb = require('request');

console.log('this is loaded');

var twitterKeys = {
  consumer_key: ' VwM7S7Wh4hQU9kkp0mw3D59qK',
  consumer_secret: 'jT3r6dvcfoAmOXh5ZtVTh4iE5h86Wf5J0iwHp8IVvZaEjAAlOD',
  access_token_key: ' 912500399923396609-va77xxZG0bI0d1nq1xbQ7ODZ7V6byZe',
  access_token_secret: 'ZNvWXYuARJLyO6osSOCVLWnzpQOt7Zhmd0hfRiraWQdb2'
};

module.exports = twitterKeys;

// node-spotify-api package example code
/*var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '78afd3750dc5428dae64431dd241fe86',
  secret: '4685a7bbdc164b7bb65535184613d6c7'
});
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

module.exports = spotifyKey;*/