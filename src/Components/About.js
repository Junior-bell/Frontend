import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code2, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, accessible UIs using React.js, Next.js, HTML, CSS, and Bootstrap with a focus on performance and usability.",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: "Backend Development",
      description:
        "Building scalable RESTful APIs and enterprise-grade applications using Java, Spring Boot, Maven, and Oracle Database.",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "UI/UX Thinking",
      description:
        "Designing intuitive user experiences and clean interfaces with attention to visual hierarchy, accessibility, and user flow.",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      title: "Learning & Growth",
      description:
        "Continuously exploring new technologies including Linux, cybersecurity, ethical hacking, and system design to expand technical depth.",
      icon: <Smartphone className="h-6 w-6" />,
    },
  ];
  

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Full Stack Developer with a keen eye for design and a love for creating
            seamless user experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src="images/Ghibli.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Full Stack Developer
            </h2>
            <p className="text-muted-foreground mb-6">
  I’m <strong>Shivam Wagh</strong>, a dedicated Full Stack Java Developer with a strong foundation in <strong>Spring Boot</strong>, <strong>Oracle Database</strong>, and modern backend architecture. With a background in Electronics & Telecommunication, I bring a structured engineering mindset to every project I work on.
  <br /><br />
  I specialize in building scalable, clean, and performance-driven web applications using Java technologies. I also enjoy crafting seamless user experiences and exploring creative frontend development with React and Next.js.
  <br /><br />
  Currently based in Pune, I’m actively seeking a software development role where I can contribute to real-world projects, grow as a developer, and work with innovative teams. I’m also passionate about continuously learning — from system design patterns to ethical hacking and Linux systems.
  <br /><br />
  Let’s connect and build something impactful together.
</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span>
                <span className="text-muted-foreground">Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span className="text-muted-foreground">waghshivam322@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Availability:</span>
                <span className="text-muted-foreground">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group hover:shadow-lg transition-shadow border border-border shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
