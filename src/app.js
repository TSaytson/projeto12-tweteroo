import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js'

const app = express();
export const users = [];

app.use(express.json());
app.use(cors());
app.use(usersRoutes);

app.listen(5000, console.log('Server running on port 5000'));