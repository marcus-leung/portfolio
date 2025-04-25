import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectItem from "./ProjectItem"
import ProjectFilter from "./ProjectFilter"
import projectsData from "../data/projects"

const Projects = () => {

  const allCategories = ["all", ...new Set(projectsData.flatMap((project) => project.categories))]

  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState([])
  const [featuredProject, setFeaturedProject] = useState(null)

  useEffect(() => {
    // Filter projects based on active category
    const filtered =
      activeCategory === "all"
        ? projectsData
        : projectsData.filter((project) => project.categories.includes(activeCategory))

    setFilteredProjects(filtered)

    // Set featured project
    const featured = projectsData.find((project) => project.featured)
    setFeaturedProject(featured)
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

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Featured Project</h3>
              <div className="h-px flex-grow bg-gray-300 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={featuredProject.img || "/placeholder.svg"}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{featuredProject.title}</h3>
                <p className="text-gray-700 text-lg">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900 dark:text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {featuredProject.links.live && (
                    <a
                      href={featuredProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      View Live
                    </a>
                  )}
                  {featuredProject.links.github && (
                    <a
                      href={featuredProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      View Code
                    </a>
                  )}
                  {featuredProject.links.devpost && (
                    <a
                      href={featuredProject.links.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View on Devpost
                    </a>
                  )}
                  {featuredProject.links.paper && (
                    <a
                      href={featuredProject.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Read Paper
                    </a>
                  )}
                </div>
              </div>
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
