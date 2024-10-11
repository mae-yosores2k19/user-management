import mongoose from "mongoose";

const DB = process.env.MONGODB_URI as string;

const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectMongoDB;
