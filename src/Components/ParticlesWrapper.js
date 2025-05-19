import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Particles } from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const ParticlesWrapper = ({ children }) => {
  const location = useLocation();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Only show particles on home page
  if (location.pathname !== '/') return children;

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent",
          },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            color: { value: "var(--primary)" },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              outMode: "out",
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            links: {
              enable: true,
              distance: 150,
              color: "var(--primary)",
              opacity: 0.1,
              width: 1
            },
          },
          detectRetina: true,
        }}
      />
      {children}
    </>
  );
};

export default ParticlesWrapper; 