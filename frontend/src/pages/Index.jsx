// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Index = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [error, setError] = useState(null);
//     const [message, setMessage] = useState('');

//     // Fetch all recipes when component mounts
//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/recipes');
//                 setRecipes(response.data); // Save recipes in state
//             } catch (err) {
//                 setError('Failed to load recipes.');
//                 console.error(err);
//             }
//         };

//         fetchRecipes();
//     }, []);

//     const handleDelete = async (recipeId) => {
//         const token = localStorage.getItem('token');  // Ensure the token is valid
//         if (!token) {
//             console.error('No token found. User may not be authenticated.');
//             return;
//         }

//         try {
//             const response = await axios.delete(`http://localhost:5000/api/recipes/${recipeId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,  // Authorization header for protected routes
//                 },
//             });
//             setMessage('Recipe deleted successfully!');
//             setRecipes(recipes.filter(recipe => recipe._id !== recipeId));  // Remove the deleted recipe from the state
//         } catch (error) {
//             setMessage('Failed to delete recipe.');
//             console.error('Error deleting recipe:', error.response ? error.response.data : error.message);  // Log the exact error
//         }
//     };




//   // State for filters
//   const [filters, setFilters] = useState({
//     title: '',

// });

//  // Apply filtering before pagination
// const filteredData = data.filter(item => {
//     return (
//         (!filters.title || item.title.toLowerCase().includes(filters.action.toLowerCase()))
//     );
// });

// const currentData = filteredData.slice(startIndex, endIndex)

// const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//         ...filters,
//         [name]: value
//     });
// };

