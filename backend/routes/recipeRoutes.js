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


// Backend API to search and paginate recipes
router.get('/recipes', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const searchTerm = req.query.searchTerm || '';
  const pageSize = 6;

  const query = searchTerm
      ? { title: new RegExp(searchTerm, 'i') } // Case-insensitive search by title
      : {};

  const recipes = await Recipe.find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

  const totalRecipes = await Recipe.countDocuments(query);
  const totalPages = Math.ceil(totalRecipes / pageSize);

  res.json({ recipes, totalPages });
});




module.exports = router;
