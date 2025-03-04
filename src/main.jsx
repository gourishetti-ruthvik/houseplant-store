import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Import Redux Provider
import { store } from './redux/store.js'; // Import Redux Store

// Wrap App in Redux Provider
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
