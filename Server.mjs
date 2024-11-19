// imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';  // Assuming it's correct
import DogRoutes from './Routes/dogRoutes.mjs';  // Correct import path for the routes



//setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

//db connection
connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes
app.use('/Dog', DogRoutes);


//listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
