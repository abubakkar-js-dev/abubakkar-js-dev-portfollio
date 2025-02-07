import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <figure>
        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold">{project.name}</h2>
        <p className="text-gray-500">{project.description}</p>
        <div className="card-actions justify-end">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-2"
          >
            View More <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
