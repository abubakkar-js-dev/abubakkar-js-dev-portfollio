"use client";
import { motion } from "framer-motion";
import { FaCode, FaCoffee, FaLaptopCode, FaRocket } from "react-icons/fa";
import SkillSphere from "../canvas/SkillSphere";


const SkillSpherePlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex items-center justify-center w-[380px] h-[380px">
      <div className="flex items-center justify-center ">
        <SkillSphere />
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-teal-400">Me</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Passionate developer crafting seamless digital experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - Bio & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-full bg-teal-400/10 text-teal-400">
                  <FaLaptopCode size={24} />
                </span>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-teal-400">💻</span> Who I Am
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 text-base">
                I'm <span className="text-teal-400 font-semibold">Abu Bakkar Siddik</span>, a frontend-focused full-stack developer. 
                I specialize in building accessible, pixel-perfect, and performant web applications using the modern React ecosystem.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                My journey involves not just writing code, but solving real-world problems. Whether it's optimizing a Next.js app 
                or architecting a scalable backend with Node.js, I bring a detail-oriented approach to every project.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 text-orange-400 mb-4">
                <FaCode size={20} />
                <span className="font-semibold uppercase tracking-wider text-sm">Code Philosophy</span>
              </div>
              <p className="text-lg font-medium text-white italic leading-relaxed">
                "Clean code matches business needs with elegant technical solutions."
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                <FaCoffee className="text-orange-400" /> Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {["UI Design", "Performance", "Open Source", "Gaming"].map(tag => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 rounded-full bg-slate-800/50 text-sm text-gray-300 border border-slate-700 hover:border-teal-400/50 hover:text-teal-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-teal-500/10 to-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold flex items-center gap-2 mb-2 text-white">
                    <FaRocket className="text-red-400" /> Current Focus
                  </h4>
                  <p className="text-gray-400 text-sm">Learning WebGL & Advanced Animations</p>
                </div>
                <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-teal-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Stats & 3D Sphere */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-teal-500/10 to-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 text-center"
            >
              <div className="inline-block">
                <h4 className="text-6xl md:text-7xl font-bold text-white mb-2">2+</h4>
                <p className="text-gray-400 uppercase tracking-widest text-sm">Years Experience</p>
              </div>
            </motion.div>

            {/* 3D Skill Sphere - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ minHeight: '450px' }}
            >
              <div className="w-full h-full">
                <SkillSpherePlaceholder />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;