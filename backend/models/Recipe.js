const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // Array of strings for ingredients
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  cuisineType: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number, // Cooking time in minutes
    required: true,
  },
  image: { type: String },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', required: true  // Reference to the User who created the recipe
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
