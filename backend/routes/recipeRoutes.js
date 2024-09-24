const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/', protect, upload.single('image'), createRecipe);
router.get('/', getRecipes);
router.get('/:id', getRecipeById);
router.put('/:id', protect,  upload.single('image'),updateRecipe);
router.delete('/:id', protect, deleteRecipe);

module.exports = router;
