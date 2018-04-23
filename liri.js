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
var nodeArg= "";
for (var i = 3 ; i < process.argv.length; i++){
    nodeArg += process.argv[i] + "+" ;
}

switch (userInput){
    case `my-tweets`:
        myTweets();
        console.log("hi");
        break;
    case `spotify-this-song`:
        music(nodeArg);
        break;
    case `movie-this`:
        validation();
        console.log("hello")
        break;
    case `do-what-it-says`:
        random();
    break;
}

function myTweets(){
  
    client.get("statuses/user_timeline", function(error, tweets, response) {


        for (var i = 0; i < tweets.length; i++){
            console.log(tweets[i].text);
            console.log("hi");
        }
      })
};

function music(x){
    spotify.search({ type: 'track', query: x, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log("Artist Name :" + data.tracks.items[0].album.artists[0].name); 
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Link to the URL: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album Name: " + data.tracks.items[0].album.name);
      
      });
}

function validation(){
    if (nodeArg === ""){
        var t = "Mr.+Nobody"
        
        movieTime(t)
    }
    else{
        movieTime(nodeArg)
    }
}

function movieTime(x){
  request("http://www.omdbapi.com/?t=" + x + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If there were no errors and the response code was 200 (i.e. the request was successful)...
    if (!error && response.statusCode === 200) {
  
      // Then we print out the imdbRating
      // console.log(JSON.parse(body));
      console.log("The movies you selected was: " + JSON.parse(body).Title);
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);  
      console.log("It was released in: " + JSON.parse(body).Year);
      console.log("The main actors: " + JSON.parse(body).Actors);
      console.log("The Plot: " + JSON.parse(body).Plot);
      console.log("The Language of the movie: " + JSON.parse(body).Language);
      console.log("It was shot in: " + JSON.parse(body).Country);
      console.log("Rotten Tomato Rating: " + JSON.parse(body).Ratings[1].Value);
      
    }
  });
  
}

function random(){
  fs.readFile('random.txt', "utf-8", function (err, data){
      if (err) {
      return console.log(err);
      }

      console.log(data);
      var input2 = data.split(",")
      console.log(input2);
      var song = input2[1].replace(/"/g, " " )
      console.log(song);
      music(song);



  
    });
}



