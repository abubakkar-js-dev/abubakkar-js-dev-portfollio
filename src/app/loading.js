"use client";
import { motion } from "framer-motion";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0a192f]">
      <motion.div
        className="relative w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.span
        className="absolute text-white text-lg font-semibold mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading...
      </motion.span>
    </div>
  );
};

export default loading;
