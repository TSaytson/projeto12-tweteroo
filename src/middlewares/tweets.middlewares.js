import {tweetSchema} from '../models/tweets.models.js';
import { users } from '../app.js';

export async function validateTweet(req, res, next){
    const validation = tweetSchema.validate(req.body, {abortEarly:false});

    if (validation.error){
        const errors = validation.error.details.
        map((detail) => detail.message);
        console.log(errors);
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    const {username, tweet} = req.body;

    try {
        if (!users.find((user) => user.username === username))
            return res.status(404).send('UNAUTHORIZED');
    } catch(error){
        console.log(error);
        res.status(500).send(error.message);
    }

    res.locals.tweet = {
        username,
        tweet
    }
    next();
}