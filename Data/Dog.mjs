import mongoose from 'mongoose';
import dotenv from 'dotenv';  // Import dotenv to load .env variables
import Dog from './models/Dog';  // Assuming the Dog schema is saved in ./models/Dog.js

dotenv.config();  // Load environment variables from .env file

const foods = [
  { name: 'Carrot', SafetyRating: 1 },  // Safe to eat
  { name: 'Apple', SafetyRating: 1 },  // Safe to eat
  { name: 'Blueberries', SafetyRating: 1 },  // Safe to eat
  { name: 'Banana', SafetyRating: 1 },  // Safe to eat
  { name: 'Rice', SafetyRating: 1 },  // Safe to eat
  { name: 'Chicken (cooked)', SafetyRating: 1 },  // Safe to eat
  { name: 'Sweet Potato', SafetyRating: 1 },  // Safe to eat
  { name: 'Pumpkin', SafetyRating: 1 },  // Safe to eat
  { name: 'Salmon (cooked)', SafetyRating: 1 },  // Safe to eat
  { name: 'Peanut Butter (unsweetened)', SafetyRating: 1 },  // Safe to eat
  { name: 'Oatmeal', SafetyRating: 1 },  // Safe to eat
  
  { name: 'Cheese', SafetyRating: 2 },  // Safe in moderation
  { name: 'Yogurt', SafetyRating: 2 },  // Safe in moderation
  { name: 'Cucumber', SafetyRating: 2 },  // Safe in moderation
  { name: 'Potato (cooked)', SafetyRating: 2 },  // Safe in moderation
  
  { name: 'Onion', SafetyRating: 4 },  // Potentially dangerous
  { name: 'Grapes', SafetyRating: 5 },  // Harmful, potentially poisonous
  { name: 'Chocolate', SafetyRating: 5 },  // Harmful, potentially poisonous
  { name: 'Raisins', SafetyRating: 5 },  // Harmful, potentially poisonous
  { name: 'Macadamia Nuts', SafetyRating: 5 },  // Harmful, potentially poisonous
  { name: 'Avocado', SafetyRating: 5 },  // Harmful, potentially poisonous
  { name: 'Xylitol (sugar substitute)', SafetyRating: 5 },  // Harmful, potentially poisonous
  { name: 'Alcohol', SafetyRating: 5 },  // Harmful, potentially poisonous
];

async function addFoods() {
  try {
    // Clear existing foods to avoid duplicates (optional)
    await Dog.deleteMany();

    // Insert all food entries into the database
    await Dog.insertMany(foods);
    console.log('Foods added successfully!');
  } catch (error) {
    console.error('Error adding foods:', error);
  }
}

// Get the MongoDB URI from the .env file
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dogfoods';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    addFoods();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
