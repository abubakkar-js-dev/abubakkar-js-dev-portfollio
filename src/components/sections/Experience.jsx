"use client";
import { educationData, experienceData } from "@/app/data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const TimelineItem = ({ item, isLeft, icon }) => {
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}>
      <div className="hidden md:block w-5/12"></div>
      
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-4 ring-secondary">
           {icon}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-5/12 glass-card p-6 relative"
      >
        <span className="absolute top-6 text-primary text-sm font-bold right-full mr-4 md:mr-0 md:left-full md:ml-4 whitespace-nowrap hidden md:block">
           {item.period}
        </span>
         {/* Mobile Date */}
        <span className="text-primary text-xs font-bold mb-2 block md:hidden">
           {item.period}
        </span>

        <h3 className="text-xl font-bold text-white mb-1">{item.role || item.degree}</h3>
        <h4 className="text-gray-400 text-sm mb-4 font-semibold">{item.company || item.institution}</h4>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        {item.skills && (
            <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                    <span key={skill} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5">
                        {skill}
                    </span>
                ))}
            </div>
        )}
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Experience & Education" subtitle="My professional journey and academic background." />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/10 top-0"></div>

          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <FaBriefcase className="text-primary" /> Professional Experience
            </h3>
            {experienceData.map((item, index) => (
               <TimelineItem key={item.id} item={item} isLeft={index % 2 === 0} icon={<FaBriefcase className="text-secondary text-xs" />} />
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <FaGraduationCap className="text-primary" /> Education
            </h3>
            {educationData.map((item, index) => (
                <TimelineItem key={item.id} item={item} isLeft={experienceData.length % 2 === 0 ? index % 2 === 0 : index % 2 !== 0} icon={<FaGraduationCap className="text-secondary text-xs" />} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
