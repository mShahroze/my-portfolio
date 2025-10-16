import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center z-10">
        <div className="mb-8">
          <div
            className="overflow-hidden rounded-full mx-auto shadow-xl border-4 border-white dark:border-gray-700"
            style={{ width: '400px', height: '400px' }}
          >
            <Image
              src="/assets/img/me-new.jpg"
              alt="Muhammad S. Bilal"
              width={500}
              height={500}
            />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Muhammad S. Bilal
        </h1>
        <p className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Software Engineer & Web Developer
        </p>
        <div className="flex justify-center space-x-6">
          {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <FaTwitter className="w-8 h-8 text-blue-500 dark:text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
