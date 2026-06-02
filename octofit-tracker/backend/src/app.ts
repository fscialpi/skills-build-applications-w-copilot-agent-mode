import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api', (_request, response) => {
    response.json({
      status: 'ok',
      service: 'octofit-tracker-api',
    });
  });

  app.use('/api', healthRouter);

  return app;
}