import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/darkTheme.css'; // Import global styles
import './styles/animations.css'; // Import animations
import './components/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
