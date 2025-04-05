import React from 'react';
import './Experience.css'; // Importing the CSS file

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-grid">
        <div className="experience-card">
          <div className="experience-content">
            <h2 className="job-title">Trainee associate</h2>
            <p className="company">Company Name</p>
            <p className="period">2024 - Present</p>
            <p className="responsibilities">
              Responsibilities and achievements in this role.
            </p>
          </div>
        </div>
        
        <div className="experience-card">
          <div className="experience-content">
            <h2 className="job-title">Diploma Trainee</h2>
            <p className="company">Vishay Components pvt ltd</p>
            <p className="period">2019 - 2021</p>
            <p className="responsibilities">
              Responsibilities and achievements in this role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
