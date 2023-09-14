import React from 'react';
import '../styles/Header.css';

function Header({ children }) {
    return (
        <header className='header'>
            <h1>PythonFabi</h1>
            <nav>
                {children.navbar}
            </nav>
        </header>    
    );
}

export default Header;