import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Spring Boot and React.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "AWS"],
      githubLink: "https://github.com/junior-bell/frontend",
      liveLink: "wagh-shivam.vercel.app"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A task management application with user authentication and real-time updates.",
      technologies: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Application",
      description: "A responsive weather application that provides real-time weather data.",
      technologies: ["JavaScript", "React", "Node.js", "OpenWeather API"],
      githubLink: "https://github.com/Junior-bell/Weather-App",
      liveLink: "https://shivam-weather.vercel.app/"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "A mobile-first application to track workouts and nutrition.",
      technologies: ["Java", "Android", "Firebase", "Material Design"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];

  return (
    <div className="section-container projects-container">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;