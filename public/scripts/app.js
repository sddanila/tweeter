/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function createTweetElement(data) {
    console.log('This is working!');

    let username = data.user.name;
    let avatar = data.user.avatars.small;
    let userId = data.user.handle;
    let tweetText = escape(data.content.text);
    let time = data.created_at;

    let $tweet = `
        <section id="container">
            <article class="tweet">
            <header>
                <h3>
                <img class="userIcon" src=${avatar}>
                ${username}
                </h3>
                <span>${userId}</span>
            </header>
            <p>${tweetText}</p>
            <footer>
                <div>${time}</div>
                <div class="sn-icons"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i><div>
            </footer>
            </article>
        </section>
    `;
    return $tweet;
}

function renderTweets(data){
    for (var i = 0; i < data.length; i++){
        let $newTweet = createTweetElement(data[i]);
        $('.tweets-container').append($newTweet);
    }
}

$(document).ready($(function() {
    let $form = $('#tweet-form');
    $form.on('submit', function (event) {
        event.preventDefault();
        let tweetText = $('#textarea').val();
        if( tweetText.length > 140 || tweetText.length <= 0){
            alert("Your tweet is too long or too short!");
        } else {
            console.log('Tweet submitted, performing ajax call...');
            $.post({
                url: 'http://localhost:8080/tweets',
                method: 'POST',
                data: { text: tweetText },
                success: function (data) {
                    $('.new-tweet').after(createTweetElement(data));
                    $('#container').text
                }
            })
        }
    });
// GET EXISTING TWEETS FROM DATABASE
    $.getJSON({
        url: 'http://localhost:8080/tweets',
        method: 'GET',
        data: {get_param: 'value'},
        success: function (data) {
            renderTweets(data);
            console.log('Success loading original database!');
        }
    });
    $('.compose-button').click(function(){
        $('.new-tweet').toggle();
    })
}))