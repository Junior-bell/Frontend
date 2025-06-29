import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Database, Shield, Terminal } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    description: "Developing responsive, fast-loading user interfaces using React.js, Next.js, and Bootstrap.",
    icon: <Code2 className="w-12 h-12 text-primary" />,
    features: [
      "Responsive UI with Bootstrap",
      "Next.js for SEO & Routing",
      "Reusable Components",
      "Performance Optimization"
    ]
  },
  {
    title: "Java Backend Development",
    description: "Building secure and scalable RESTful APIs with Java, Spring Boot, and Maven.",
    icon: <Terminal className="w-12 h-12 text-primary" />,
    features: [
      "REST API Development",
      "Spring Boot + Maven",
      "JWT Authentication",
      "Exception Handling"
    ]
  },
  {
    title: "Database Management",
    description: "Designing and optimizing relational databases using Oracle and MySQL.",
    icon: <Database className="w-12 h-12 text-primary" />,
    features: [
      "Relational DB Design",
      "PL/SQL Query Optimization",
      "CRUD Operations",
      "Data Backup & Migration"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Creating clean and intuitive user interfaces focused on usability and accessibility.",
    icon: <Palette className="w-12 h-12 text-primary" />,
    features: [
      "Wireframing with Figma",
      "Responsive Layouts",
      "Accessible Color Schemes",
      "User-Centered Design"
    ]
  },
  {
    title: "Security & Authentication",
    description: "Implementing best practices in securing web apps with Spring Security and HTTPS.",
    icon: <Shield className="w-12 h-12 text-primary" />,
    features: [
      "Spring Security Integration",
      "JWT Tokens & Role-based Auth",
      "Input Validation",
      "HTTPS & CSRF Protection"
    ]
  },
  {
    title: "Linux & DevOps Basics",
    description: "Working with Linux terminals, Git, and deploying apps on Vercel or local servers.",
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    features: [
      "Version Control with Git",
      "Linux Terminal Usage",
      "Vercel Deployment",
      "Basic Shell Scripting"
    ]
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Development Services
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From full-stack web apps to secure backend APIs, I offer a range of services that combine clean UI, robust Java backends, and efficient databases to help your ideas come to life.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                <ul className="list-disc list-inside text-muted-foreground text-left w-full">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
