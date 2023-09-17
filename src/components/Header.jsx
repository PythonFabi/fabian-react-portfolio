import React from 'react';

// Header component that takes children as argument, which are in that case the Navbar
function Header({ children }) {
    return (
        <header className='portfolio-header'>
            <h1>PythonFabi</h1>
            {/* display navbar */}
            <nav>
                {children.navbar}
            </nav>
        </header>    
    );
}

export default Header;