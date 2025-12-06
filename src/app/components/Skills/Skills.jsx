"use client";
import { motion } from "framer-motion";
import { FaFigma, FaGitAlt, FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import SectionTitle from "../shared/SectionTitle";

const skills = {
  Frontend: [
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-darkBlue">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Skills" subtitle="Crafting seamless digital experiences with modern technologies." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              className="bg-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">
                {category}
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillList.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
