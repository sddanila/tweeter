"use strict";

// const MongoClient = require("mongodb").MongoClient;

// => with `destructuring asignment`:
const {MongoClient} = require('mongodb');

const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err){
        console.error(`Failed to connect to ${MONGODB_URI}`);
        throw err;
    }
    // ==> We have a connection to the "test-tweets" db,
    //     starting here.
    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    // ==> In typical node-callback style, any program
    //     logic that needs to use the connection needs
    //     to be invoked from within here.
    //
    // Another way to say: this is an "entry point" for
    // a database-connected application!
    // ==> Let's "get all the tweets". In Mongo-speak, we "find" them.
    // db.collection("tweets").find({}, (err, results) => {
    //     // Lazy error handling:
    //     if(err) throw err;

        // ==> Fair warning: This is going to log a lot of stuff...
        // console.log("find result: ", result);
        // console.log("type of find result: ", typeof result); 
        // => prints the whole CURSOR
        
        // console.log("for each item yielded by the cursor: ");
        // results.each((err, item) => console.log(" ", item))
            // => iterates through the cursor and gives us each item
        // OR 
        // results.toArray((err, resultsArray) => {
        //     if(err) throw err;
        //     console.log("results.toArray: ", resultsArray);
        // })
        // => returns an array of the items
        


        // // REFACTORED GIVING BACK AN ARRAY 
        // db.collection("tweets").find().toArray((err, results) => {
        //     if(err) throw err;

        //     console.log("results array: ", results)
        //     // ==> This is inside this callback now. Think about it:
        //     // This is now the "end of the program", right?.
        //     // ==> At the end, we close the connection:
        //     db.close();
        
        // REFACTOR INTO getTweets FUNCTION
        // function getTweets(callback) {
        //     db.collection("tweets").find().toArray((err, tweets) => {
        //         if(err) {
        //             return callback(err);
        //         }
        //         callback(null, tweets);
        //     });
        // }
        // AND EVEN SHORTER:
        function getTweets(callback) {
            db.collection("tweets").find().toArray(callback);
        }
            getTweets((err, tweets) => {
                if (err) throw err;

                console.log("Logging each tweet: ");
                for (let tweet of tweets) {
                    console.log(tweet);
                }
                db.close();
            });
        });
    // }
        
        // })
    // });
// })
