import React from 'react';
import './Experience.css'; // Importing the CSS file

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p>Company Name, 2023 - Present</p>
          <p>Responsibilities and achievements in this role.</p>
        </div>
        <div className="experience-item">
          <h3>Intern</h3>
          <p>Company Name, 2022 - 2023</p>
          <p>Responsibilities and achievements in this role.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;