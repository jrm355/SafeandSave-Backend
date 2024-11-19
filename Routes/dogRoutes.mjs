import express from 'express';
import Dog from '../Models/dogSchema.mjs';  // Import the Dog model

const router = express.Router();

// CREATE - Add a new dog food item
router.post('/', async (req, res) => {
    try {
        const { name, SafetyRating } = req.body;
        // Validate input
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

// READ - Get all dog food items
router.get('/', async (req, res) => {
    try {
        const dogFoods = await Dog.find({});
        res.json(dogFoods);  // This will include safetyDescription automatically due to the virtual field
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// READ - Get a specific dog food by ID
router.get('/:id', async (req, res) => {
    try {
        const dogFood = await Dog.findById(req.params.id);
        if (!dogFood) {
            return res.status(404).json({ msg: 'Dog food not found' });
        }
        res.json(dogFood);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
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
