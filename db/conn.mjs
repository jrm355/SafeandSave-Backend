import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

// Check if the value is undefined

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
