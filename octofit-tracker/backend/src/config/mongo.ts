import mongoose from 'mongoose';
import { mongoUri } from './env';

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  await mongoose.connect(mongoUri, {
    dbName: 'octofit_db',
  });

  return mongoose.connection;
}