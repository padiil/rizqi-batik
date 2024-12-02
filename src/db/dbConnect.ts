import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI: string | undefined = process.env.MONGODB_URI;

const options: ConnectOptions = {
  connectTimeoutMS: 10000
};

const dbConnect = (): void => {
  if (!mongoURI) {
    console.error("MONGODB_URI is not defined in the environment variables");
    return;
  }

  mongoose
    .connect(mongoURI, options)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
};

export default dbConnect;
