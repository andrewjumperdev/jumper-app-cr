/* eslint-disable no-var */
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
/* eslint-enable no-var */

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("⚠️ No se encontró MONGODB_URI en .env.local");

const options = {};
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!globalThis._mongoClientPromise) {
    console.log("📡 Conectando a MongoDB...");
    client = new MongoClient(uri, options);
    globalThis._mongoClientPromise = client.connect();
  }
  clientPromise = globalThis._mongoClientPromise;
} else {
  console.log("🚀 Conectando a MongoDB en producción...");
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

