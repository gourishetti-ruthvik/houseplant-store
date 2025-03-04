import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
    { id: 1, name: 'Aloe Vera', price: 10, image: '/aloe.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, image: '/snake.jpg' },
];

const ProductListing = () => {
    const dispatch = useDispatch();

    return (
        <div>
            {plants.map((plant) => (
                <div key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
