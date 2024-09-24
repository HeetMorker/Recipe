import React from 'react'

const Footer = () => {
    return (
        <footer className="site-footer style-1 bg-dark" id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="widget widget_getintuch">
                                <h5 className="footer-title">Contact</h5>
                                <ul>
                                    <li>
                                        <i className="flaticon-placeholder" />
                                        <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-telephone" />
                                        <p>+91 987-654-3210<br />
                                            +91 123-456-7890</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1" />
                                        <p>info@example.com<br />
                                            info@example.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Our Links</h5>
                                <ul>
                                    <li><a href="/"><span>Home</span></a></li>
                                    <li><a href="/"><span>About Us</span></a></li>
                                    <li><a href="/"><span>Services</span></a></li>
                                    <li><a href="/"><span>Team</span></a></li>
                                    <li><a href="/"><span>Blog</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_services">
                                <h5 className="footer-title">OUR SERVICES</h5>
                                <ul>
                                    <li><a href="/"><span>Strategy &amp; Research</span></a></li>
                                    <li><a href="/"><span>Fast Delivery</span></a></li>
                                    <li><a href="/"><span>Seat Reservation</span></a></li>
                                    <li><a href="/"><span>Pickup In Store</span></a></li>
                                    <li><a href="/"><span>Our Menu</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6	">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Help Center</h5>
                                <ul>
                                    <li><a href="/"><span>FAQ</span></a></li>
                                    <li><a href="/"><span>Shop</span></a></li>
                                    <li><a href="/"><span>Category Filter</span></a></li>
                                    <li><a href="/"><span>Testimonials</span></a></li>
                                    <li><a href="/"><span>Contact Us</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom Part */}
            <div className="container">
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 text-md-start">
                            <p>Copyright <span className="current-year">2024</span> All rights reserved.</p>
                        </div>
                        <div className="col-xl-6 col-md-6 text-md-end">
                            <span className="copyright-text">Crafted With <span className="heart" /> by <a href="https://dexignzone.com/" target="_blank">DexignZone</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <img className="bg1 dz-move" src="assets/images/background/pic5.png" alt="/" />
            <img className="bg2 dz-move" src="assets/images/background/pic6.png" alt="/" />
        </footer>
    )
}

export default Footer