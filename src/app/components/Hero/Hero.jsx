"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const roles = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "Full Stack Developer (MERN)",
  "Problem Solver",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Available for Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-4">
            Hello, I'm <br />
            <span className="text-gradient">Abu Bakkar Siddik</span>
          </h1>
          
          <div className="h-8 md:h-10 overflow-hidden mb-6">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 font-medium"
            >
              {roles[index]}
            </motion.div>
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Motivated Frontend Developer specializing in React.js, Next.js, and TypeScript. 
            I build responsive, high-performance applications with backend integration expertise 
            in Node.js and Supabase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </motion.a>
            
            <div className="flex gap-4 ml-0 sm:ml-4">
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
                  whileHover={{ y: -5, color: "var(--primary)" }}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-primary transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-[20px] opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/images/profile.jpg"
                alt="Abu Bakkar Siddik"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
