"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Keyboard navigation: Escape to close mobile menu
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent py-2"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group relative focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Home - Abu Bakkar Portfolio"
          >
            <h2 className="text-2xl font-bold relative z-10">
              Bakka
              <span className="text-teal-400 group-hover:text-cyan-400 transition-colors">
                R
              </span>
            </h2>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 items-center">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative text-sm font-medium transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1 ${
                        isActive ? "text-teal-400" : "text-gray-300 hover:text-white"
                      }`}
                      aria-label={`Navigate to ${item.name} section`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 items-center border-l border-slate-700 pl-6">
              <motion.a
                href="https://github.com/abubakkar-js-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>

            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-full font-semibold text-sm overflow-hidden group focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Download Resume (opens in new tab)"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiDownload className="group-hover:animate-bounce" />
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white hover:text-teal-400 transition-colors relative z-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-2"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-slate-900 border-l border-slate-800 z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* Mobile Nav Links */}
                <motion.ul
                  className="space-y-6 mb-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {navLinks.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.li
                        key={item.name}
                        variants={{
                          hidden: { x: 50, opacity: 0 },
                          visible: { x: 0, opacity: 1 },
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`text-2xl font-semibold block py-2 transition-colors ${
                            isActive
                              ? "text-teal-400"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* Mobile Resume Button */}
                <motion.a
                  href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 rounded-xl font-bold text-center shadow-lg shadow-teal-400/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FiDownload />
                    Download Resume
                  </span>
                </motion.a>

                {/* Mobile Social Links */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-8 border-t border-slate-800"
                >
                  <p className="text-gray-500 text-sm mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/abubakkar-js-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-all"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;