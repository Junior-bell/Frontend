import React, { useCallback } from 'react';
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
import { Particles } from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="app-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0a0a23",
          },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: "#ffffff" },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.5,
            },
          },
          detectRetina: true,
        }}
      />
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;