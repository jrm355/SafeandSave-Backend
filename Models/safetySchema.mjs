import mongoose from 'mongoose';

const safetySchema = new mongoose.Schema({
  query: { type: String, required: true },
  allergens: { type: String },
  calories: { type: String },
  sugar: { type: String },
  protein: { type: String },
  fat: { type: String },
}, { timestamps: true });

const Safety = mongoose.model('Safety', safetySchema);

export default Safety;