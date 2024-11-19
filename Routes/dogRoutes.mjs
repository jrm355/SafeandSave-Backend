import express from 'express';
import Dog from '../models/dogSchema.mjs';  // Import Dog model
const router = express.Router();

// READ - Get all Dog food info
router.get('/', async (req, res) => {
    try {
        const dogFoods = await Dog.find({});
        res.json(dogFoods);  // This will automatically include safetyDescription
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// UPDATE - Edit a Dog food by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedDog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// DELETE - Remove a Dog food by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedDog = await Dog.findByIdAndDelete(req.params.id);
        res.json(deletedDog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;
