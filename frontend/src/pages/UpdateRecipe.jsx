import React, { useState, useEffect } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import '';
import { useParams } from 'react-router-dom'; // For extracting recipe ID from the URL

const UpdateRecipe = () => {
  const [title, setTitle] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [instructions, setInstructions] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  const { id } = useParams(); // Extract recipe ID from the URL

  // Fetch the recipe data to pre-fill the form
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
        const recipe = response.data;

        setTitle(recipe.title);
        setCuisineType(recipe.cuisineType);
        setCookingTime(recipe.cookingTime);
        setInstructions(recipe.instructions);
        setTags(recipe.ingredients.map((ingredient) => ({ id: ingredient, text: ingredient })));
        setImage(recipe.image); // Handle if needed for image preview
      } catch (error) {
        setMessage('Failed to load the recipe for editing.');
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ingredients = tags.map(tag => tag.text);

    // Create FormData for the file upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('cuisineType', cuisineType);
    formData.append('cookingTime', cookingTime);
    formData.append('instructions', instructions);
    formData.append('ingredients', JSON.stringify(ingredients));  // Ensure ingredients are sent as JSON
    if (image) formData.append('image', image);

    const token = localStorage.getItem('token');

    try {
      // Make sure this PUT request is sent to the backend, not the frontend
      const response = await axios.put(`http://localhost:5000/api/recipes/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Recipe updated successfully!');
      console.log(response.data); // Check the response from backend
      navigate("/");  // Redirect after successful update
    } catch (error) {
      setMessage('Failed to update the recipe.');
      console.error(error.response ? error.response.data : error.message);
    }
};


  return (
    <section className="content-inner-1">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Update Recipe</h2>
        </div>
        {message && <p className="text-center">{message}</p>}
        <form className="dzForm dezPlaceAni" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
              <label className="form-label text-primary">Recipe Title*</label>
              <div className="input-group input-line input-black">
                <input
                  name="title"
                  required
                  type="text"
                  className="form-control"
                  placeholder="Recipe Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
              <label className="form-label text-primary">Recipe Ingredients*</label>
              <div className="input-group input-line input-black">
                <ReactTags
                  tags={tags}
                  delimiters={[188, 13]} // Enter or Comma key
                  handleDelete={(i) => setTags(tags.filter((tag, index) => index !== i))}
                  handleAddition={(tag) => setTags([...tags, tag])}
                  inputFieldPosition="bottom"
                  placeholder="Add ingredients and press Enter"
                  autofocus={false}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
              <label className="form-label text-primary">Cuisine Type*</label>
              <div className="input-group input-line input-black">
                <input
                  name="cuisineType"
                  required
                  type="text"
                  className="form-control"
                  placeholder="Cuisine Type"
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
              <label className="form-label text-primary">Cooking Time (minutes)*</label>
              <div className="input-group input-line input-black">
                <input
                  name="cookingTime"
                  required
                  type="number"
                  className="form-control text-gray"
                  placeholder="Cooking Time"
                  value={cookingTime}
                  onChange={(e) => setCookingTime(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-6 m-b30 m-sm-b50">
              <label className="form-label text-primary">Recipe Instructions*</label>
              <div className="input-group input-line input-black">
                <textarea
                  name="instructions"
                  required
                  className="form-control dz-number"
                  placeholder="Instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-6 m-b30 m-sm-b50">
              <label className="form-label text-primary">Recipe Image</label>
              <div className="input-group input-line input-black">
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="col-12 text-center">
              <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-1">
                <span>Update Recipe</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateRecipe;
