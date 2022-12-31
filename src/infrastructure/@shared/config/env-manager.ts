import * as dotenv from 'dotenv'
dotenv.config()

export const URL_MONGO_DEV = process.env.URL_MONGO_DEV as string;

export const MONGO_URL_TEST = process.env.URL_DATABASE_TEST as string;

export const URL_MONGO_PROD = process.env.URL_MONGO_PROD as string;

export const URL_API = process.env.URL_API as string;

export const PORT = process.env.PORT || "3030";