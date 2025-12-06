"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/70 backdrop-blur-md shadow-xl py-3 border-b border-white/5" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 relative z-50">
        {/* Logo */}
        <Link href="/" className="group">
          <h2 className="text-2xl font-bold font-heading">
            Bakka<span className="text-primary group-hover:text-accent transition-colors">R</span>
          </h2>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.href.substring(2)
                    ? "text-primary"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.href.substring(2) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            </li>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            Resume
          </motion.a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white hover:text-primary transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 glass z-40 flex flex-col justify-center items-center"
          >
            <motion.ul 
              className="flex flex-col items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navLinks.map((item) => (
                <motion.li 
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-medium text-gray-300 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
              >
                <a
                  href="https://drive.google.com/file/d/1NLzhiTPr11s6kqcTqQy4inAT-0C_NCTG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold shadow-lg shadow-primary/20 block text-center"
                >
                  Resume
                </a>
              </motion.li>
            </motion.ul>
            

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;