//     return (
//         <section className="content-inner">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-xl-9 col-lg-8 m-b30">
//                         {error && <p className="text-center text-danger">{error}</p>}
//                         {message && <p className="text-center text-success">{message}</p>}
//                         <div className="row loadmore-content">
//                                 {recipes.length > 0 ? (
//                                     recipes.map((recipe) => (
//                                         <div key={recipe._id} className="col-xl-6 col-lg-12">
//                                             <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom m-b30">
//                                                 <div className="dz-media">
//                                                     <a href={`/recipe/${recipe._id}`}>
//                                                         {recipe.image ? (
//                                                             <img src={`http://localhost:5000/${recipe.image}`} />
//                                                         ) : (
//                                                             <p>No image available</p>
//                                                         )}
//                                                     </a>
//                                                 </div>
//                                                 <div className="dz-info">
//                                                     <div className="dz-meta">
//                                                         <ul>
//                                                             <li>
//                                                                 <a href="javascript:void(0);">
//                                                                     <i className="flaticon-calendar-date" /> {new Date(recipe.createdAt).toLocaleDateString()}
//                                                                 </a>
//                                                             </li>
//                                                         </ul>
//                                                     </div>
//                                                     <h5 className="dz-title">
//                                                         <a href={`/recipe/${recipe._id}`}>{recipe.title}</a>
//                                                     </h5>
//                                                     <p>{recipe.instructions.substring(0, 100)}...</p>
//                                                     <div className="read-btn d-flex justify-content-between">
//                                                         <a href={`/recipe/${recipe._id}`} className="btn btn-primary btn-hover-2">
//                                                             Read More
//                                                         </a>
//                                                         <div className="icons">
//                                                             <a href={`/update-recipe/${recipe._id}`} className='me-3 text-success'><i className="fa-solid fa-pencil"></i></a>
//                                                             <a href="javascript:void(0);" className="text-danger" onClick={() => handleDelete(recipe._id)} > 
//                                                                 <i className="fa-regular fa-trash-can"></i>
//                                                             </a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <p className="text-center">No recipes found.</p>
//                                 )}
//                         </div>
//                         <div className="text-center m-t10">
//                             <ul className="pagination m-b15">
//                                 <li className="page-item"><a className="page-link prev" href="javascript:void(0);"><i className="fas fa-chevron-left" /></a></li>
//                                 <li className="page-item"><a className="page-link active" href="javascript:void(0);"><span>1</span></a></li>
//                                 <li className="page-item"><a className="page-link" href="javascript:void(0);"><span>2</span></a></li>
//                                 <li className="page-item"><a className="page-link" href="javascript:void(0);"><span>3</span></a></li>
//                                 <li className="page-item"><a className="page-link next" href="javascript:void(0);"><i className="fas fa-chevron-right" /></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-xl-3 col-lg-4">
//                         <aside className="side-bar sticky-top">
//                             <div className="widget">
//                                 <div className="widget-title">
//                                     <h4 className="title">Search</h4>
//                                 </div>
//                                 <div className="search-bx">
//                                     <form role="search" method="post">
//                                         <div className="input-group">
//                                             <div className="input-side">
//                                                 <input name="text" className="form-control" onChange={handleFilterChange} placeholder="Search" type="text" />
//                                                 <div className="input-group-btn">
//                                                     <button type="submit" className="btn btn-primary">
//                                                         <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                             <path d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                                             <path d="M18.3337 18.3334L16.667 16.6667" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                                         </svg>
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             <div className="widget widget_categories">
//                                 <div className="widget-title">
//                                     <h4 className="title">Categories</h4>
//                                 </div>
//                                 <ul>
//                                     <li className="cat-item"><a href="/">Pepperoni Pizza</a></li>
//                                     <li className="cat-item"><a href="/">Apricot Chicken</a></li>
//                                     <li className="cat-item"><a href="/">Pizza Veronese</a></li>
//                                     <li className="cat-item"><a href="/">Summer Pizza</a></li>
//                                     <li className="cat-item"><a href="/">Italian Tuna</a></li>
//                                 </ul>
//                             </div>
//                             <div className="widget recent-posts-entry">
//                                 <div className="widget-title">
//                                     <h4 className="title">Latest Post</h4>
//                                 </div>
//                                 <div className="widget-post-bx">
//                                     <div className="widget-post clearfix">
//                                         <div className="dz-media">
//                                             <img src="assets/images/blog/recent-blog/pic1.jpg" alt="/" />
//                                         </div>
//                                         <div className="dz-info">
//                                             <h6 className="title"><a href="/">Explore the Food Taste</a></h6>
//                                             <div className="dz-meta">
//                                                 <ul>
//                                                     <li><a href="javascript:void(0);">
//                                                         <i className="flaticon-calendar-date" />
//                                                         16 May, 2023</a>
//                                                     </li>
//                                                     <li><a href="javascript:void(0);">
//                                                         <i className="flaticon-chat-bubble" />
//                                                         2.5K</a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="widget-post clearfix">
//                                         <div className="dz-media">
//                                             <img src="assets/images/blog/recent-blog/pic2.jpg" alt="/" />
//                                         </div>
//                                         <div className="dz-info">
//                                             <h6 className="title"><a href="/">Secrets of Delicious Food</a></h6>
//                                             <div className="dz-meta">
//                                                 <ul>
//                                                     <li><a href="javascript:void(0);">
//                                                         <i className="flaticon-calendar-date" />
//                                                         10 Dec, 2023</a>
//                                                     </li>
//                                                     <li><a href="javascript:void(0);">
//                                                         <i className="flaticon-chat-bubble" />
//                                                         1.5K</a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="widget-post clearfix">
//                                         <div className="dz-media">
//                                             <img src="assets/images/blog/recent-blog/pic3.jpg" alt="/" />
//                                         </div>
//                                         <div className="dz-info">
//                                             <h6 className="title"><a href="/"> Inspiration for Food</a></h6>
//                                             <div className="dz-meta">
//                                                 <ul>
//                                                     <li><a href="javascript:void(0);">
//                                                         <i className="flaticon-calendar-date" />
//                                                         26 May, 2023</a>
//                                                     </li>
//                                                     <li><a href="javascript:void(0);">
//                                                         <i className="flaticon-chat-bubble" />
//                                                         3.5K</a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="widget widget_tag_cloud mb-3">
//                                 <div className="widget-title">
//                                     <h4 className="title">Popular Tags</h4>
//                                 </div>
//                                 <div className="tagcloud">
//                                     <a href="/">Pizza</a>
//                                     <a href="/">Chicken</a>
//                                     <a href="/">Pizza Veronese</a>
//                                     <a href="/">Burger</a>
//                                     <a href="/">Sandwich</a>
//                                 </div>
//                             </div>
//                         </aside>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Index


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const [filters, setFilters] = useState({
        title: '',
        cuisineType: '',
    });

    // Fetch all recipes when component mounts
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/recipes');
                setRecipes(response.data); // Save recipes in state
            } catch (err) {
                setError('Failed to load recipes.');
                console.error(err);
            }
        };

        fetchRecipes();
    }, []);

    // Handle delete recipe
    const handleDelete = async (recipeId) => {
        const token = localStorage.getItem('token');  // Ensure the token is valid
        if (!token) {
            console.error('No token found. User may not be authenticated.');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/recipes/${recipeId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,  // Authorization header for protected routes
                },
            });
            setMessage('Recipe deleted successfully!');
            setRecipes(recipes.filter(recipe => recipe._id !== recipeId));  // Remove the deleted recipe from the state
        } catch (error) {
            setMessage('Failed to delete recipe.');
            console.error('Error deleting recipe:', error.response ? error.response.data : error.message);  // Log the exact error
        }
    };

    // Handle search filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleCuisineClick = (cuisine) => {
        setFilters({
            ...filters,
            cuisineType: cuisine
        });
    };

    // Filter recipes by title and cuisine type
    const filteredRecipes = recipes.filter(recipe => {
        return (
            recipe.title.toLowerCase().includes(filters.title.toLowerCase()) &&
            (filters.cuisineType === '' || recipe.cuisineType === filters.cuisineType)
        );
    });
    // Extract unique cuisine types from recipes
    const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisineType))];


    return (
        <section className="content-inner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 m-b30">
                        {error && <p className="text-center text-danger">{error}</p>}
                        {message && <p className="text-center text-success">{message}</p>}
                        <div className="row loadmore-content">
                            {filteredRecipes.length > 0 ? (
                                filteredRecipes.map((recipe) => (
                                    <div key={recipe._id} className="col-xl-6 col-lg-12">
                                        <div className="dz-card style-1 blog-half overlay-shine dz-img-effect zoom m-b30">
                                            <div className="dz-media">
                                                <a href={`/recipe/${recipe._id}`}>
                                                    {recipe.image ? (
                                                        <img src={`http://localhost:5000/${recipe.image}`} alt={recipe.title} />
                                                    ) : (
                                                        <p>No image available</p>
                                                    )}
                                                </a>
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <i className="flaticon-calendar-date" /> {new Date(recipe.createdAt).toLocaleDateString()}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h5 className="dz-title">
                                                    <a href="javascript:void(0);">{recipe.title}</a>
                                                </h5>
                                                <p>{recipe.instructions.substring(0, 100)}...</p>
                                                <div className="read-btn d-flex justify-content-between">
                                                    <a href="javascript:void(0);" className="btn btn-primary btn-hover-2">
                                                        Read More
                                                    </a>
                                                    <div className="icons">
                                                        <a href={`/update-recipe/${recipe._id}`} className='me-3 text-success'><i className="fa-solid fa-pencil"></i></a>
                                                        <a href="javascript:void(0);" className="text-danger" onClick={() => handleDelete(recipe._id)} >
                                                            <i className="fa-regular fa-trash-can"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center">No recipes found.</p>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <aside className="side-bar sticky-top">
                            <div className="widget">
                                <div className="widget-title">
                                    <h4 className="title">Search</h4>
                                </div>
                                <div className="search-bx">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <div className="input-side">
                                                <input name="title" className="form-control" onChange={handleFilterChange} placeholder="Search by title" type="text" />
                                                <div className="input-group-btn">
                                                    <button type="submit" className="btn btn-primary">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.3337 18.3334L16.667 16.6667" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="widget widget_categories">
                                <div className="widget-title">
                                    <h4 className="title">Cuisine Type</h4>
                                </div>
                                <ul>
                                    {uniqueCuisines.map((cuisine, index) => (
                                        <li key={index} className="cat-item">
                                            <a href="javascript:void(0);" onClick={() => handleCuisineClick(cuisine)}>
                                                {cuisine}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;
