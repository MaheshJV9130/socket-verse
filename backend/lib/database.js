import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log('Failed to connect with db ',error)
  }
};

export default connectDatabase