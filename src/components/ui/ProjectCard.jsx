"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoUrl) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group glass-card overflow-hidden card-hover flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Image/Video Container */}
      <div className="relative overflow-hidden h-52 w-full bg-secondary">
        {project.videoUrl && (
            <video
                ref={videoRef}
                src={project.videoUrl}
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            />
        )}
        
        <Image 
            src={project.imageUrl || "/images/placeholder.jpg"} 
            alt={project.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80"></div>
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px] z-20">
           <Link
            href={`/project-details/${project._id}`}
            className="px-6 py-3 bg-primary text-secondary rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:scale-105"
           >
             View Details <FaArrowRight size={12} />
           </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.name}</h2>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1 group-hover:text-gray-300 transition-colors">
            {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies?.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5 group-hover:border-primary/20 transition-colors">
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
          <div className="flex gap-3">
             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                 <FaGithub size={16} />
             </a>
             <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Live Site">
                 <FaExternalLinkAlt size={14} />
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
