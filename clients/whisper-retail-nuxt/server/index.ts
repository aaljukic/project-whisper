import { Nitro } from "nitropack";
import mongoose from "mongoose";
import { Confession } from "./models/confession.schema";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();

  console.log("Trying to connect to: " + config.mongodbURI);

  try {
    await mongoose.connect(config.mongodbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Not connected to MongoDB:");
    console.error(error);
  }
};
