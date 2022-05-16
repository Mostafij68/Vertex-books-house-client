import React, { useEffect, useState } from 'react';
import './Stores.css';

const Stores = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, []);
    return (
        <div className='vc-container py-5'>
            <h1 className='pt-5'>Our Stores</h1>
            <div className="row">
                {
                    photos.map(photo => <div className='col-lg-4 col-md-6 col-sm-6 g-5' key={photo._id}>
                        <div className="store shadow">
                            <img src={photo.photo} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Stores;