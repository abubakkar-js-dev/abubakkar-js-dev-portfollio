"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import { projectsData } from "@/app/data/projects";

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
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <SectionTitle title="Portfolio" subtitle="Explore the projects I've worked on and my journey as a developer." />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence>
            {filteredProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
            ))}
            </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
             <p className="text-center text-gray-400 mt-10">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
