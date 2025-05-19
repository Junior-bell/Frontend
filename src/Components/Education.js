import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle } from './ui/card';

const Education = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Education
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group hover:shadow-lg transition-shadow border border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Bachelor in Electronics and Telecommunication</CardTitle>
                <p className="text-muted-foreground">Dr.Babasaheb Ambedkar Marathwada University</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Diploma in Electronics and Telecommunication</CardTitle>
                <p className="text-muted-foreground">Government Polytechnic Sambhajinagar</p>
                <p className="text-sm text-muted-foreground">2018</p>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
