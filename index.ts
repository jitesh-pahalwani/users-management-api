require('dotenv').config();

import express from 'express';
import cors from 'cors';

import { usersRouter } from './src/routes/users';

import { errorHandler } from './src/middlewares/error-handler';

const app = express();
app.use(express.json());
app.use(cors());

app.use(usersRouter);

app.use(errorHandler);

app.listen(process.env.PORT_NUMBER, () => {
    return console.log(`Listening on port ${process.env.PORT_NUMBER}`);
});