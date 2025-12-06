"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const ParticleBackground = dynamic(() => import("../canvas/ParticleBackground"), { ssr: false });

const roles = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "Full Stack Developer (MERN)",
  "Problem Solver",
];

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <ParticleBackground />

      <div className="container mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 animate-pulse-slow"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Available for Work
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold font-heading leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-gradient">Abu Bakkar</span>
          </h1>
          
          <div className="h-12 md:h-16 overflow-hidden mb-8">
            <motion.div
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-gray-300 font-medium"
            >
              I build <span className="text-primary">{roles[roleIndex]}</span>
            </motion.div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Crafting immersive web experiences with modern technologies. 
            Focused on performance, accessibility, and design excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-background rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              <HiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
              Resume
            </motion.a>
          </div>

          <div className="mt-12 flex gap-6 justify-center lg:justify-start">
              {[
                 { icon: <FaGithub />, href: "https://github.com/abubakkar-js-dev" },
                 { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/" },
                 { icon: <FaTwitter />, href: "https://x.com/bakkar_md44657" },
                 { icon: <FaFacebook />, href: "https://www.facebook.com/fabsc2021/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#64ffda" }}
                  className="text-2xl text-gray-400 transition-colors cursor-pointer"
                >
                  {social.icon}
                </motion.a>
              ))}
          </div>
        </motion.div>

        {/* Right Content - 3D/Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Animated Blob/Shape Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-[80px] animate-pulse-slow"></div>
            
            <div className="relative w-full h-full glass-card p-4 rotate-3 hover:rotate-0 transition-all duration-700">
               <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                    src="/images/banner.jpg"
                    alt="Abu Bakkar Siddik"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                />
               </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-20 glass p-3 rounded-xl hidden md:block"
            >
                <img src="/images/react.png" alt="React" className="w-10 h-10 rounded-full" onError={(e) => e.target.style.display = 'none'} />
            </motion.div>
            
            <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-20 glass p-3 rounded-xl hidden md:block"
            >
                <img src="/images/next.svg" alt="Next.js" className="w-10 h-10 rounded-full bg-white" onError={(e) => e.target.style.display = 'none'} />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
