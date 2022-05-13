import React from 'react';
import './Home.css';
import banner from './../../images/banner.jpg';

const Home = () => {
    return (
        <div>
            <div className="banner text-center">
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-0 col-sm-1"></div>
                            <div className="col-md-12 col-sm-10">
                                <p className='fs-1'>Get great deals every day at <span className='d-block vc-text1'>The Vertex Books House.</span></p>
                            </div>
                            <div className="col-md-0 col-sm-1"></div>
                        </div>
                    </div>
                </div>
                <img className='w-100 h-100' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;