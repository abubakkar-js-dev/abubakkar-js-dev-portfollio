"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/projectCard";
import SectionTitle from "../shared/SectionTitle";

const Projects = () => {

    const projects = [
        {
          id: 1,
          name: "Eco-Adventure Blog",
          image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
          description: "A travel blogging platform showcasing eco-friendly adventures.",
          liveLink: "https://eco-adventure.com",
        },
        {
          id: 2,
          name: "Gadget E-Commerce",
          image: "https://cdn.dribbble.com/users/2137508/screenshots/15469398/media/1155364147969d6d1d61c79d66106e38.jpg",
          description: "A modern e-commerce platform for the latest gadgets and accessories.",
          liveLink: "https://gadget-store.com",
        },
        {
          id: 3,
          name: "Pet Adoption Hub",
          image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
          description: "A pet adoption website connecting people with rescue animals.",
          liveLink: "https://pet-adoption.com",
        },
      ];



      
      
      
  
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
