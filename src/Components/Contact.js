import React from 'react';
import './Contact.css'; // Importing the CSS file

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
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
            <a href="https://github.com/Junior-bell/Frontend" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shivam-w-1969ab2ab/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Junior-bell/Frontend" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
