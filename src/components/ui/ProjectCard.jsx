"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group glass-card overflow-hidden card-hover flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-52 w-full">
        <Image 
            src={project.imageUrl || "/images/placeholder.jpg"} 
            alt={project.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
           <Link
            href={`/project-details/${project._id}`}
            className="px-6 py-2 bg-primary text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
           >
             View Details <FaArrowRight size={12} />
           </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.name}</h2>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
            {project.description}
        </p>

        {/* Tags (if any, simplifying for now as standard API might not have them perfect) */}
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies?.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5">
                    {tech}
                </span>
            ))}
            {project.technologies?.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5">+{project.technologies.length - 3}</span>
            )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
          <Link
            href={`/project-details/${project._id}`}
            className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-2"
          >
            Read More <FaArrowRight size={12} />
          </Link>
          <button className="text-gray-400 hover:text-white transition-colors" title="External Link">
             <FaExternalLinkAlt size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
