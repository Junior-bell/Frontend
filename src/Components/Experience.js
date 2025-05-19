import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Experience = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Experience
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Current Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group hover:shadow-lg transition-shadow border border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Full Stack Java Developer (Trainee Projects)</CardTitle>
                <p className="text-muted-foreground">Self-Learning & Freelance Practice</p>
                <p className="text-sm text-muted-foreground">2024 - Present</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built full-stack CRUD applications using Spring Boot, Maven, Oracle DB, and HTML/CSS/JavaScript.</li>
                  <li>Designed RESTful APIs and implemented data persistence using JPA/Hibernate.</li>
                  <li>Used Git & GitHub for version control, with experience in feature branching and team collaboration.</li>
                  <li>Deployed personal projects on GitHub and Vercel (portfolio/biodata site).</li>
                  <li>Focused on writing clean, modular code and improving logic with daily problem-solving (LeetCode/DSA).</li>
                </ul>
                <p className="italic text-muted-foreground">
                  "I consistently build real-world Java applications and practice interview questions daily to prepare for my next role as a Junior Java Developer."
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Previous Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Production Associate</CardTitle>
                <p className="text-muted-foreground">Vishay Components Pvt. Ltd. – Pune, Maharashtra</p>
                <p className="text-sm text-muted-foreground">May 2019 – May 2021</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Operated precision machinery for electronic component manufacturing, adhering to detailed SOPs and safety guidelines.</li>
                  <li>Followed strict documentation practices, helping maintain traceability and compliance—skills essential for disciplined coding and software documentation.</li>
                  <li>Collaborated with quality assurance teams to identify defects, improve efficiency, and ensure high product standards—experience that translates into debugging, QA collaboration, and systematic problem-solving in software projects.</li>
                  <li>Gained exposure to ISO-compliant workflows and process-driven environments, fostering habits of structure and attention to detail, similar to agile/scrum practices in software teams.</li>
                  <li>Balanced full-time work while upskilling in Java, Spring Boot, Git, and SQL, demonstrating adaptability and strong time management.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
