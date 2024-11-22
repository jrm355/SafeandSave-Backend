import express from "express";
import PantryItem from "../Models/PantrySchema.mjs"; // Ensure this is the correct model

const router = express.Router();

// Create, POST create a new pantry item
router.post("/", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { foodItem, location, foodType, sellBy, expiration, tossBy } = req.body;

    if (!foodItem || !location || !foodType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newPantryItem = new PantryItem({  
      foodItem,
      location,
      foodType,
      sellBy,
      expiration,
      tossBy,
    });

    const savedItem = await newPantryItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error in POST /api/pantry:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Read, GET all pantry items
router.get("/", async (req, res) => {
  try {
    const items = await PantryItem.find(); 
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pantry items", error });
  }
});



// Update, PUT update a pantry item by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, location, type, sellBy, expiration, tossBy } = req.body;

  try {
    const updatedItem = await PantryItem.findByIdAndUpdate(
      id,
      { name, location, type, sellBy, expiration, tossBy },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Pantry item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to update pantry item", error });
  }
});

// DELETE a pantry item by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await PantryItem.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Pantry item not found" });
    }

    res.status(200).json({ message: "Pantry item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete pantry item", error });
  }
});

export default router;
