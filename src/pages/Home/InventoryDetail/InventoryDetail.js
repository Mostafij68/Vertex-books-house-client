import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../hooks/useProductDetail';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();
    const [product] = useProductDetail(id);
    const { name, _id, price, img, author, description, publisher, publish, quantity } = product;

    const handleDelivered = quantity => {
        const reduce = quantity - 1;
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({reduce})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };

    return (
        <div className='vc-container py-1'>
            <div className="row my-5">
                <div className="col-xl-0"></div>
                <div className="col-xl-12">
                    <div className="detail shadow p-5 d-flex justify-content-between">
                        <div className='detail-img'>
                            <div>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='detail-info'>
                            <h2>{name}</h2>
                            <p className='d-description'>{description}</p>
                            <p className='vc-text1 author fw-bold m-0'> <span></span>{author}</p>
                            <ul>
                                <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Publisher : <span>{publisher}</span></li>
                                <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Publish : <span>{publish}</span></li>
                                <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Quantity : <span>{quantity}</span></li>
                                <li><i class="fa-solid fa-angles-right me-2 vc-text1"></i>Price : <span>{price}</span></li>
                            </ul>
                            <div className="inventory-btn mt-5 mb-0">
                                <button onClick={()=>handleDelivered(quantity)}>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-0"></div>
            </div>
        </div>
    );
};

export default InventoryDetail;