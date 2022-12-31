import mongoose from "mongoose";

import { logger } from '../logger'

import { URL_MONGO_DEV, MONGO_URL_TEST, URL_MONGO_PROD } from "../env-manager";

// Set up default mongoose connection

const CURRENT_NODE_ENV = {
  development: URL_MONGO_DEV,
  test: MONGO_URL_TEST,
  production: URL_MONGO_PROD
}

export async function runConnectionMongo () {


  mongoose.set('strictQuery', false)

  try {
    
    // Get the default connection
    await mongoose.connect(CURRENT_NODE_ENV[process.env.NODE_ENV]);
    logger.info(`Database connected Successfully in ${process.env.NODE_ENV}`);
    
  } catch (error) {

    // Bind connection to error event (to get notification of connection errors)
    logger.error('Error', error)
  }

}