Recipe Management Application:

This is a full-stack Recipe Management Application built with the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to create, view, update, and delete recipes. Users can search for recipes by title, filter by categories, and manage their own recipes. The application also includes user authentication with JWT, allowing users to have their own set of private recipes.

Table of Contents

- Project Overview
- Features
- Technologies Used
- Installation
- Environment Variables
- Running the Application
- API Endpoints
- Frontend Pages
- Deployment
- Screenshots
- License

Project Overview :

This Recipe Management Application is a full-stack application where users can manage their favorite recipes. The backend provides a RESTful API to handle CRUD operations on recipes, including image uploads, user authentication, and searching/filtering functionalities. The frontend is built using React and styled with Tailwind CSS.

Users can:

Add new recipes with an image, ingredients, and instructions.
Edit and delete their own recipes.
Search for recipes by title.
View detailed information for each recipe.
Secure their data with JWT-based authentication.
Features
Backend Features
User Authentication: Users can register, login, and get authenticated with JSON Web Tokens (JWT).
CRUD Operations: Users can create, view, update, and delete their recipes.
Image Uploads: Users can upload images for their recipes, which are stored using Multer.
Search & Pagination: Recipes can be searched by title with pagination for large datasets.
Error Handling: Consistent error handling for invalid inputs, authentication, and CRUD operations.
Frontend Features
Responsive Design: A fully responsive UI using React and styled with Tailwind CSS.
Recipe List: Display recipes with pagination and search functionality.
Recipe Details: Detailed view of each recipe, including title, ingredients, instructions, and image.
User Recipes: Users can manage their own recipes, editing or deleting them as needed.
Authentication: Secure login and registration system.
Technologies Used
Backend:
Node.js with Express.js for building the RESTful API.
MongoDB with Mongoose for the database and schema modeling.
JWT (JSON Web Tokens) for secure user authentication.
Multer for image uploads.
Frontend:
React.js for building the user interface.
Axios for making API calls to the backend.
React Router for navigation.
Tailwind CSS or Bootstrap for styling.
Installation
Prerequisites:
Node.js (v14+)
MongoDB
Git
Steps to Install:
Clone this repository:

bash
Copy code
git clone https://github.com/your-repo-url.git
cd your-repo-url
Install dependencies for both the backend and frontend:

bash
Copy code
cd backend
npm install
cd ../frontend
npm install
Environment Variables
Create a .env file in the backend folder with the following variables:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_database_connection_string
JWT_SECRET=your_jwt_secret_key
For the image uploads, ensure you have the uploads/ directory created in the root of the backend project.

Running the Application
Backend:
bash
Copy code
cd backend
npm run dev
This will start the backend server at http://localhost:5000.

Frontend:
bash
Copy code
cd frontend
npm start
This will start the frontend server at http://localhost:3000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user and get a JWT token.
Recipe Management
POST /api/recipes: Create a new recipe (authenticated, image upload).
GET /api/recipes: Get a list of recipes (supports search & pagination).
GET /api/recipes/:id: Get a single recipe by ID.
PUT /api/recipes/:id: Update a recipe (authenticated).
DELETE /api/recipes/:id: Delete a recipe (authenticated).
Example JSON Response for Recipe:
json
Copy code
{
"title": "Spaghetti Bolognese",
"cuisineType": "Italian",
"cookingTime": 60,
"instructions": "Cook spaghetti according to package instructions...",
"ingredients": ["Spaghetti", "Ground beef", "Onion", "Garlic", "Tomato sauce"],
"image": "uploads/spaghetti_bolognese.jpg",
"createdAt": "2024-09-23T10:25:32.903Z",
"updatedAt": "2024-09-23T10:25:32.903Z"
}
Frontend Pages
Home Page: Displays all recipes with pagination and search functionality.
Recipe Details Page: Shows detailed information about the recipe, including title, ingredients, instructions, and image.
Login & Register Pages: Users can log in or register to manage their recipes.
Add Recipe Page: Authenticated users can add new recipes with an image.
Update Recipe Page: Authenticated users can edit their existing recipes.
Deployment
Frontend:
Deployed on Vercel or Netlify.
Backend:
Deployed on Heroku or Render.
Deployment Steps:
For backend deployment, push the code to Heroku:

bash
Copy code
git push heroku main
For frontend deployment, push the code to Vercel or Netlify:

bash
Copy code
vercel --prod
Screenshots
Include relevant screenshots here for better understanding (if available).

License
This project is licensed under the MIT License - see the LICENSE file for details.
