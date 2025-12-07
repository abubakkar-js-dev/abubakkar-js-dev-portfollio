"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const roles = [
  "Modern Frontend Experiences",
  "React & Next.js Applications",
  "Full-Stack MERN Solutions",
  "Scalable Digital Products",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 z-10">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Available Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-sm font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            Available for Work
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Abu Bakkar
            </span>
          </motion.h1>
          
          {/* Animated Role Text */}
          <motion.div 
            className="h-16 md:h-20 mb-8 flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-medium"
              >
                I build <span className="text-teal-400 font-semibold">{roles[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting immersive web experiences with modern technologies. 
            Focused on <span className="text-teal-400 font-semibold">performance</span>, 
            <span className="text-teal-400 font-semibold"> accessibility</span>, and 
            <span className="text-teal-400 font-semibold"> design excellence</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12 space-y-2 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-bold shadow-lg shadow-teal-400/30 hover:shadow-teal-400/50 transition-all flex items-center gap-2"
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: "rgba(20, 184, 166, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-full text-white font-semibold hover:bg-slate-800/70 transition-all flex items-center gap-2"
            >
              <HiDownload className="text-xl group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center lg:justify-start pt-12 lg:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: <FaGithub />, href: "https://github.com/abubakkar-js-dev", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/", label: "LinkedIn" },
              { icon: <FaTwitter />, href: "https://x.com/bakkar_md44657", label: "Twitter" },
              { icon: <FaFacebook />, href: "https://www.facebook.com/fabsc2021/", label: "Facebook" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-2xl text-gray-400 hover:text-teal-400 transition-colors p-3 rounded-full hover:bg-teal-400/10"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Image with 3D Effect */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative max-w-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
            
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-teal-400/30 via-cyan-400/20 to-blue-500/30 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Main image card */}
            <motion.div 
              className="relative w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 shadow-2xl"
              whileHover={{ rotate: 0, scale: 1.02 }}
              style={{ rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                <img
                  src="/images/banner.jpg"
                  alt="Abu Bakkar Siddik"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Abu+Bakkar&size=500&background=14b8a6&color=fff&bold=true";
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-16 bg-slate-800/90 backdrop-blur-md border border-cyan-500/30 p-3 rounded-xl shadow-xl shadow-cyan-500/20 hidden lg:block"
            >
              <div className="w-12 h-12 rounded-lg bg-[#20232A] flex items-center justify-center text-[#00DAFC]">
                <FaReact className="text-2xl" />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center font-medium">React</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-16 bg-slate-800/90 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl shadow-white/10 hidden lg:block"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white">
                <SiNextdotjs className="text-2xl" />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center font-medium">Next.js</p>
            </motion.div>

            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-md border border-blue-500/30 p-3 rounded-xl shadow-xl shadow-blue-500/20 hidden lg:block"
            >
              <div className="w-12 h-12 rounded-lg bg-[#2D79C7] flex items-center justify-center text-white">
                <SiTypescript className="text-2xl" />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center font-medium">TypeScript</p>
            </motion.div>

          </div>
        </motion.div>



      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8  transform -translate-x-1/2 pb-8 lg:pb-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-teal-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
};

export default Hero;