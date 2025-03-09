import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Shivam Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button" 
          onClick={() => {
            const navbarNav = document.getElementById('navbarNav');
            navbarNav.classList.toggle('show');
          }}
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Replaced href with Link to for routing */}
            <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Education">Education</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
