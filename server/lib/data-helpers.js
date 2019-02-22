"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const MongoClient = require('mongodb').MongoClient;

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },
    
    // Get all tweets in `db`, sorted by newest first
    
    // getTweets((err, tweets) => {
      //     if (err) throw err;
      
      //     console.log("Logging each tweet: ");
      //     for (let tweet of tweets) {
        //         console.log(tweet);
        //     }
        //   });
        // });
        getTweets: function(callback) {
          // db.collection("tweets").find().toArray(callback);
          db.collection("tweets").find().sort({ created_at: -1 }).toArray(callback)
        }
        // db.close();
    };
}
