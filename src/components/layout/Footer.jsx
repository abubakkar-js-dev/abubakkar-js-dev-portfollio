"use client";
import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-heading mb-2">Bakka<span className="text-primary">R</span></h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences that matter with modern technologies.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, href: "https://github.com/yourusername" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername" },
              { icon: <FaTwitter />, href: "https://twitter.com/yourusername" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "var(--primary)" }}
                className="text-2xl text-gray-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Abu Bakkar Siddik. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 mt-4 md:mt-0 hover:text-primary transition-colors group"
          >
            <span>Back to Top</span>
            <span className="p-2 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                <FaArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;