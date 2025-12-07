"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHome, FaArrowLeft, FaSearch, FaRocket } from "react-icons/fa";

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glitchVariants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, 5, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-teal-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated 404 */}
          <motion.div
            className="relative mb-8"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {/* Main 404 */}
            <motion.h1
              className="text-[180px] md:text-[280px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
              variants={glitchVariants}
              initial="initial"
              animate="animate"
            >
              404
            </motion.h1>

            {/* Glitch Layers */}
            <motion.h1
              className="absolute inset-0 text-[180px] md:text-[280px] font-black leading-none text-red-500 opacity-20 mix-blend-multiply"
              animate={{
                x: [-2, 2, -2],
                y: [2, -2, 2],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              404
            </motion.h1>
            <motion.h1
              className="absolute inset-0 text-[180px] md:text-[280px] font-black leading-none text-blue-500 opacity-20 mix-blend-multiply"
              animate={{
                x: [2, -2, 2],
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.1,
              }}
            >
              404
            </motion.h1>

            {/* Floating Rocket */}
            <motion.div
              className="absolute -right-20 top-1/2 transform -translate-y-1/2"
              animate={{
                y: [0, -20, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaRocket className="text-6xl text-teal-400 opacity-50" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Page Not <span className="text-teal-400">Found</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-2">
              Oops! Looks like you've ventured into uncharted territory.
            </p>
            <p className="text-gray-500 text-base">
              The page you're looking for seems to have wandered off into the digital void.
            </p>
          </motion.div>

          {/* Animated Search Bar (Decorative) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-md mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-4 flex items-center gap-3">
                <FaSearch className="text-gray-500" />
                <span className="text-gray-500 flex-1 text-left">
                  What are you looking for?
                </span>
                <motion.div
                  className="w-2 h-4 bg-teal-400 rounded-sm"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-bold shadow-lg shadow-teal-400/30 flex items-center justify-center gap-2"
            >
              <FaHome className="group-hover:scale-110 transition-transform" />
              Back to Home
            </motion.a>

            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white rounded-full font-semibold hover:bg-slate-800 hover:border-teal-400/50 transition-all flex items-center justify-center gap-2"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-500 text-sm"
          >
            <p className="mb-4">Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "About", href: "/#about" },
                { name: "Projects", href: "/#projects" },
                { name: "Skills", href: "/#skills" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg text-gray-400 hover:text-teal-400 hover:border-teal-400/50 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 max-w-md"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">💡 <strong className="text-teal-400">Fun Fact:</strong></p>
              <p className="text-gray-500 text-sm">
                The 404 error code was named after room 404 at CERN where the World Wide Web was invented. 
                The room contained the web's first server!
              </p>
            </div>
          </motion.div>

          {/* Animated Code Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-left max-w-md"
          >
            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-gray-500">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">errorCode</span> ={" "}
                  <span className="text-orange-400">404</span>;
                </p>
                <p className="text-gray-500">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">message</span> ={" "}
                  <span className="text-green-400">"Page Not Found"</span>;
                </p>
                <p className="text-gray-500 mt-2">
                  <span className="text-blue-400">console</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-yellow-400">log</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-green-400">`Error ${"{"}errorCode{"}"}: ${"{"}message{"}"}`</span>
                  <span className="text-gray-400">);</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;