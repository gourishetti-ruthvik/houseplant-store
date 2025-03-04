import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {cart.cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} width="50" />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            )}

            <h3>Total Items: {cart.totalQuantity}</h3>
            <h3>Total Price: ${cart.totalPrice}</h3>

            <button onClick={() => alert("Coming Soon!")}>Checkout</button>
            <button onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
    );
};

export default ShoppingCart;
