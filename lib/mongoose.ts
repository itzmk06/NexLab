import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("Missing mongodb url");
  }
  if (isConnected) {
    return console.log("Mongodb is already connected!");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, { dbName: "NexLab" });
    isConnected = true;
    console.log("MONGODB is connected!");
  } catch (error) {
    console.log("MONGODB connection failure!", error);
  }
  console.log("come outside");
};
