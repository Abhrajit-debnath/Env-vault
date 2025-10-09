
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_URl as string;

if (!MONGODB_URI) {
  throw new Error("no connection string");
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected via Mongoose");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export { connectDB };
