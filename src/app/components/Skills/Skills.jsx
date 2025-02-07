"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGit, FaFigma, FaJs, FaDatabase } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

// Define skill categories and corresponding icons
const skills = {
  Frontend: [
    { name: "React.js", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-500" /> },
    { name: "Tailwind", icon: <img className="h-6 rounded-sm object-cover" src="/images/tailwind.png" alt="tailwind logo" /> },
    { name: "Next.js", icon: <img className="h-8 rounded-sm object-cover bg-white" src="/images/next.svg" alt="Next js logo" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: "Express.js", icon: <img className="h-6 rounded-sm object-cover" src="/images/express.png" alt="Express js logo" /> },
    { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-600" /> },
    { name: "Firebase", icon: <img className="h-6 rounded-sm object-cover" src="/images/firebase.png" alt="firebase logo" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGit size={40} className="text-orange-500" /> },
    { name: "Github", icon: <img className="h-6 rounded-sm object-cover" src="/images/github.jpg" alt="github logo" /> },
    { name: "Figma", icon: <img className="h-6 rounded-sm object-cover" src="/images/figma.png" alt="figma logo" />},
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 md:px-12 mb-16 md:mb-20 lg:mb-[120px]">
      {/* Section Title */}
      <SectionTitle title="My Skills" subtitle="Crafting seamless digital experiences with modern technologies." />

      {/* Skills Categories */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={index}
            className="bg-slate-900/20 p-6 rounded-lg shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-orange-400 mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skillList.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center bg-gray-800/80 text-white py-4 px-5 rounded-lg text-center font-semibold shadow-md border border-gray-700 transition-all hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="mb-3">{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
