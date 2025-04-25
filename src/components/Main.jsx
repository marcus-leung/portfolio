import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import profile from '../assets/pfp.jpg';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <section id="main" className="max-w-[1040px] mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex flex-col space-y-6 order-2 sm:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-indigo-600">Marcus Leung</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            I am a Technology and Information Management student with a Computer Science minor at UC Santa Cruz,
            graduating in June 2025. I have a strong technical foundation and experience in software development, API
            sales, and product development, looking for a full time opportunity.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/marcus-leung-582006252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/marcus-leung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://docs.google.com/document/d/1dlGXWTbbZvng8-3DVYBp94R95i3EPuTBN6_2vk8Za_4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              aria-label="Download Resume"
            >
              <FaFileAlt size={16} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 sm:order-2 flex justify-center sm:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gray-100 rounded-3xl -z-10"></div>

            <img
              src={profile || "/placeholder.svg"}
              alt="Marcus Leung"
              className="rounded-3xl shadow-md border border-gray-200 w-full max-w-md object-cover aspect-square"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
