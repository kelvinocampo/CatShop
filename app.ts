import express from "express";
import bodyParser from 'body-parser';

import user from './routes/user';
import cat from './routes/cat';
import adoption from './routes/adoption';

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/users', user);
app.use('/cats', cat);
app.use('/adoption', adoption);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error: any) => {
  throw new Error(error.message);
});


