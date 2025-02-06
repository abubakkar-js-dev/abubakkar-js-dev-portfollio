"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

const roles = [
  "Front End Developer",
  "Aspiring Full Stack Engineer",
  "React Enthusiast",
  "MERN Stack Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container pt-[220px] mb-16 md:mb-20 lg:mb-[120px] lg:pt-0 mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-12 hero-section">
      {/* Left Content */}
      <motion.div
        className="text-center md:text-left lg:w-2/3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          I am <span className="text-green-400">Abu Bakkar Siddik</span>
        </h1>
        <motion.h2
          key={index}
          className="text-2xl font-semibold text-gray-300"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          {roles[index]}
        </motion.h2>

        <p className="mt-4 text-gray-300 text-lg">
          Passionate about building interactive and modern web applications.
          Constantly learning and growing in the world of development.
        </p>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-2 text-lg font-medium text-white bg-gradient-to-tr from-green-400 to-orange-400 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-br"
          whileHover={{ scale: 1.05 }}
        >
          <p className="flex gap-2 items-center">
            <span>
              <GrDocumentDownload />
            </span>
            <span>Download Resume</span>
          </p>
        </motion.a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start mt-6 gap-4">
          <a
            href="https://github.com/abubakkar-js-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-orange-300 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-orange-300 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/bakkar_md44657"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-orange-300 transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/fabsc2021/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-orange-300 transition-transform duration-300 hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div
        className="relative w-40 h-40 md:w-64 md:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <Image
          src="/profile.jpg"
          alt="Abu Bakkar Siddik"
          fill
          className="object-cover "
        />
      </motion.div>

    </section>
  );
};

export default Hero;
