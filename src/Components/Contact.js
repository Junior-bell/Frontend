import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Contact Me
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-lg text-muted-foreground flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <span>+91 7548 5595</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <a href="mailto:waghshivam322@gmail.com" className="hover:text-primary transition-colors">
              waghshivam322@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-primary" />
            <span>Pune, India</span>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="h-6 w-6 text-primary" />
            <a href="https://www.linkedin.com/in/shivam-w-1969ab2ab/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="h-6 w-6 text-primary" />
            <a href="https://github.com/Junior-bell/BackEnd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://www.linkedin.com/in/shivam-w-1969ab2ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Junior-bell/BackEnd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 hover:text-background transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;