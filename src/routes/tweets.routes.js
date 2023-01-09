import {Router} from 'express';
import {getTweets, postTweet} from '../controllers/tweets.controllers.js';

const router = Router();

router.post('/tweets', validateUser, postSignUp);