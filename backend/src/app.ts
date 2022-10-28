import { routes } from './router';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
// import multer from 'multer';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));
// app.use(multer)
app.use(routes);
