// import React and ReactDOM to render App
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import bootsrap and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Render App with ReactDOM in Stritmode
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)