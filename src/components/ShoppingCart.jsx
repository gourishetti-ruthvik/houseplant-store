import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name} width="50" />
                        <h3>{item.name}</h3>
                        <p>${item.price} x {item.quantity}</p>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            )}
            <h3>Total Items: {cart.totalQuantity}</h3>
            <h3>Total Price: ${cart.totalPrice}</h3>
        </div>
    );
};

export default ShoppingCart;
