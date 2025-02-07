"use client";
import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarker, FaGithub, FaLinkedin } from "react-icons/fa";

import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 py-16">
      {/* Section Title */}
      <SectionTitle
        title="Contact Me"
        subtitle="Get in touch with me for collaborations or inquiries."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */} 
        <motion.div
          className="bg-slate-900/10 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-700 w-full mx-auto" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }} 
        >
          <h3 className="text-xl font-semibold text-orange-300 mb-4">
            Contact With Me
          </h3>{" "}
          <div className="space-y-6 text-gray-300">
            {" "}
            <div className="flex items-center gap-4">
              <FaMapMarker size={20} className="text-red-400" />{" "}
              <span>Rajshahi, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope size={20} className="text-blue-400" />
              <a
                href="mailto:mdabubakkars182@gmail.com"
                className="hover:text-blue-300"
              >
                {" "}
                mdabubakkars182@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone size={20} className="text-green-400" />
              <a href="tel:+8801304589108" className="hover:text-green-300">
                {" "}
                +880 1304 589108
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp size={20} className="text-green-500" />
              <a
                href="https://wa.me/8801961849643"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                {" "}
                +880 1961 849643
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub size={20} className="text-gray-400" />
              <a
                href="https://github.com/abubakkar-js-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                {" "}
                github.com/abubakkar-js-dev{" "}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin size={20} className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {" "}
                linkedin.com/in/md-abu-bakkar-siddik-024a72269{" "}
              </a>
            </div>
          </div>
        </motion.div>
        {/* Right: Contact Form */}
        <motion.div
          className="bg-gray-800/20 p-6 rounded-lg shadow-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-orange-300 mb-4">
            Send Me a Message
          </h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-900/30 text-white border border-gray-700 focus:ring-2 focus:ring-orange-300 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-900/30 text-white border border-gray-700 focus:ring-2 focus:ring-orange-300 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-900/30 text-white border border-gray-700 focus:ring-2 focus:ring-orange-300 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
