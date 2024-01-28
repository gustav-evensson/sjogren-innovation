import payload from "payload";
import type { InitOptions } from "payload/config";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = { 
    client: null,
    promise: null
   };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({initOptions}: Args = {}) => {
  if(!process.env.PAYLOAD_SECRET) {
    throw new Error("Payload secret not found");
  }

  if(cached.client) {
    return cached.client;
  }

  if(!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {})
    });
  }

  try {
    cached.client = await cached.promise;
    return cached.client;
  } catch (error: unknown) {
    cached.promise = null;
    throw error;
  }
};