import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import { FaGlobe, FaGithub } from 'react-icons/fa'; // Import icons

export async function getProject(id) {
    const res = await fetch(`https://abu-bakkar-js-dev-server.vercel.app/projects/${id}`);
    const data = await res.json();
    return data;
}

const ProjectDetailsPage = async ({ params }) => {
    const { id } = params;
    const project = await getProject(id);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto pt-20 p-4">
                <div className=" rounded-lg p-8 shadow-md">
                    <h2 className="text-3xl font-bold text-white mb-4">{project.name}</h2>
                    <img src={project.imageUrl} alt={project.name} className="rounded-lg mb-4 w-full object-cover h-[420px]" />

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Description</h3>
                        <p className="text-gray-400">{project.description}</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Technologies</h3>
                        <ul className="list-disc pl-6 text-gray-400">
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Links</h3>
                        <div className="flex space-x-4">
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 flex items-center">
                                    <FaGlobe className="mr-2" /> Live Demo
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 flex items-center"> 
                                    <FaGithub className="mr-2" /> GitHub
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Challenges</h3>
                        <p className="text-gray-400">{project.challenges}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Future Plans</h3>
                        <p className="text-gray-400">{project.futurePlans}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;