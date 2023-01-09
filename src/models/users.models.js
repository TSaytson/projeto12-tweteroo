import joi from 'joi';

export const userSchema = joi.object({
    username: joi.string().min(1).required(),
    avatar: joi.string().uri().required()
})