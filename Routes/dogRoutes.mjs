import express from 'express';
import Dog from '../Models/dogSchema.mjs';  // Import the Dog model

const router = express.Router();

// CREATE - Add a new dog food item
router.post('/', async (req, res) => {
    try {
        const { name, SafetyRating } = req.body;
        if (!name || SafetyRating === undefined) {
            return res.status(400).json({ msg: 'Please provide both name and safety rating.' });
        }
        const newDog = new Dog({ name, SafetyRating });
        const savedDog = await newDog.save();
        res.status(201).json(savedDog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// READ - Get a dog food by name (case-insensitive, partial match allowed)
router.get('/search', async (req, res) => {
    try {
        const { food } = req.query;

        if (!food) {
            return res.status(400).json({ msg: 'Please provide a food name to search for.' });
        }

        console.log(`Searching for food: ${food}`);
        
        // Perform case-insensitive partial matching
        const dogFood = await Dog.find({ name: { $regex: food, $options: 'i' } });

        if (!dogFood || dogFood.length === 0) {
            return res.status(404).json({ msg: 'Food not found' });
        }

        res.json(dogFood);
    } catch (err) {
        console.error('Error in search route:', err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});
//Get all dog foods, needed for autofill
router.get('/', async (req, res) => {
    try {
        const dogFoods = await Dog.find({}, 'name'); // Fetch only the `name` field
        if (dogFoods.length === 0) {
            return res.status(404).json({ msg: 'No dog foods found.' });
        }
        res.json(dogFoods);
    } catch (err) {
        console.error('Error fetching dog foods:', err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// UPDATE - Edit a dog food by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDog) {
            return res.status(404).json({ msg: 'Dog food not found' });
        }
        res.json(updatedDog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// DELETE - Remove a dog food by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedDog = await Dog.findByIdAndDelete(req.params.id);
        if (!deletedDog) {
            return res.status(404).json({ msg: 'Dog food not found' });
        }
        res.json({ msg: 'Dog food deleted successfully', deletedDog });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;