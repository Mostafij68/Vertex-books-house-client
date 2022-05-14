import React from 'react';
import './Home.css';
import banner from './../../images/banner.jpg';
import useProducts from '../../hooks/useProducts';
import Inventory from './Inventory/Inventory';

const Home = () => {
    const [products, setProducts] = useProducts([]);
    return (
        <div>
            <section className="banner text-center">
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
            </section>
            <section className='vc-container py-5'>
                <h1 className='mb-5 vc-text2 vc-h1 text-center'>Inventory Items</h1>
                <div className="inventory">
                    {
                        products.map(product => <Inventory key={product._id} product={product}></Inventory>)
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;