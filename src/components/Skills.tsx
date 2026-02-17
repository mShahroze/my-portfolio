import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJest,
  SiPostgresql,
  SiOpenai,
  SiTensorflow,
  SiPython,
} from 'react-icons/si';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  category: 'core' | 'learning' | 'tools';
}

const skills: Skill[] = [
  // Core Skills
  {
    name: 'React',
    icon: FaReact,
    color: 'text-blue-400',
    category: 'core',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-600',
    category: 'core',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-gray-800 dark:text-white',
    category: 'core',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-cyan-500',
    category: 'core',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: 'text-green-500',
    category: 'core',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: 'text-blue-700',
    category: 'core',
  },
  {
    name: 'Jest',
    icon: SiJest,
    color: 'text-red-600',
    category: 'core',
  },
  // Currently Learning
  {
    name: 'OpenAI API',
    icon: SiOpenai,
    color: 'text-green-400',
    category: 'learning',
  },
  {
    name: 'TensorFlow.js',
    icon: SiTensorflow,
    color: 'text-orange-500',
    category: 'learning',
  },
  {
    name: 'Python',
    icon: SiPython,
    color: 'text-yellow-500',
    category: 'learning',
  },
  // Tools
  {
    name: 'Git',
    icon: FaGitAlt,
    color: 'text-orange-600',
    category: 'tools',
  },
  {
    name: 'Docker',
    icon: FaDocker,
    color: 'text-blue-500',
    category: 'tools',
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: 'text-yellow-600',
    category: 'tools',
  },
];

const categoryLabels = {
  core: 'Core Technologies',
  learning: 'Currently Learning',
  tools: 'Tools & Platforms',
};

const Skills: React.FC = () => {
  const categories = ['core', 'learning', 'tools'] as const;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6 text-center">
              {categoryLabels[category]}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + index * 0.1,
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <skill.icon
                        className={`text-6xl ${skill.color} mb-4 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg`}
                      />
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                        style={{ zIndex: -1 }}
                      />
                    </motion.div>
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <span className="font-semibold">Also familiar with:</span>{' '}
            React Testing Library, Chromatic, Contentful CMS, CI/CD (GitHub Actions),
            Vercel, PHP, jQuery, and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
