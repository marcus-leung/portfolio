import { motion } from "framer-motion"

const ProjectFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category ? "text-white" : "text-gray-700 hover:text-indigo-600"
          }`}
        >
          {activeCategory === category && (
            <motion.span
              layoutId="activeCategory"
              className="absolute inset-0 bg-indigo-600 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="relative z-10">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter
