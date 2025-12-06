import Navbar from '@/components/layout/Navbar';
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaGlobe, FaLayerGroup, FaLightbulb, FaRocket, FaTools } from 'react-icons/fa';

import { projectsData } from '@/app/data/projects';

export async function getProject(id) {
    // Check local data first
    const localProject = projectsData.find(p => p._id === id);
    if (localProject) return localProject;

    try {
        const res = await fetch(`https://abu-bakkar-js-dev-server.vercel.app/projects/${id}`, { cache: 'no-store' });
        if (!res.ok) return null;
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = await getProject(id);
    return {
        title: `${project.name} || Project Details`,
        description: project.description.substring(0, 160),
    };
}

const ProjectDetailsPage = async ({ params }) => {
    // Awaiting params for Next.js 15+
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const project = await getProject(id);

    return (
        <div className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />
            
            <main className="container mx-auto px-6 pt-24 pb-20">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors hover:-translate-x-1 duration-300">
                        <FaArrowLeft /> Back to Projects
                    </Link>
                </div>

                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                             <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                                Full Stack Project
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                {project.name}
                            </h1>
                        </div>
                        
                        <div className="flex gap-4">
                            {project.liveLink && (
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-medium shadow-lg shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2"
                                >
                                    <FaGlobe /> Live Demo
                                </a>
                            )}
                            {project.githubLink && (
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium border border-white/10 transition-all hover:scale-105 flex items-center gap-2"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Showcase Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-16 group"
                >
                    <Image 
                        src={project.imageUrl} 
                        alt={project.name} 
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </motion.div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Description & Challenges */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FaLayerGroup className="text-primary" /> Project Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Challenges Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-orange-400">
                                <FaLightbulb /> Challenges & Solutions
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {project.challenges || "No specific challenges documented for this project, but the development process involved ensuring responsive design and performance optimization."}
                            </p>
                        </motion.div>
                         
                         {/* Future Plans Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-400">
                                <FaRocket /> Future Roadmap
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {project.futurePlans || "Future updates may include additional features, performance improvements, and UI enhancements based on user feedback."}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Tech Stack & Info */}
                    <div className="space-y-8">
                        {/* Technologies Card */}
                        <motion.div 
                             initial={{ opacity: 0, x: 20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             className="bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 sticky top-28"
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FaTools className="text-accent" /> Technologies
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies?.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-gray-300 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetailsPage;