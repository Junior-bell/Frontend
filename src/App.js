import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './lib/ThemeContext';
import ParticlesWrapper from './Components/ParticlesWrapper';
import './App.css';

// Lazy load components
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Services = lazy(() => import('./Components/Services'));
const Projects = lazy(() => import('./Components/Projects'));
const Experience = lazy(() => import('./Components/Experience'));
const Education = lazy(() => import('./Components/Education'));
const Contact = lazy(() => import('./Components/Contact'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Route wrapper component
const RouteWrapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </AnimatePresence>
  );
};

// App content component
const AppContent = () => {
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      // setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <RouteWrapper>
                <ParticlesWrapper>
                  <Home />
                </ParticlesWrapper>
              </RouteWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <RouteWrapper>
                <About />
              </RouteWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <RouteWrapper>
                <Services />
              </RouteWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <RouteWrapper>
                <Projects />
              </RouteWrapper>
            }
          />
          <Route
            path="/experience"
            element={
              <RouteWrapper>
                <Experience />
              </RouteWrapper>
            }
          />
          <Route
            path="/education"
            element={
              <RouteWrapper>
                <Education />
              </RouteWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteWrapper>
                <Contact />
              </RouteWrapper>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;