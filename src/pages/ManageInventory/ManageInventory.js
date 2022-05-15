import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import './ManageInventory.css';

const ManageInventory = () => {
    const [products, setProducts] = useProducts([]);

    const handleRemoveItems = _id => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted');
                const remaining = products.filter(product => product._id !== _id);
                setProducts(remaining);
            }
        })
    };

    return (
        <div>
            <section className='vc-container pt-5'>
                <h1 className='mb-5 vc-text2 vc-h1 text-center'>Manage Inventory Items</h1>
                <div className="inventory">
                    {
                        products.map(product => <div key={product._id} className='inventory-info'>
                            <div className='inventory-items vc-shadow'>
                                <div className='vc-w-35 p-3'>
                                    <img src={product.img} alt="" />
                                </div>
                                <div className='vc-w-65 p-3'>
                                    <h2 className='vc-text2'>{product.name}</h2>
                                    <p className='text-muted mb-0'>{product.description}</p>
                                    <p className='vc-text1 author my-2'> <span></span> {product.author}</p>
                                    <div>
                                        <p className='fw-bold m-0'>Quantity: <span className='vc-text'>{product.quantity}</span></p>
                                        <p className='fw-bold m-0'>Price: <span className='vc-text'>{product.price}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-btn text-center">
                                <button onClick={() => handleRemoveItems(product._id)}>Remove Items</button>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ManageInventory;