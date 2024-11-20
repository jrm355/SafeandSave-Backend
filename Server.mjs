// imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors middleware
import connectDB from './db/conn.mjs';
import DogRoutes from './Routes/dogRoutes.mjs';
import PantryRoutes from './Routes/pantryRoutes.mjs'; // Import pantry routes

// Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Database connection
connectDB();

// Middleware
app.use(cors({
    origin: '*',  // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/dogFoods', DogRoutes);
app.use('/api/pantry', PantryRoutes); // Use pantry routes

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});