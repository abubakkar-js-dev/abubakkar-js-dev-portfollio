"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaCode, FaCoffee, FaLaptopCode, FaRocket } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const SkillSphere = dynamic(() => import("../canvas/SkillSphere"), { ssr: false });

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer crafting seamless digital experiences."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-2 glass-card p-8 flex flex-col justify-center"
          >
             <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-full bg-primary/10 text-primary"><FaLaptopCode size={24} /></span>
                <h3 className="text-2xl font-bold">Who I Am</h3>
             </div>
             <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I'm <span className="text-primary font-semibold">Abu Bakkar Siddik</span>, a frontend-focused full-stack developer. 
                I specialize in building accessible, pixel-perfect, and performant web applications using the modern React ecosystem.
             </p>
             <p className="text-gray-400 leading-relaxed">
                My journey involves not just writing code, but solving real-world problems. Whether it's optimizing a Next.js app 
                or architecting a scalable backend with Node.js, I bring a detail-oriented approach to every project.
             </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-transparent"
          >
             <h4 className="text-5xl font-bold text-white mb-2">2+</h4>
             <p className="text-gray-400 uppercase tracking-widest text-sm">Years Exp.</p>
          </motion.div>

          {/* Skill Sphere - 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 row-span-2 glass-card relative overflow-hidden flex items-center justify-center min-h-[300px]"
          >
             <div className="absolute inset-0 bg-secondary/50 -z-10"></div>
             <SkillSphere />
             <p className="absolute bottom-4 text-xs text-gray-500 tracking-wider">INTERACTIVE 3D</p>
          </motion.div>

             {/* Philosophy / Fun Fact */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 flex flex-col justify-center gap-4 group hover:bg-white/5 transition-colors"
          >
             <div className="flex items-center gap-3 text-accent">
                <FaCode size={20} />
                <span className="font-semibold uppercase tracking-wider text-sm">Code Philosophy</span>
             </div>
             <p className="text-xl font-medium text-white italic">
               "Clean code matches business needs with elegant technical solutions."
             </p>
          </motion.div>

           {/* Interests */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 flex flex-col justify-between"
          >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><FaCoffee className="text-orange-400" /> Interests</h4>
              <div className="flex flex-wrap gap-2">
                 {["UI Design", "Performance", "Open Source", "Gaming"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/5">{tag}</span>
                 ))}
              </div>
          </motion.div>

           {/* Current Goal */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="md:col-span-2 glass-card p-6 flex justify-between items-center bg-gradient-to-r from-secondary to-primary/5"
           >
              <div>
                  <h4 className="text-lg font-bold flex items-center gap-2 mb-1"><FaRocket className="text-red-400" /> Current Focus</h4>
                  <p className="text-gray-400 text-sm">Learning WebGL & Advanced Animations</p>
              </div>
              <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full w-3/4 bg-primary animate-pulse"></div>
              </div>
           </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
