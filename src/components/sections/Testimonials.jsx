"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonialsData } from "@/data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonialsData.length - 1;
      if (nextIndex >= testimonialsData.length) return 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400/10 border border-teal-400/30 rounded-full text-teal-400 text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaStar />
            Testimonials
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-teal-400">Clients</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - hear from people I've worked with.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-teal-400/50 transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-teal-400/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/10 transition-colors">
                <FaQuoteLeft className="text-3xl text-teal-400/30 group-hover:text-teal-400/50 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 leading-relaxed mb-6 flex-1 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-400/20 group-hover:ring-teal-400/50 transition-all">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">{testimonial.name}</h4>
                  <p className="text-teal-400 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full px-4"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 flex flex-col relative overflow-hidden max-w-md mx-auto">
                  {/* Quote icon */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-teal-400/5 rounded-full flex items-center justify-center">
                    <FaQuoteLeft className="text-3xl text-teal-400/30" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1 relative z-10">
                    "{testimonialsData[currentIndex].text}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-400/20">
                        <img
                          src={testimonialsData[currentIndex].image}
                          alt={testimonialsData[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{testimonialsData[currentIndex].name}</h4>
                      <p className="text-teal-400 text-sm font-medium">{testimonialsData[currentIndex].role}</p>
                      <p className="text-gray-500 text-xs">{testimonialsData[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={() => paginate(-1)}
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:bg-teal-400 hover:text-slate-900 transition-all border border-slate-700 hover:border-teal-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:bg-teal-400 hover:text-slate-900 transition-all border border-slate-700 hover:border-teal-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-teal-400"
                    : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { label: "Happy Clients", value: "10+", icon: "😊" },
            { label: "Projects Done", value: "20+", icon: "✅" },
            { label: "5-Star Reviews", value: "15+", icon: "⭐" },
            { label: "Success Rate", value: "100%", icon: "🎯" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-teal-400/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;