import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductListing.css';

const plants = [
    { id: 1, name: 'Aloe Vera', category: 'Succulents', price: 10, image: '/aloe.jpg' },
    { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15, image: '/snake.jpg' },
    { id: 3, name: 'Peace Lily', category: 'Flowering', price: 12, image: '/lily.jpg' },
    { id: 4, name: 'Spider Plant', category: 'Air Purifying', price: 8, image: '/spider.jpg' },
    { id: 5, name: 'Cactus', category: 'Succulents', price: 9, image: '/cactus.jpg' },
    { id: 6, name: 'Fern', category: 'Indoor', price: 11, image: '/fern.jpg' }
];

const ProductListing = () => {
    const dispatch = useDispatch();
    const [addedItems, setAddedItems] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
        setAddedItems({ ...addedItems, [plant.id]: true });
    };

    return (
        <div className="product-list">
            {plants.map((plant) => (
                <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button 
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedItems[plant.id]}
                    >
                        {addedItems[plant.id] ? "Added" : "Add to Cart"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
