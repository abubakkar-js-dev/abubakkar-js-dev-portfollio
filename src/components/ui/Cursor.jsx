"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", mouseMove);
    
    // Add hover listeners to clickable elements
    const clickables = document.querySelectorAll("a, button, input, textarea, .card-hover");
    clickables.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clickables.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Re-attach listeners on DOM mutations (simple way to handle dynamic content)
  useEffect(() => {
      const observer = new MutationObserver((mutations) => {
        const clickables = document.querySelectorAll("a, button, input, textarea, .card-hover");
        clickables.forEach(el => {
            el.addEventListener("mouseenter", () => setIsHovering(true));
            el.addEventListener("mouseleave", () => setIsHovering(false));
        });
      });
      
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
  }, []);

  return (
    <>
        {/* Main Dot */}
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
            animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />
        {/* Hover Ring */}
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
            animate={{ 
                x: mousePosition.x - 16, 
                y: mousePosition.y - 16,
                scale: isHovering ? 2.5 : 1,
                opacity: isHovering ? 0.5 : 1,
                borderColor: isHovering ? "var(--primary)" : "var(--primary)"
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        />
    </>
  );
};

export default Cursor;
