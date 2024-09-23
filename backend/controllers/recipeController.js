const Recipe = require('../models/Recipe');

// @desc Create a new recipe
const createRecipe = async (req, res) => {
  try {
    console.log(req.file); // Add this line to verify if the image is being uploaded

    // Other recipe data (title, ingredients, etc.)
    const { title, cuisineType, cookingTime, instructions, ingredients } = req.body;

    // Image path
    const imagePath = req.file ? req.file.path : null;  // Save the image path or null if no file

    const newRecipe = new Recipe({
      title,
      cuisineType,
      cookingTime,
      instructions,
      ingredients: JSON.parse(ingredients),  // Ensure ingredients are parsed correctly
      image: imagePath,
      author: req.user._id,  // Save image path
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create recipe', error });
  }
};


// @desc Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('author', 'username email'); // Populate the author details
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve recipes', error });
  }
};

// @desc Get a recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('author', 'username email');
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve recipe', error });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Update the recipe fields
    recipe.title = req.body.title || recipe.title;
    recipe.cuisineType = req.body.cuisineType || recipe.cuisineType;
    recipe.cookingTime = req.body.cookingTime || recipe.cookingTime;
    recipe.instructions = req.body.instructions || recipe.instructions;

    // Ingredients should be an array, parsed from JSON
    if (req.body.ingredients) {
      recipe.ingredients = JSON.parse(req.body.ingredients);
    }

    // Update the image if provided
    if (req.file) {
      recipe.image = req.file.path;
    }

    // Save the updated recipe
    const updatedRecipe = await recipe.save();
    res.json({ message: 'Recipe updated successfully', updatedRecipe });
  } catch (error) {
    console.error(error);  // Log the actual error to see what's going wrong
    res.status(500).json({ message: 'Failed to update recipe', error });
  }
};

const deleteRecipe = async (req, res) => {
  try {
      console.log('Attempting to delete recipe with ID:', req.params.id);

      // Fetch the recipe
      const recipe = await Recipe.findById(req.params.id);

      if (!recipe) {
          return res.status(404).json({ message: 'Recipe not found' });
      }

      // Check if the author field exists
      if (!recipe.author) {
          return res.status(500).json({ message: 'Recipe does not have an author' });
      }

      // Ensure the logged-in user is the author of the recipe
      if (recipe.author.toString() !== req.user._id.toString()) {
          return res.status(401).json({ message: 'Not authorized to delete this recipe' });
      }

      // Use findByIdAndDelete for deletion
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

      if (!deletedRecipe) {
          return res.status(500).json({ message: 'Failed to delete recipe' });
      }

      res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
      console.error('Error deleting recipe:', error);
      res.status(500).json({ message: 'Failed to delete recipe', error: error.message });
  }
};



  

module.exports = { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe };
