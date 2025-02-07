"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/projectCard";
import SectionTitle from "../shared/SectionTitle";

const Projects = () => {
    const [projects,setProjects] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      const fetchProjects = async()=>{
        setLoading(true);
        const res = await fetch('https://abu-bakkar-js-dev-server.vercel.app/projects');
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      }

      fetchProjects();
    },[])


    console.log(projects);

  return (
    <section id="projects" className="container mx-auto py-16 px-6">
      <div className="mx-auto text-center">
      <SectionTitle title="Portfolio" subtitle="Explore the projects I've worked on and my journey as a developer." />
      <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
