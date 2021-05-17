import express from 'express';
import 'reflect-metadata';
import '../../container';
import cors from 'cors';

import { appRoutes } from './routes';

const app = express();
app.use(cors());

app.use(express.json());

app.use(appRoutes);

export { app };
