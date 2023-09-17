import React from "react";

// navbar component that takes in the currentPage argument and the handlePageChange function
function Navbar({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a 
              href="#aboutme"
              // on click changes the page
              onClick={() => handlePageChange('AboutMe')}
              // checks if page is currently on about me, if yes nav link is displayed as active, else it isn't 
              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                AboutMe
              </a>
          </li>
          <li className="nav-item">
            {/* portfolio page link */}
          <a 
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
            </a>
          </li>
          <li className="nav-item">
            {/* contact page link */}
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
               Contact
          </a>
          </li>
          <li className="nav-item">
            {/* resume page link */}
            <a 
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
          </a>
          </li>
        </ul>
    )
}

export default Navbar;