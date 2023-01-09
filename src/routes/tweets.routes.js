import {Router} from 'express';
import {getTweets, postTweet} from '../controllers/tweets.controllers.js';
import {validateTweet} from '../middlewares/tweets.middlewares.js';

const router = Router();

router.post('/tweets', validateTweet, postTweet);
router.get('/tweets', getTweets);

export default router;