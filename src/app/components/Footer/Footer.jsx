import React from "react";

const Footer = () => {
    return (
      <footer className="border-t border-darkGray text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left - Name & Navigation */}
          <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-medium bg-gradient-to-l from-orange-400 via-green-300 to-white bg-clip-text text-transparent">
          Bakka R
        </h2>
            <p className="text-sm text-gray-400">Front-End Developer</p>
          </div>
  
          {/* Middle - Quick Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
  
          {/* Right - Social Icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
  
        {/* Bottom - Copyright */}
        <div className="text-center text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Abu Bakkar Siddik. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  