import mongoose from 'mongoose';
import dotenv from 'dotenv';  // Import dotenv to load .env variables
import Dog from './models/Dog';  // Assuming the Dog schema is saved in ./models/Dog.js

dotenv.config();  // Load environment variables from .env file

const foods = [
  { "name": "Carrots", "SafetyRating": 1 },
  { "name": "Peanut Butter", "SafetyRating": 1 },
  { "name": "Chicken (plain, cooked)", "SafetyRating": 1 },
  { "name": "Sweet Potatoes", "SafetyRating": 1 },
  { "name": "Pumpkin", "SafetyRating": 1 },
  { "name": "Apples (without seeds)", "SafetyRating": 1 },
  { "name": "Green Beans", "SafetyRating": 1 },
  { "name": "Bananas", "SafetyRating": 1 },
  { "name": "Rice (plain)", "SafetyRating": 1 },
  { "name": "Blueberries", "SafetyRating": 1 },
  { "name": "Salmon (cooked)", "SafetyRating": 1 },
  { "name": "Pineapple", "SafetyRating": 1 },
  { "name": "Watermelon (without seeds)", "SafetyRating": 1 },
  { "name": "Cucumbers", "SafetyRating": 1 },
  { "name": "Oats", "SafetyRating": 1 },
  
  { "name": "Cheese", "SafetyRating": 2 },
  { "name": "Yogurt (plain)", "SafetyRating": 2 },
  { "name": "Turkey (plain, cooked)", "SafetyRating": 2 },
  { "name": "Strawberries", "SafetyRating": 2 },
  { "name": "Mango", "SafetyRating": 2 },
  { "name": "Eggs (cooked)", "SafetyRating": 2 },
  { "name": "Cantaloupe", "SafetyRating": 2 },
  { "name": "Potatoes (cooked)", "SafetyRating": 2 },
  { "name": "Watermelon", "SafetyRating": 2 },
  { "name": "Cherries (without pits)", "SafetyRating": 2 },
  { "name": "Zucchini", "SafetyRating": 2 },
  { "name": "Carob", "SafetyRating": 2 },
  { "name": "Coconut", "SafetyRating": 2 },
  { "name": "Spinach", "SafetyRating": 2 },
  { "name": "Kiwi", "SafetyRating": 2 },
  
  { "name": "Chocolate", "SafetyRating": 5 },
  { "name": "Grapes", "SafetyRating": 5 },
  { "name": "Raisins", "SafetyRating": 5 },
  { "name": "Onions", "SafetyRating": 5 },
  { "name": "Garlic", "SafetyRating": 5 },
  { "name": "Avocados", "SafetyRating": 5 },
  { "name": "Macadamia Nuts", "SafetyRating": 5 },
  { "name": "Xylitol (sweetener)", "SafetyRating": 5 },
  { "name": "Alcohol", "SafetyRating": 5 },
  { "name": "Caffeine", "SafetyRating": 5 },
  
  { "name": "Chocolates (dark)", "SafetyRating": 5 },
  { "name": "Raw Dough (yeast)", "SafetyRating": 5 },
  { "name": "Cooked Bones", "SafetyRating": 5 },
  { "name": "Mushrooms (wild)", "SafetyRating": 5 },
  { "name": "Nutmeg", "SafetyRating": 5 },
  
  { "name": "Liver (too much)", "SafetyRating": 4 },
  { "name": "Tomatoes (unripe)", "SafetyRating": 4 },
  { "name": "Salty Foods", "SafetyRating": 4 },
  { "name": "Mustard", "SafetyRating": 4 },
  { "name": "Chili", "SafetyRating": 4 },
  { "name": "Peaches (pits)", "SafetyRating": 4 },
  { "name": "Plums (pits)", "SafetyRating": 4 },
  { "name": "Pine Nuts", "SafetyRating": 4 },
  { "name": "Citrus Fruits (lemons, limes)", "SafetyRating": 4 },
  { "name": "Persimmons", "SafetyRating": 4 },
  
  { "name": "Honey", "SafetyRating": 3 },
  { "name": "Ice Cream (contains sugar, lactose)", "SafetyRating": 3 },
  { "name": "Popcorn (plain, no butter or salt)", "SafetyRating": 3 },
  { "name": "Celery", "SafetyRating": 3 },
  { "name": "Celery Sticks", "SafetyRating": 3 },
  { "name": "Corn", "SafetyRating": 3 },
  { "name": "Chili Peppers", "SafetyRating": 3 },
  { "name": "Mango Pits", "SafetyRating": 3 },
  { "name": "Cinnamon", "SafetyRating": 3 }
]

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
