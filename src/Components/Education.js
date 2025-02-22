import React from 'react';
import './Education.css'; // Importing the CSS file

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor in Electronics and Telecommunication</h3>
          <p>Dr.Babasaheb Ambedkar Marathwada University,2023</p>
        </div>
        <div className="education-item">
          <h3>Diploma in Electronics and Telecommunication</h3>
          <p>Government Polytechnics Sambhajinagar, 2018</p>
        </div>
      </div>
    </section>
  );
};

export default Education;