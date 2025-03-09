import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "Building scalable web applications with Java, Spring Boot, and modern frontend frameworks.",
      icon: "fas fa-code"
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database systems for performance and reliability.",
      icon: "fas fa-database"
    },
    {
      title: "Frontend Development",
      description: "Creating interactive and responsive user interfaces with React and modern CSS.",
      icon: "fas fa-laptop-code"
    },
    {
      title: "API Development",
      description: "Building robust and secure RESTful APIs for seamless integration.",
      icon: "fas fa-plug"
    },
    {
      title: "Cloud Deployment",
      description: "Deploying applications to cloud platforms like AWS, Azure, and Google Cloud.",
      icon: "fas fa-cloud"
    },
    {
      title: "DevOps Integration",
      description: "Implementing CI/CD pipelines and containerization for efficient deployment.",
      icon: "fas fa-cogs"
    }
  ];

  return (
    <div className="section-container services-container">
      <h1 className="section-title">My Services</h1>
      <p className="section-description">
        I provide comprehensive solutions tailored to meet your specific needs. 
        From concept to deployment, I handle every aspect of the development process.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

