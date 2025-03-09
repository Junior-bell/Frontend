import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Java Developer | Building Scalable Solutions</p>
        <div>
          <Link to="/projects" className="cta-button">
            <span>See My Work</span>
          </Link>
          <a 
            href="/Shivam_Wagh_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;