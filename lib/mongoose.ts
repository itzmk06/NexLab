import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("Missing MongoDB URL");
    return;
  }

  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "nexlab",
      connectTimeoutMS: 30000,
    });

    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log("MongoDB connection failure:", error);
  } finally {
    console.log("Exiting connection attempt");
  }
};
