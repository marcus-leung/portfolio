'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectItem from "./ProjectItem"
import ProjectFilter from "./ProjectFilter"
import projectsData from "../data/projects"

const Projects = () => {

  const allCategories = ["all", ...new Set(projectsData.flatMap((project) => project.categories))]

  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState([])
  const featuredProjects = projectsData.filter((project) => project.featured)

  useEffect(() => {
    const filtered =
      activeCategory === "all"
        ? projectsData
        : projectsData.filter((project) => project.categories.includes(activeCategory))

    setFilteredProjects(filtered)
  }, [activeCategory])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-600 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest work and personal projects. Each project represents my passion for creating intuitive and
            impactful digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Featured Projects</h3>
              <div className="h-px flex-grow bg-gray-300 ml-4"></div>
            </div>
            <div className="flex flex-col gap-16">
              {featuredProjects.map((project) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-700 text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                          View Live
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                          className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors">
                          View Code
                        </a>
                      )}
                      {project.links.devpost && (
                        <a href={project.links.devpost} target="_blank" rel="noopener noreferrer"
                          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                          View on Devpost
                        </a>
                      )}
                      {project.links.paper && (
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer"
                          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                          Read Paper
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Filters */}
        <ProjectFilter
          categories={allCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectItem project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects
