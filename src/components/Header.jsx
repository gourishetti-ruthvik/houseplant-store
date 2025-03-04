import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const cartTotal = useSelector(state => state.cart.totalQuantity);
    const navigate = useNavigate();

    return (
        <header className="header">
            <h1 onClick={() => navigate('/')}>Green Haven</h1>
            <nav>
                <button onClick={() => navigate('/products')}>Products</button>
                <button onClick={() => navigate('/cart')}>
                    Cart ({cartTotal})
                </button>
            </nav>
        </header>
    );
};

export default Header;
