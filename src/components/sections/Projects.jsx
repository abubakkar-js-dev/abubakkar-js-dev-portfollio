"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { projectsData } from "@/data/projects";
import { FaFilter, FaRocket } from "react-icons/fa";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
    // eslint-disable-next-line no-unused-vars
    const [projects, setProjects] = useState(projectsData);
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "React", "Next.js", "MERN", "Frontend", "Full Stack"];

    const handleFilter = (filter) => {
      setActiveFilter(filter);
      if (filter === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(p => 
           JSON.stringify(p).toLowerCase().includes(filter.toLowerCase()) || 
           (p.category && p.category.includes(filter))
        ));
      }
    };

  return (
  <section id="projects" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400/10 border border-teal-400/30 rounded-full text-teal-400 text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaRocket />
            My Work
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the projects I've worked on and my journey as a developer.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm mr-2">
            <FaFilter size={14} />
            <span>Filter:</span>
          </div>
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 shadow-lg shadow-teal-400/30"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-teal-400/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            Showing{" "}
            <span className="text-teal-400 font-semibold">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Card Component - using placeholder */}
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 rounded-full mb-6">
              <FaFilter size={32} className="text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400 mb-6">
              Try selecting a different filter to see more projects.
            </p>
            <button
              onClick={() => handleFilter("All")}
              className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-bold hover:shadow-lg hover:shadow-teal-400/30 transition-all"
            >
              Show All Projects
            </button>
          </motion.div>
        )}

        {/* View More CTA */}
        {filteredProjects.length > 0 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <motion.a
              href="https://github.com/abubakkar-js-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-full text-white font-semibold hover:bg-slate-800 hover:border-teal-400/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub Profile
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
