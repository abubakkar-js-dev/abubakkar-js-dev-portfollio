"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer crafting seamless digital experiences."
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
          {/* Left Side - Image */}
          <motion.div
            className="w-full lg:w-5/12 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="About Me"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary border border-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md">
                <p className="text-4xl font-bold text-primary">2+</p>
                <p className="text-sm text-gray-400 mt-1">Years of<br/>Experience</p>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Turning ideas into <span className="text-gradient">functional, scalable web solutions</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hey there! 👋 I’m <span className="text-white font-semibold">Abu Bakkar Siddik</span>, 
                a motivated <strong>Frontend Developer</strong> specializing in <strong>React.js, Next.js, and TypeScript</strong>. 
                I have a knack for building responsive, accessible, and high-performance applications.
              </p>
              
              <p>
                Beyond the frontend, I possess strong backend integration skills with <strong>Node.js, Express.js, MongoDB, and Supabase</strong>. 
                I don't just build interfaces; I build full-stack solutions that connect users to data securely and efficiently. 
                I am eager to contribute to innovative teams creating user-centric web solutions.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                 <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-white mb-2">Frontend Specialist</h4>
                    <p className="text-sm text-gray-400">React, Next.js, TypeScript, Tailwind, shadcn/ui</p>
                 </div>
                 <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-white mb-2">Backend Capable</h4>
                    <p className="text-sm text-gray-400">Node.js, Express, MongoDB, Supabase</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
