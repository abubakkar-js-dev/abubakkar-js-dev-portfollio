"use client";
import { testimonialsData } from "@/app/data/testimonials";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="Testimonials" subtitle="What others say about working with me." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
                <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-card p-8 flex flex-col relative"
                >
                    <FaQuoteLeft className="text-4xl text-white/5 absolute top-6 right-6" />
                    
                    <p className="text-gray-300 leading-relaxed mb-6 italic relative z-10">
                        "{testimonial.text}"
                    </p>
                    
                    <div className="mt-auto flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                             {/* Placeholder for image */}
                             <div className="w-full h-full bg-gradient-to-br from-primary to-accent opacity-50"></div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                            <p className="text-primary text-xs">{testimonial.role}, {testimonial.company}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
