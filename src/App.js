import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Home from './Components/Home';
import Contact from './Components/Contact'; // New Component
import Education from './Components/Education'; // New Component
import Experience from './Components/Experience'; // New Component
import Services from './Components/Services'; // New Component
import ImageComponent from './Components/ImageComponent';
import About from './Components/About';
import Projects from './Components/Projects'; // Corrected import
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* This stays on all pages */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} /> {/* Corrected route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;