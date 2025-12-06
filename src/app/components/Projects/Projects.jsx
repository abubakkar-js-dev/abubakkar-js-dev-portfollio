"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/projectCard";
import SectionTitle from "../shared/SectionTitle";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
      const fetchProjects = async () => {
        setLoading(true);
        try {
          const res = await fetch('https://abu-bakkar-js-dev-server.vercel.app/projects');
          const data = await res.json();
          setProjects(data);
          setFilteredProjects(data);
        } catch (error) {
          console.error("Failed to fetch projects:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchProjects();
    }, []);

    const filters = ["All", "React", "Next.js", "MERN", "Frontend"];

    const handleFilter = (filter) => {
      setActiveFilter(filter);
      if (filter === "All") {
        setFilteredProjects(projects);
      } else {
        // Simple filtering logic based on tech stack presence in project description or name
        // Ideally, the API would return a 'tags' or 'category' array. 
        // fallback: filtering by string matching if specific fields aren't there.
        setFilteredProjects(projects.filter(p => 
           JSON.stringify(p).toLowerCase().includes(filter.toLowerCase())
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
        {loading ? (
             <div className="flex justify-center mt-20">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
             </div>
        ) : (
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
            >
                <AnimatePresence>
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project._id} project={project} index={index} />
                ))}
                </AnimatePresence>
            </motion.div>
        )}
        
        {filteredProjects.length === 0 && !loading && (
             <p className="text-center text-gray-400 mt-10">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
