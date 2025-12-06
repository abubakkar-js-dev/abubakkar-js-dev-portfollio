"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFigma, FaGitAlt, FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiPostman, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 95, color: "#5fbfdaff" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 90, color: "#ffffff" },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85, color: "#4981bdff" },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: 95, color: "#e4d45fff" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 90, color: "#58ada9ff" },
    { name: "DaisyUI", icon: <SiDaisyui className="text-[#5A0EF8]" />, level: 80, color: "#723aebff" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 85, color: "#579c57ff" },
    { name: "Express.js", icon: <SiExpress className="text-white" />, level: 85, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80, color: "#589659ff" },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" />, level: 75, color: "#68c79cff" },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, level: 80, color: "#c4a753ff" },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 90, color: "#d36450ff" },
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: 90, color: "#ffffff" },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, level: 85, color: "#d47552ff" },
    { name: "Vercel", icon: <SiVercel className="text-white" />, level: 85, color: "#ffffff" },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" />, level: 70, color: "#db633eff" },
  ],
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolset for building modern digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Card */}
              <div className="h-full bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-400/10 relative overflow-hidden">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-500/0 group-hover:from-teal-400/5 group-hover:to-cyan-500/5 transition-all duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        onMouseEnter={() => setHoveredSkill(`${category}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Item */}
                        <div className="group/item">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <motion.div 
                                className="text-2xl"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {skill.icon}
                              </motion.div>
                              <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full relative"
                              style={{ 
                                backgroundColor: skill.color,
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + index * 0.05,
                                ease: "easeOut" 
                              }}
                            >
                              {/* Glow effect */}
                              {hoveredSkill === `${category}-${skill.name}` && (
                                <motion.div
                                  className="absolute inset-0 rounded-full"
                                  style={{ 
                                    backgroundColor: skill.color,
                                    boxShadow: `0 0 10px ${skill.color}`
                                  }}
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                              )}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { label: "Technologies", value: "15+", icon: "🚀" },
            { label: "Years Experience", value: "2+", icon: "📅" },
            { label: "Projects Completed", value: "20+", icon: "✅" },
            { label: "Happy Clients", value: "10+", icon: "😊" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-teal-400/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">
            Always learning and exploring new technologies to stay ahead.
          </p>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-bold hover:shadow-lg hover:shadow-teal-400/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See What I've Built
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;