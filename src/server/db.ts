import { MongoClient } from "mongodb";
import { MONGODB_URI, DATABASE_NAME } from "./config";

let connectedClient; // cached so no need to connect again

export const connectClient = async () => {
  if (connectedClient) return connectedClient.db(DATABASE_NAME);

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  await client.db(DATABASE_NAME).command({ ping: 1 });
  console.info("connected to MongoDB");
  connectedClient = client;

  return connectedClient.db(DATABASE_NAME);
};
export const stopClient = async () => {
  await connectedClient?.close();
};
