import {users} from '../app.js'
export async function signUp(req, res){
    const {username, avatar} = res.locals.user;
    users.push({
        username,
        avatar
    });
    return res.status(201).send('Usuário cadastrado');
}