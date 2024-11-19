import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Make sure this is at the top of your file

// console.log('MongoDB URI:', process.env.mongoURI); // Check if the value is undefined

const connectionString = process.env.mongoURI;
console.log(process.env)

export default async function connectDB() {
  try {
    await mongoose.connect(connectionString);
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
