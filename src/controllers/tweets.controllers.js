import { tweets } from "../app.js";

export async function getTweets(req, res){
    res.status(200).send(tweets);
}

export async function postTweet(req, res){
    const {username, tweet} = res.locals.tweet;

    tweets.push({
        username,
        tweet
    });
    res.status(201).send('Tweet enviado');
}