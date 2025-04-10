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
    console.log("📡 Conectando a MongoDB con URI:", uri.replace(/:([^:@]+)@/, ':****@'));
    client = new MongoClient(uri, options);
    globalThis._mongoClientPromise = client.connect()
      .then(() => {
        console.log("✅ Conexión exitosa a MongoDB");
        return client;
      })
      .catch(err => {
        console.error("❌ Error al conectar a MongoDB:", err);
        throw err;
      });
  }
  clientPromise = globalThis._mongoClientPromise;
} else {
  console.log("🚀 Conectando a MongoDB en producción con URI:", uri.replace(/:([^:@]+)@/, ':****@'));
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then(() => {
      console.log("✅ Conexión exitosa a MongoDB en producción");
      return client;
    })
    .catch(err => {
      console.error("�_AXIS Error al conectar a MongoDB en producción:", err);
      throw err;
    });
}

export default clientPromise;