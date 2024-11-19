import mongoose from 'mongoose';

const PantryItemSchema = new mongoose.Schema({
  foodItem: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  sellBy: {
    type: Date,
  },
  expiration: {
    type: Date,
  },
  tossBy: {
    type: Date,
  },
}, { timestamps: true });  // Adds createdAt and updatedAt fields automatically

const PantryItem = mongoose.model('PantryItem', PantryItemSchema);

export default PantryItem;
