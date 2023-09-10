import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/PortfolioPage.css';

export default function PortfolioPage() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

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

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header>
                {{
                  navbar: <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> 
                }}          
            </Header>
            {renderPage()}
            <Footer />
        </div>
    )
}