import React from 'react';
import './Experience.css'; // Importing the CSS file

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-grid">
        <div className="experience-card">
          <div className="experience-content">
            <h2 className="job-title">Full Stack Java Developer (Trainee Projects)</h2>
            <p className="company">Self-Learning & Freelance Practice</p>
            <p className="period">2024 - Present</p>
            <ul className="responsibilities">
              <li>Built full-stack CRUD applications using Spring Boot, Maven, Oracle DB, and HTML/CSS/JavaScript.</li>
              <li>Designed RESTful APIs and implemented data persistence using JPA/Hibernate.</li>
              <li>Used Git & GitHub for version control, with experience in feature branching and team collaboration.</li>
              <li>Deployed personal projects on GitHub and Vercel (portfolio/biodata site).</li>
              <li>Focused on writing clean, modular code and improving logic with daily problem-solving (LeetCode/DSA).</li>
            </ul>
            <p className="summary">
              "I consistently build real-world Java applications and practice interview questions daily to prepare for my next role as a Junior Java Developer."
            </p>
          </div>
        </div>
        
        <div className="experience-card">
          <div className="experience-content">
            <h2 className="job-title">Production Associate</h2>
            <p className="company">Vishay Components Pvt. Ltd. – Pune, Maharashtra</p>
            <p className="period">May 2019 – May 2021</p>
            <ul className="responsibilities">
              <li>Operated precision machinery for electronic component manufacturing, adhering to detailed SOPs and safety guidelines.</li>
              <li>Followed strict documentation practices, helping maintain traceability and compliance—skills essential for disciplined coding and software documentation.</li>
              <li>Collaborated with quality assurance teams to identify defects, improve efficiency, and ensure high product standards—experience that translates into debugging, QA collaboration, and systematic problem-solving in software projects.</li>
              <li>Gained exposure to ISO-compliant workflows and process-driven environments, fostering habits of structure and attention to detail, similar to agile/scrum practices in software teams.</li>
              <li>Balanced full-time work while upskilling in Java, Spring Boot, Git, and SQL, demonstrating adaptability and strong time management.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
