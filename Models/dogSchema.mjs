import mongoose from 'mongoose';

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    SafetyRating: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Dog', DogSchema);
