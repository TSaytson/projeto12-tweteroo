import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js'
import tweetsRoutes from './routes/tweets.routes.js'

const app = express();
export const users = [];
export const tweets = [];

app.use(express.json());
app.use(cors());
app.use(usersRoutes);
app.use(tweetsRoutes);

app.listen(5000, console.log('Server running on port 5000'));