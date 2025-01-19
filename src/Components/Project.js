import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Full stack java projects',
      description: 'An online store with a product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/Junior-bell/FullStackRepo',
    },
    {
      title: 'Spring boot layered application',
      description: 'A responsive portfolio showcasing my skills and projects.',
      technologies: ['React.js', 'CSS', 'React Router'],
      link: 'https://github.com/Junior-bell/FullStackRepo/tree/main/BootProj03-LayeredApp',
    },
    {
      title: 'Spring boot crud application',
      description: 'A system for managing employee data using a RESTful API.',
      technologies: ['Spring Boot', 'Hibernate', 'MySQL'],
      link: 'https://github.com/Junior-bell/FullStackRepo/tree/main/MVCBootProj07-MiniProject-CURDOperations',
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
