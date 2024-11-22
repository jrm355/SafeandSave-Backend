// import express from 'express';
// import axios from 'axios';
// import Safety from '../Models/safetySchema.mjs';

// const router = express.Router();

// router.post('/fetch', async (req, res) => {
//   const { query } = req.body;
//   const API_KEY = process.env.RAPIDAPI_KEY;
  
//   try {
//     const response = await axios.post(
//       {},
//       {
//         headers: {
//           'x-rapidapi-key': 
//           'x-rapidapi-host': 
//         },
//       }
//     );

//     const data = response.data;

//     // mock structure for nutrients and allergens
//     const foodInfo = {
//       query,
//       allergens: data.allergens || 'Not specified',
//       calories: data.calories || 'N/A',
//       sugar: data.sugar || 'N/A',
//       protein: data.protein || 'N/A',
//       fat: data.fat || 'N/A',
//     };

//     // Save to database
//     const savedEntry = await Safety.create(foodInfo);
//     res.status(201).json(savedEntry);

//   } catch (error) {
//     console.error('Error fetching food data:', error.message);
//     res.status(500).json({ error: 'Unable to fetch food data' });
//   }
// });

// export default router;