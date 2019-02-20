/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const data = {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
// }


const data = [
{
    "user": {
    "name": "Newton",
    "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
    },
    "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
},
{
    "user": {
    "name": "Descartes",
    "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    },
    "handle": "@rd" },
    "content": {
    "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
},
{
    "user": {
    "name": "Johann von Goethe",
    "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
    },
    "handle": "@johann49"
    },
    "content": {
    "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
}
];


function createTweetElement(data) {
    console.log('This is working!');

    let username = data.user.name;
    let avatar = data.user.avatars.small;
    let userId = data.user.handle;
    let tweetText = data.content.text;
    let time = data.created_at;

    let $tweet = $(".tweets-container").append(`
    <section id="container">
        <article class="tweet">
          <header class="new-tweet-header">
            <h3 class="name-h3">
              <img class="userIcon" src=${avatar}>
              ${username}
            </h3>
            <span class="userId">${userId}</span>
          </header>
            <p>${tweetText}</p>
          <footer class="tweet-footer">
            <div>${time}</div>
            <div class="sn-icons"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i><div>
          </footer>
        </article>
      </section>
    `);
    return $tweet;
}

function renderTweets(data){
    for (var i = 0; i < data.length; i++){
        let $newTweet = createTweetElement(data[i]);
        $('#tweets-container').append($newTweet);
    }
}

$(document).ready(renderTweets(data));


