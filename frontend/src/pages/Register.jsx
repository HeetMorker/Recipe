import React, { useState  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the registration data to the backend API
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username: name,
                email,
                password
            });
            // Handle success response
            setMessage('Registration successful! You can now login.');
            navigate("/login")
            console.log(response.data);
        } catch (error) {
            // Handle error response
            setMessage('Registration failed. Please try again.');
            console.error(error.response ? error.response.data : error.message);
        }
    };
    return (
        <section className='bg-white vh-100'>
            <div className='container-fluid'>
                <div className="container vh-100">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="col-6">
                            <div className="login-form">
                                <div className="login-head text-center">
                                    <a href="index.html" className="anim-logo text-center mb-5"><img src="assets/images/logo.png" alt="/" /></a>
                                    <h4 className="title">Register Here !</h4>
                                    {/* <p>We’d love have you join our 100% remote network of creatord &amp; freelance.</p> */}
                                </div>
                                {message && <p className="text-center">{message}</p>}
                                <form onSubmit={handleSubmit}>
                                <div className="form-group m-b15">
                                    <label className="form-label">Name*</label>
                                    <div className="input-group">
                                        <input name="name" required type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="form-group m-b15">
                                    <label className="form-label">Email*</label>
                                    <div className="input-group">
                                        <input name="email" required type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                                <div className="form-group m-b30">
                                    <label className="form-label">Password*</label>
                                    <div className="input-group search-input">
                                        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control dz-password" placeholder="Enter a Password" />
                                        <div className="show-pass">
                                            <svg className="eye-close" xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="#8ea5c8"><path d="M11 17.188a8.71 8.71 0 0 1-1.576-.147.69.69 0 0 1-.579-.678.7.7 0 0 1 .817-.676 7.33 7.33 0 0 0 1.339.127c4.073 0 7.61-3.566 8.722-4.812a18.51 18.51 0 0 0-2.434-2.274.69.69 0 0 1 .335-1.226.69.69 0 0 1 .268.019c.087.024.169.064.24.12a18.79 18.79 0 0 1 3.036 2.939.69.69 0 0 1 0 .848c-.185.234-4.581 5.763-10.167 5.763zm7.361-13.549a.69.69 0 0 0-.972 0l-2.186 2.186a10.68 10.68 0 0 0-2.606-.864c-.527-.099-1.061-.149-1.597-.149-5.585 0-9.982 5.528-10.166 5.763a.69.69 0 0 0 0 .848c.897 1.09 1.915 2.075 3.033 2.936.529.415 1.083.796 1.66 1.142l-1.888 1.887c-.066.063-.118.139-.154.223a.69.69 0 0 0 .145.757.67.67 0 0 0 .226.15c.085.034.175.052.266.051a.69.69 0 0 0 .265-.056c.084-.036.16-.088.223-.154l13.75-13.75a.69.69 0 0 0 0-.972zm-13.65 9.636A18.51 18.51 0 0 1 2.278 11C3.39 9.754 6.927 6.187 11 6.187a7.31 7.31 0 0 1 1.348.127 8.92 8.92 0 0 1 1.814.55L12.895 8.13c-.661-.437-1.453-.632-2.241-.552a3.44 3.44 0 0 0-2.085.989c-.56.56-.91 1.297-.989 2.085a3.44 3.44 0 0 0 .552 2.241l-1.601 1.604a14.43 14.43 0 0 1-1.82-1.222zm4.432-1.392c-.134-.275-.204-.577-.206-.883a2.07 2.07 0 0 1 .6-1.456 2.12 2.12 0 0 1 2.338-.392l-2.731 2.731z" /></svg>
                                            <svg className="eye-open" xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#8ea5c8"><path d="M19.873 9.611c-.179-.244-4.436-5.985-9.873-5.985S.305 9.367.127 9.611a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.66.66 0 0 0 0-.778zM10 15.055c-4.005 0-7.474-3.81-8.501-5.055C2.525 8.753 5.986 4.945 10 4.945c4.005 0 7.473 3.809 8.501 5.055-1.025 1.247-4.487 5.054-8.501 5.054zm0-9.011A3.96 3.96 0 0 0 6.044 10 3.96 3.96 0 0 0 10 13.956 3.96 3.96 0 0 0 13.956 10 3.96 3.96 0 0 0 10 6.044zm0 6.593A2.64 2.64 0 0 1 7.363 10 2.64 2.64 0 0 1 10 7.363 2.64 2.64 0 0 1 12.637 10 2.64 2.64 0 0 1 10 12.637z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <button name="submit" value="submit" type="submit" className="btn btn-primary w-100 d-block btn-hover-2"><span>Sign Up</span></button>
                                <p className="text-center m-t30">Not registered?
                                    <a className="register text-primary font-weight-500">Register here</a>
                                </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register