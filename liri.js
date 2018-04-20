require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require("request");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userInput = process.argv[2];
var nodeArg= "";
for (var i =3; process.argv.length; i++){
    nodeArg += process.argv[i] + "+" ;
}

switch (userInput){
    case `my-tweets`:
        // mytweetfunction 
        break;
    case `spotify-this-song`:
        // myspotifyfunction
        break;
    case `movie-this`:
        break;
    case `do-what-it-says`:
    break;
}

