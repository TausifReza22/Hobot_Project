import React from 'react';
import imgbg from './bg.png.webp';
import './Home.css'; // Add CSS file for styling

function Home() {
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* Background image with overlay */}
                        <div className="img-overlay">
                            <img src={imgbg} className="bd-placeholder-img" alt="background" />
                        </div>
                        <div className="container text-center ">
                            <div className="carousel-caption mt-5">
                                <h3 className='text-center fw-bold'>Are You a Supplier?</h3>
                                <h1 className="">Explore Matching Opportunities.</h1>
                                <div className="maininput">
                                    <div className="inp">
                                        <div className="input-container">
                                            <span className="input-icon"><i className="fa-solid fa-briefcase text-danger "></i></span>
                                            <input type="text" placeholder='Search your required service here' />
                                        </div>
                                        <div className="input-container">
                                            <span className="input-icon"><i class="fa-solid fa-location-dot text-danger"></i></span>
                                            <input type="text" placeholder='Search your desired location here' />
                                        </div>
                                       
                                        <button type="button" className="btn btn-success success-btn">Search</button>
                                    </div>
                                </div>
                                <h5 className='text-center '><span className='fw-bold'>Are You a buyer?</span> <span className=''>
                                    <a href="#" className='text-white'> Click here if you are looking to post a requirements</a>
                                    </span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
