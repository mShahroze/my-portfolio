'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaProjectDiagram } from 'react-icons/fa';

interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: FaCode,
    title: 'Frontend Engineering',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
  },
  {
    icon: FaServer,
    title: 'Backend & Data',
    description: 'Node.js, PostgreSQL, REST APIs, Express',
  },
  {
    icon: FaProjectDiagram,
    title: 'AI/ML (Learning)',
    description: 'OpenAI API, LangChain.js, TensorFlow.js, RAG',
  },
];

const About: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/assets/img/me-new.jpg"
              alt="Muhammad S. Bilal"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                My journey from biomedical engineering to software development has given me a unique perspective on building data-driven systems. I graduated with a BEng in Biomedical Engineering, where I worked on ECG signal processing and medical imaging—laying the foundation for my analytical approach to problem-solving.
              </p>
              <p>
                I spent over a year at the NHS as a Software Data Analyst, building healthcare solutions that supported 500,000+ patients annually. I designed patient workflow systems, maintained databases for 50,000+ records, and created automated reporting tools that improved clinical efficiency by 60%. Working directly with healthcare professionals showed me how impactful well-designed data systems can be.
              </p>
              <p>
                For the past three years at PrettyLittleThing, I&apos;ve led frontend engineering initiatives—migrating design systems that improved web performance by 20%, architecting scalable TypeScript interfaces that reduced API bugs by 40%, and mentoring junior developers to improve code quality by 30%. I thrive on solving complex problems in fast-paced, team-driven environments.
              </p>
              <p>
                Now, I&apos;m returning to my roots in data and analytics. I&apos;m actively learning AI/ML fundamentals—working with LLMs, building RAG applications, and exploring TensorFlow.js—while preparing for an MSc in Data Science starting September 2026. My goal is to work at the intersection of software engineering and intelligent systems, particularly in healthcare and high-impact domains.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedSkill === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSkill(index)}
                >
                  <skill.icon className="text-4xl mb-4" />
                  <h3 className="font-semibold text-xl mb-2">
                    {skill.title}
                  </h3>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm"
                    >
                      {skill.description}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
