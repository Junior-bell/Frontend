import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import profileImage from '../assets/profile.jpg';  // Import the profile image

const Main = () => {
  return (
    <div className="main-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profileImage} alt="Shivam" className="profile-img" />
        </div>
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>
          <h1><span className="highlight">Shivam </span>Wagh</h1>
          <h2>Full Stack Java Developer</h2>
          <p>I specialize in building modern, responsive web applications and RESTful APIs using Java, Spring Boot, and React.</p>
          
          <div className="hero-socials">
            <a href="https://linkedin.com/in/shivam-w-1969ab2ab" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Junior-bell/Frontend" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:waghshivam322@gmail.com" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          <div className="hero-buttons">
            <Link to="/projects" className="cta-button primary">My Projects</Link>
            <Link to="/contact" className="cta-button secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
