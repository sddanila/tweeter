/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
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
}

function createTweetElement(tweetObject) {
    console.log('This is working!');

    let $tweet = $('<article>').addClass('tweet');
    
    
    return $tweet;



    const tweetForm = document.querySelector('#tweet-form');

    tweetForm.addEventListener('submit', function(event){
        event.preventDefault();
        // create new section
        const container = document.querySelector('.container');
        const newSection = document.createElement('section');
        container.append(newSection);

        // create new article
        const newArticle = document.createElement('article')
        const section = document.querySelector('.new-tweet')
        section.append(newArticle);

        // create new header
        const newHeader = document.createElement('header');
        const article = document.querySelector('.tweet');
        article.append(newHeader);

        // create new h3
        const newH3 = document.createElement('h3');
        const header = document.querySelector('.new-tweet-header');
        header.append(newH3);
        
        // create new img
        const newAvatar = document.createElement('img');
        const image = tweetObject.user.avatars.small;
        newAvatar.innerText = image;
        const headerText = document.querySelector('#new-tweet-text').value;
        const h3 = document.querySelector('.name-h3');
        h3.append(newAvatar);
        h3.innerText = headerText;
        
        // create new span
        const newSpan = document.createElement('span');
        const username = tweetObject.user.handle;
        newSpan.innerText = username;
        h3.append(newSpan);

        // create new paragraph
        const newParagraph = document.createElement('paragraph');
        const tweetText = tweetObject.content;
        newParagraph.innerText = tweetText;
        article.append(newParagraph);

        // create new footer
        const newFooter = document.createElement('footer');
        article.append(newFooter);

        // create new div for time
        const newDiv = document.createElement('div')
        const time = tweetObject[created_at];
        newDiv.innerText = time;
        const footer = document.querySelector('.tweet-footer');
        footer.append(newDiv);

        // create new div for social media icons
        const newDivIcons = document.createElement('div');
        footer.append(newDivIcons);
    })
};

var $tweet = createTweetElement(tweetData);
$(document).ready(console.log($tweet));
// $('#tweets-container').append($tweet);

function renderTweets(data){
    for (user in data){
        let newTweet = createTweetElement(user);
        $('#tweets-container').append($newTweet);
    }
}