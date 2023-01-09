import {userSchema} from '../models/users.models.js';
import { users } from '../app.js';

export async function validateUser(req, res, next){
    const validation = userSchema.validate(req.body, {abortEarly:false});

    if (validation.error){
        const errors = validation.error.details.
        map((detail) => detail.message);
        console.log(errors);
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    const {username, avatar} = req.body;

    try {
        if (users.find((user) => user.username === username))
            return res.status(404).send('Usuário já cadastrado');
    } catch(error){
        console.log(error);
        res.status(500).send(error.message);
    }

    res.locals.user = {
        username,
        avatar
    }
    next();
}