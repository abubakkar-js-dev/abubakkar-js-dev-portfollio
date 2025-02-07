"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 md:px-12 mb-16 md:mb-20 lg:mb-[120px]">
      {/* Section Title */}
      <SectionTitle
        title="About Me"
        subtitle="Passionate developer crafting seamless digital experiences."
      />

      {/* About Content */}
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-10 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Side - Text Content */}
        <div className="flex-1 text-gray-300 text-lg leading-relaxed">
          <p>
            Hey there! 👋 I’m{" "}
            <span className="text-green-400 font-semibold">
              Abu Bakkar Siddik
            </span>
            , a passionate <strong>Front-End Developer</strong> and an{" "}
            <strong>Aspiring Full-Stack Engineer</strong> dedicated to crafting
            high-performance, user-centric web applications. My journey into web
            development began with curiosity and has evolved into a deep passion
            for building seamless digital experiences.
          </p>

          <p className="mt-4">
            I specialize in modern web technologies like{" "}
            <strong>React.js, Next.js, and the MERN stack</strong>, focusing on{" "}
            <strong>scalability, performance, and intuitive UI/UX</strong>. I
            thrive on solving complex problems, optimizing workflows, and
            continuously expanding my knowledge to stay ahead in this
            ever-evolving tech landscape.
          </p>

          <p className="mt-4">
            Beyond coding, I enjoy <strong>designing in Figma</strong>,{" "}
            <strong>exploring AI innovations</strong>, and{" "}
            <strong>analyzing market trends in trading</strong>. I believe in{" "}
            <strong>continuous learning, creativity, and innovation</strong>
            —building solutions that not only function well but also leave a
            lasting impact. 🚀
          </p>
        </div>

        {/* Right Side - Optional Image or Animation */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="/images/about.jpg"
            alt="About Me"
            className="w-80 h-80 object-cover rounded-lg shadow-lg border-2 border-orange-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
