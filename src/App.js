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
import Projects from './Components/Project';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* This stays on all pages */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />}/>
    </Routes>
      <ImageComponent /> {/* This stays on all pages */}
    </Router>
  );
};

export default App;
