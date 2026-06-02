import { Router } from 'express';
import { getBaseUrl } from '../config/env';

export const healthRouter = Router();

healthRouter.get('/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'octofit-tracker-api',
    baseUrl: getBaseUrl(),
  });
});