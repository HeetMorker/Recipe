import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div id="loading-area" className="loading-page-3">
                <img src="../assets/images/loading.gif" alt />
            </div>
            <div className="page-wraper">
             <Header/>
                <div className="page-content bg-white">
                    <div className="dz-bnr-inr style-1 text-center bg-parallax" style={{ backgroundImage: 'url("../assets/images/banner/bnr5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="container">
                            <div className="dz-bnr-inr-entry">
                                <h1>Recipe !! You Never Heard Before</h1>
                                {/* <nav aria-label="breadcrumb" className="breadcrumb-row">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Blog Wide List Sidebar</li>
                                    </ul>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                <Outlet/>
                    {/* Blog Section */}
                </div>
                <Footer/>
                <div className="scroltop-progress scroltop-primary">
                    <svg width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Layout