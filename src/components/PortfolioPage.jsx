// import React, useState all the main components to render
import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// export PorfolioPage component, which includes all the other components
export default function PortfolioPage() {
    // currentPage state, which has the currentState "AboutMe"
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // determines which page to render based on which page is chosen
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } 
        if (currentPage === 'Contact') {
            return <Contact />;
        } 
        return <Resume />;
    };

    // handlePageChange function, which takes the page as an argument and sets the page as currentpage
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='body'>
            {/* render Header including Navbar and passin currentpage and the handlePageChange function */}
            <Header>
                {{
                  navbar: <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> 
                }}          
            </Header>
            {/* Render current Page between Header and Footer */}
            {renderPage()}
            {/* render Footer component */}
            <Footer />
        </div>
    )
}