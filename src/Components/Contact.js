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
            <span>+9175485595</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>waghshivam322@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Pune,India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
