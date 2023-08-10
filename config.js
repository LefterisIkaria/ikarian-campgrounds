import * as dotenv from "dotenv";

// if in production don't use .env
if (process.env.NODE_ENV !== "production") dotenv.config();

export const cloudinaryConfig = {
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
};

export const mapboxConfig = {
  token: process.env.MAPBOX_TOKEN,
};
