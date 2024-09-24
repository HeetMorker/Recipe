import React from 'react'

const Header = () => {
    return (
        <header className="site-header mo-left header header-transparent style-1">
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        <div className="logo-header mostion">
                            <a href="/" className="anim-logo"><img src="../assets/images/logo.png" alt="/" /></a>
                            <a href="/" className="anim-logo-white"><img src="../assets/images/logo2.png" alt="/" /></a>
                        </div>

                        <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                            <div className="logo-header">
                                <a href="/" className="anim-logo"><img src="../assets/images/logo.png" alt="/" /></a>
                            </div>
                            <ul className="nav navbar-nav navbar white">
                                <li><a href="/">Home</a></li>
                                <li><a href="/addRecipe">Add Recipe</a></li>
                                <li><a href="">View Recipe</a></li>
                            </ul>
                            <div className="dz-social-icon">
                                <ul>
                                    <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/" /></li>
                                    <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/" /></li>
                                    <li><a target="_blank" className="fab fa-linkedin-in" href="https://www.linkedin.com/" /></li>
                                    <li><a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header