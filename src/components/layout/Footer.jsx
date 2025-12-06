"use client";
import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/abubakkar-js-dev", label: "GitHub", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, href: "https://x.com/bakkar_md44657", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/fabsc2021/", label: "Facebook", color: "hover:text-blue-500" },
  ];

  const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Node.js"];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 pt-20 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Bakka<span className="text-teal-400">R</span>
              </h2>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Frontend-focused full-stack developer passionate about building modern, 
                accessible, and performant web applications that solve real-world problems.
              </p>
              
              {/* Email */}
              <a
                href="mailto:mdabubakkars182@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">mdabubakkars182@gmail.com</span>
              </a>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs px-3 py-1.5 bg-slate-800/50 rounded-lg text-gray-400 border border-slate-700 hover:border-teal-400/50 hover:text-teal-400 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-teal-400 group-hover:w-4 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 ${social.color} hover:border-teal-400/50 transition-all`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-teal-400/30 transition-all"
            >
              Get in Touch
              <FaArrowUp className="rotate-45" size={12} />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500"
          >
            <span>© {new Date().getFullYear()} Abu Bakkar Siddik.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted with <FaHeart className="text-red-500 text-xs animate-pulse" /> and lots of ☕
            </span>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400 transition-colors group"
          >
            <span>Back to Top</span>
            <span className="p-2 bg-slate-800/50 border border-slate-700 rounded-lg group-hover:border-teal-400/50 group-hover:bg-slate-800 transition-all group-hover:-translate-y-1">
              <FaArrowUp size={12} />
            </span>
          </motion.button>
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <span className="hidden md:inline">•</span>
            <span>Built with Next.js, Tailwind CSS & Three.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;