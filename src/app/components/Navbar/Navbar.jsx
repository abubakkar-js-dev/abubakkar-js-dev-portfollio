"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");
  console.log(activeSection);

  useEffect(() => {
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

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="md:shadow fixed w-full z-50 bg-darkGray/5 md:backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h2 className="text-3xl font-medium bg-gradient-to-l from-orange-400 via-green-300 to-white bg-clip-text text-transparent">
          Bakka R
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className={`text-white px-3 py-2 hover:text-secondary transition-all duration-300 ${activeSection === item.toLowerCase() && 'bg-gray-800 rounded-full'}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white transition-all duration-300"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-darkGray/5 backdrop-blur-sm absolute top-16 left-0 w-full shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-lg">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="text-white hover:text-secondary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;