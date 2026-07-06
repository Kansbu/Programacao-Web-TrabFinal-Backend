import express from 'express';
import cors from 'cors';
import { animeRouterObject } from './routes/anime.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/animes",animeRouterObject);

export {app};
