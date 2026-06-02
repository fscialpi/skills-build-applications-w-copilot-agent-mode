import dotenv from 'dotenv';
import { createApp } from './app';
import { connectDatabase } from './config/mongo';
import { port } from './config/env';

dotenv.config();

async function main() {
  await connectDatabase();

  const app = createApp();

  app.listen(port, () => {
    console.log(`OctoFit Tracker API listening on port ${port}`);
  });
}

main().catch((error) => {
  console.error('Failed to start OctoFit Tracker API:', error);
  process.exit(1);
});