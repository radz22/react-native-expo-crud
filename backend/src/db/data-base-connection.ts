import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Connected to database");
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
};

export default ConnectDb;
