import React from 'react';
import './Contact.css'; // Importing the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 7548 5595</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:waghshivam322@gmail.com">waghshivam322@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Pune, India</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/shivam-w-1969ab2ab/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/Junior-bell/BackEnd" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shivam-w-1969ab2ab/" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Junior-bell/BackEnd" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
