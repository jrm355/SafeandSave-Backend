import mongoose from 'mongoose';

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    SafetyRating: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5],  // Ensure only valid ratings are allowed
        message: 'Invalid safety rating. Must be between 1 and 5.'
    }
});

// Add a virtual field that will return the description based on SafetyRating
DogSchema.virtual('safetyDescription').get(function() {
    switch (this.SafetyRating) {
        case 1:
            return 'Safe to eat';
        case 2:
            return 'Safe in moderation';
        case 3:
            return 'Not recommended';
        case 4:
            return 'Potentially dangerous';
        case 5:
            return 'Harmful, potentially poisonous';
        default:
            return 'Unknown rating';
    }
});

// Ensure virtuals are included when converting documents to JSON
DogSchema.set('toJSON', {
    virtuals: true
});

export default mongoose.model('Dog', DogSchema);
