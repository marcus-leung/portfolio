import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaFilePdf } from "react-icons/fa"
import { SiDevpost } from "react-icons/si"
import ProjectModal from "./ProjectModal"

const ProjectItem = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { links } = project

  // Helper function to get primary link
  const getPrimaryLink = () => {
    if (links.live) return { url: links.live, text: "Visit Site", icon: <FaExternalLinkAlt className="mr-2" /> }
    if (links.github) return { url: links.github, text: "View Code", icon: <FaGithub className="mr-2" /> }
    if (links.devpost) return { url: links.devpost, text: "View on Devpost", icon: <SiDevpost className="mr-2" /> }
    if (links.paper) return { url: links.paper, text: "Read Paper", icon: <FaFilePdf className="mr-2" /> }
    return null
  }

  const primaryLink = getPrimaryLink()

  // Get appropriate icons for the hover overlay
  const getOverlayIcons = () => {
    const icons = []

    if (links.github) {
      icons.push({
        url: links.github,
        icon: <FaGithub />,
        label: "View code on GitHub",
      })
    }

    if (links.live) {
      icons.push({
        url: links.live,
        icon: <FaExternalLinkAlt />,
        label: "Visit live site",
      })
    }

    if (links.devpost) {
      icons.push({
        url: links.devpost,
        icon: <SiDevpost />,
        label: "View on Devpost",
      })
    }

    if (links.paper) {
      icons.push({
        url: links.paper,
        icon: <FaFilePdf />,
        label: "Read research paper",
      })
    }

    return icons
  }

  const overlayIcons = getOverlayIcons()

  return (
    <>
      <motion.div
        className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.img || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <div className="flex gap-2">
                  {overlayIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      aria-label={icon.label}
                    >
                      {icon.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <FaInfoCircle className="mr-1" /> Details
            </button>

            {primaryLink && (
              <a
                href={primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
              >
                {primaryLink.text} →
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <ProjectModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default ProjectItem
