// import React, { useState } from 'react';
// import { WithContext as ReactTags } from 'react-tag-input';
// import axios from 'axios';

// const AddRecipe = () => {
//     const [title, setTitle] = useState('');
//     const [cuisineType, setCuisineType] = useState('');
//     const [cookingTime, setCookingTime] = useState('');
//     const [instructions, setInstructions] = useState('');
//     const [tags, setTags] = useState([]); // Tags will hold the ingredients
//     const [message, setMessage] = useState('');

//     const KeyCodes = {
//         comma: 188,
//         enter: 13,
//     };

//     const delimiters = [KeyCodes.comma, KeyCodes.enter];

//     const handleDelete = (i) => {
//         setTags(tags.filter((tag, index) => index !== i));
//     };

//     const handleAddition = (tag) => {
//         setTags([...tags, tag]);
//     };

//     const handleDrag = (tag, currPos, newPos) => {
//         const newTags = [...tags];
//         newTags.splice(currPos, 1);
//         newTags.splice(newPos, 0, tag);
//         setTags(newTags);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
      
//         const ingredients = tags.map(tag => tag.text);
//         const newRecipe = { title, cuisineType, cookingTime, instructions, ingredients };
      
//         // Get the token from localStorage
//         const token = localStorage.getItem('token');
      
//         try {
//           const response = await axios.post('http://localhost:5000/api/recipes', newRecipe, {
//             headers: {
//               Authorization: `Bearer ${token}`,  // Add the token to the Authorization header
//             },
//           });
//           setMessage('Recipe added successfully!');
//           console.log(response.data);
//         } catch (error) {
//           setMessage('Failed to add recipe.');
//           console.error(error.response ? error.response.data : error.message);
//         }
//       };
      

//     return (
//         <section className="content-inner-1">
//             <div className="container">
//                 <div className="section-head text-center">
//                     <h2 className="title">Add Recipe</h2>
//                 </div>
//                 {message && <p className="text-center">{message}</p>}
//                 <form className="dzForm dezPlaceAni" onSubmit={handleSubmit}>
//                     <div className="row">
//                         <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
//                             <label className="form-label text-primary">Recipe Title*</label>
//                             <div className="input-group input-line input-black">
//                                 <input
//                                     name="title"
//                                     required
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Mexican Pizza"
//                                     value={title}
//                                     onChange={(e) => setTitle(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
//                             <label className="form-label text-primary">Recipe Ingredients*</label>
//                             <div className="input-group input-line input-black">
//                                 <ReactTags
//                                     tags={tags}
//                                     delimiters={delimiters}
//                                     handleDelete={handleDelete}
//                                     handleAddition={handleAddition}
//                                     handleDrag={handleDrag}
//                                     inputFieldPosition="bottom"
//                                     placeholder="Add Ingredients tags"
//                                     autofocus={false}
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
//                             <label className="form-label text-primary">Cuisine Type*</label>
//                             <div className="input-group input-line input-black">
//                                 <input
//                                     name="cuisineType"
//                                     required
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Indian, Chinese"
//                                     value={cuisineType}
//                                     onChange={(e) => setCuisineType(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-lg-6 col-md-6 m-b30 m-sm-b50">
//                             <label className="form-label text-primary">Cooking Time (minutes)*</label>
//                             <div className="input-group input-line input-black">
//                                 <input
//                                     name="cookingTime"
//                                     required
//                                     type="number"
//                                     className="form-control text-gray"
//                                     placeholder="45 Minutes"
//                                     value={cookingTime}
//                                     onChange={(e) => setCookingTime(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-lg-12 col-md-6 m-b30 m-sm-b50">
//                             <label className="form-label text-primary">Recipe Instructions*</label>
//                             <div className="input-group input-line input-black">
//                                 <input
//                                     name="instructions"
//                                     required
//                                     type='text'
//                                     className="form-control "
//                                     placeholder="Marinate chicken in yogurt and spices for 2 hours."
//                                     value={instructions} // Ensure value is linked to state
//                                     onChange={(e) => setInstructions(e.target.value)} // Correct onChange handler
//                                 />
//                             </div>
//                         </div>

//                         <div className="col-12 text-center">
//                             <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-1">
//                                 <span>Add Recipe</span>
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </section>

//     )
// }

// export default AddRecipe


import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [instructions, setInstructions] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null); // New state for image file
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const ingredients = tags.map(tag => tag.text);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('cuisineType', cuisineType);
    formData.append('cookingTime', cookingTime);
    formData.append('instructions', instructions);
    formData.append('ingredients', JSON.stringify(ingredients));
    if (image) formData.append('image', image);  // Append the image file
  
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.post('http://localhost:5000/api/recipes', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',  // Ensure correct content type
        },
      });
      setMessage('Recipe added successfully!');
      navigate("/")
      console.log('Recipe created:', response.data);

    } catch (error) {
      console.error('Error creating recipe:', error.response.data);
    }
  };
  

  return (
    <section className="content-inner-1">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Add Recipe</h2>
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
                  placeholder="Mexican Pizza"
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
                  delimiters={delimiters}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
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
                  placeholder="Indian, Chinese"
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
                  placeholder="45 Minutes"
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
                  className="form-control"
                  placeholder="Marinate chicken in yogurt and spices for 2 hours."
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
                  onChange={handleImageChange} // Capture file input
                />
              </div>
            </div>

            <div className="col-12 text-center">
              <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-1">
                <span>Add Recipe</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddRecipe;
