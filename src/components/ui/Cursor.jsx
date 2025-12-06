"use client";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the outer ring
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update motion values
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Show cursor only after first movement to prevent initial jump
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Global event delegation for hover states
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea, .card-hover, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Dot - Follows directly */}
          <motion.div
            className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            animate={{
              scale: isClicking ? 0.8 : isHovering ? 0 : 1,
              opacity: isHovering ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Outer Ring - Follows with spring physics */}
          <motion.div
            className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{ 
              x: cursorX, 
              y: cursorY, 
              translateX: "-50%", 
              translateY: "-50%"
            }}
            animate={{
              width: isHovering ? 60 : 32,
              height: isHovering ? 60 : 32,
              backgroundColor: isHovering ? "rgba(45, 212, 191, 0.1)" : "transparent", // teal-400 with opacity
              borderColor: isHovering ? "rgba(45, 212, 191, 0.5)" : "rgba(45, 212, 191, 0.8)",
              scale: isClicking ? 0.9 : 1,
            }}
            transition={{ type: "tween", duration: 0.15 }}
          >
            {/* Optional inner glow or detail */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0 bg-primary/10 rounded-full blur-sm"
                    />
                )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cursor;
