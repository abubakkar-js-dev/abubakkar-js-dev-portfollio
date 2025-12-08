"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter();

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-400/10 flex flex-col h-full"
    >
      {/* Image/Video Container */}
      <div className="relative overflow-hidden h-64 w-full bg-slate-950">
        {/* Video Layer */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        
        {/* Image Layer */}
        <img
          src={project.imageUrl || "/images/placeholder.jpg"}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400/0f172a/64ffda?text=Project+Image";
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        {/* Hover Overlay with Actions */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center items-center gap-4">
            <motion.button
              onClick={() => router.push(`/project-details/${project._id}`)}
              className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-teal-400/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
            >
              View Details <FaArrowRight size={14} />
            </motion.button>
            
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/80 backdrop-blur-sm text-white rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.15 }}
                title="Live Demo"
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
            
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/80 backdrop-blur-sm text-white rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.2 }}
                title="Source Code"
              >
                <FaGithub size={16} />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Video Indicator */}
        {project.videoUrl && !isHovered && (
          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-semibold z-30">
            <FaPlay size={10} />
            Hover to play
          </div>
        )}

        {/* Category Badge */}
        {project.category && (
          <div className="absolute top-4 left-4 bg-teal-400/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase z-30">
            {project.category[0]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors line-clamp-1">
          {project.name}
        </h2>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.slice(0, 4).map((tech, idx) => (
            <motion.span
              key={idx}
              className="text-xs px-3 py-1.5 bg-slate-800/50 rounded-lg text-gray-300 border border-slate-700 hover:border-teal-400/50 hover:text-teal-400 transition-all cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies?.length > 4 && (
            <span className="text-xs px-3 py-1.5 bg-slate-800/50 rounded-lg text-gray-400 border border-slate-700">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800 mt-auto">
          <Link
            href={`/project-details/${project._id}`}
            className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-2 group/link"
          >
            Learn More 
            <FaArrowRight 
              size={12} 
              className="group-hover/link:translate-x-1 transition-transform" 
            />
          </Link>
          
          <div className="flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                title="View Code"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-teal-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;