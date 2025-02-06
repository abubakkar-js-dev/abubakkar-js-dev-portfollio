"use client";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block pb-2">
        {title}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 via-orange-500 to-white rounded-lg"></span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-300">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
