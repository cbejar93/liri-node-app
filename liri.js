require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require("request");
console.log(keys.twitter);



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// var userInput = process.argv[2];
// var nodeArg= "";
// for (var i = 3 ; process.argv.length; i++){
//     nodeArg += process.argv[i] + "+" ;
// }

// switch (userInput){
//     case `my-tweets`:
//         myTweets();
//         break;
//     case `spotify-this-song`:
//         spotify();
//         break;
//     case `movie-this`:
//         break;
//     case `do-what-it-says`:
//     break;
// }

function myTweets(){
  
    client.get("statuses/user_timeline", function(error, tweets, response) {

        console.log(tweets); 
      })
}

myTweets();

// function spotify(){
//     spotify.search({ type: 'track', query: nodeArg }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data); 
//       });
// }





