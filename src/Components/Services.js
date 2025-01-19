import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { icon: 'fas fa-code', title: 'Full Stack Development', description: 'Building scalable web applications with Java, Spring Boot, and React.' },
    { icon: 'fas fa-database', title: 'Database Management', description: 'Designing and optimizing database systems.' },
    { icon: 'fas fa-paint-brush', title: 'Frontend Development', description: 'Creating interactive and responsive user interfaces.' },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2>Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

