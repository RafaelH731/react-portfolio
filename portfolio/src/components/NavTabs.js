import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './NavTabs.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Container className="nav-center">
    <Navbar>
    <ul className="nav nav-tabs">
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
     
      <li>
        <a
          href="#PortfolioGrid"
          onClick={() => handlePageChange('PortfolioGrid')}

          className={currentPage === 'PortfolioGrid' ? 'nav-link active' : 'nav-link'}
        >
          PortfolioGrid
        </a>
      </li>
      <li>
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </Navbar>
    </Container>
  );
}

export default NavTabs;
