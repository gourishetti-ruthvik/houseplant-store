import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing">
            <h1>Green Haven</h1>
            <p>Your one-stop shop for beautiful and sustainable houseplants.</p>
            <button onClick={() => navigate('/products')}>Get Started</button>
        </div>
    );
};

export default LandingPage;
