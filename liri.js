require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require("request");
console.log(keys.spotify);



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userInput = process.argv[2];
// var nodeArg= "";
// for (var i = 3 ; process.argv.length; i++){
//     nodeArg += process.argv[i] + "+" ;
// }

// switch (userInput){
//     case `my-tweets`:
//         myTweets();
//         break;
//     case `spotify-this-song`:
//         music();
//         break;
//     case `movie-this`:
//         movieTime();
//         break;
//     case `do-what-it-says`:
//     break;
// }

// function myTweets(){
  
//     client.get("statuses/user_timeline", function(error, tweets, response) {


//         for (var i = 0; i < tweets.length; i++){
//             console.log(tweets[i].jdftext);
//             console.log("hi");
//         }
//       })
// };


// function music(){
//     spotify.search({ type: 'track', query: userInput, limit: 1 }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data.tracks.items[0].album.artists[0].name); 
//       console.log(data.tracks.items[0].name);
//       console.log(data.tracks.items[0].external_urls.spotify);
//       console.log(data.tracks.items[0].album.name);
      
//       });
// }

// function movieTime(){
//   request("http://www.omdbapi.com/?t=" + nodeArg + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

//     // If there were no errors and the response code was 200 (i.e. the request was successful)...
//     if (!error && response.statusCode === 200) {
  
//       // Then we print out the imdbRating
//       // console.log(JSON.parse(body));
//       console.log("The movies you selected was: " + JSON.parse(body).Title);
//       console.log("The movie's rating is: " + JSON.parse(body).imdbRating);  
//       console.log("It was released in: " + JSON.parse(body).Year);
//       console.log("The main actors: " + JSON.parse(body).Actors);
//       console.log("The Plot: " + JSON.parse(body).Plot);
//       console.log("The Language of the movie: " + JSON.parse(body).Language);
//       console.log("It was shot in: " + JSON.parse(body).Country);
//       console.log("Rotten Tomato Rating: " + JSON.parse(body).Ratings[1].Value);
      
//     }
//   });
  
// }

fs.open('./random.txt', 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});




