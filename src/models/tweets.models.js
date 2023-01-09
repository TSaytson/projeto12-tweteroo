import joi from 'joi';

export const tweetSchema = joi.object({
    username: joi.string().min(1).required(),
    tweet:joi.string().min(1).required()
})