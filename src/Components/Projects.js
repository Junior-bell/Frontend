import React from 'react';
// import './Projects.css';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food-Delivery Application (Beta)",
      description: "A food-delivery web application currently in beta phase, offering real-time order tracking and restaurant management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubLink: "https://github.com/Junior-bell/food-delivery-app", // <-- update with your actual repo link
      liveLink: "https://shivam-food-delivery-vercel.app/" // <-- update with your actual live link if available
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
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent relative inline-block pb-2">
            My Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full"></span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-shadow h-full border border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;