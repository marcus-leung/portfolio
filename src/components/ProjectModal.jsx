import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaFilePdf,
} from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Close modal on escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const { links } = project;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'>
          <motion.div
            className='relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors'
              aria-label='Close modal'
            >
              <FaTimes />
            </button>

            {/* Project image */}
            <div className='relative w-full aspect-video'>
              <img
                src={project.img || '/placeholder.svg'}
                alt={project.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end'>
                <div className='p-6 w-full'>
                  <h2 className='text-white text-2xl md:text-3xl font-bold'>
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Project content */}
            <div className='p-6'>
              {/* Technologies */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Overview
                </h3>
                <p className='text-gray-700'>{project.details.overview}</p>
              </div>

              {/* Features */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Key Features
                </h3>
                <p className='text-gray-700'>
                  <ul className='list-disc pl-5'>
                    {project.details.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>

              {/* Technologies */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Technologies Used
                </h3>
                <p className='text-gray-700'>
                  <ul className='list-disc pl-5'>
                    {project.details.tech.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>

              {/* Achievements */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Achievements
                </h3>
                <p className='text-gray-700'>
                  <ul className='list-disc pl-5'>
                    {project.details.achieve.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>

              {/* Actions */}
              <div className='flex flex-wrap gap-4'>
                {links.live && (
                  <a
                    href={links.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center'
                  >
                    <FaExternalLinkAlt className='mr-2' /> Visit Website
                  </a>
                )}
                {links.github && (
                  <a
                    href={links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors flex items-center'
                  >
                    <FaGithub className='mr-2' /> View Code
                  </a>
                )}
                {links.devpost && (
                  <a
                    href={links.devpost}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center'
                  >
                    <SiDevpost className='mr-2' /> View on Devpost
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
