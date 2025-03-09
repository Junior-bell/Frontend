import React from 'react';
import './Experience.css'; // Importing the CSS file

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-grid">
        <div className="experience-card">
          <h2 className="job-title">Software Developer</h2>
          <p className="company">Company Name</p>
          <p className="period">2023 - Present</p>
          <p className="responsibilities">
            Responsibilities and achievements in this role.
          </p>
        </div>
        
        <div className="experience-card">
          <h2 className="job-title">Intern</h2>
          <p className="company">Company Name</p>
          <p className="period">2022 - 2023</p>
          <p className="responsibilities">
            Responsibilities and achievements in this role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;