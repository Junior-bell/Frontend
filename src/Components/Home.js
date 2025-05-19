import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg'; // Assuming your profile image is here

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full px-5 py-20 relative">
        {/* Assuming you have a background effect like particles or a gradient here */}
        {/* For example, if using ParticlesWrapper, it might be a sibling or ancestor of this div */}

        <div className="flex flex-col items-center justify-center max-w-2xl text-center z-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-red-400 opacity-30 blur-xl animate-pulse" />
            <img
              src={profileImage}
              alt="Shivam"
              className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-padding shadow-lg animate-float"
            />
          </motion.div>

          {/* Greeting */}
          <motion.span
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-lg text-muted-foreground mb-2"
          >
            Hello, I'm
          </motion.span>

          {/* Main Content (Name and Title)*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-2">
              <span className="text-yellow-400">Shivam </span>Wagh
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 text-muted-foreground font-medium">
              Full Stack Java Developer
            </h2>
          </motion.div>

           {/* Description */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
           >
             I specialize in building modern, responsive web applications and RESTful APIs using Java, Spring Boot, and React.
           </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 mb-8"
          >
            <a
              href="https://linkedin.com/in/shivam-w-1969ab2ab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Junior-bell/Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:waghshivam322@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-foreground text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              My Projects
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;