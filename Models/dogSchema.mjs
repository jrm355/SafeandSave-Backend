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

// virtual field that will return the description based on SafetyRating
DogSchema.virtual('safetyDescription').get(function() {
    switch (this.SafetyRating) {
        case 1:
            return 'Safe to eat, as long as it is properly prepared. Any additional ingredients should be individually looked up';
        case 2:
            return 'Safe in moderation, as long as it is properly prepared. Any additional ingredients should be individually looked up';
        case 3:
            return 'Not recommended, not good for your dog but probably will not hurt them in moderation';
        case 4:
            return 'Potentially dangerous, avoid feed this to your dog, monitor your dog after consumption, and consider contacting a vet if there is a change in behavior';
        case 5:
            return 'Harmful, potentially poisonous, monitor your animal and contact a vet immediately if they consume this food';
        default:
            return 'Unknown rating';
    }
});

// Ensure virtuals are included when converting documents to JSON
DogSchema.set('toJSON', {
    virtuals: true
});

export default mongoose.model('Dog', DogSchema);
