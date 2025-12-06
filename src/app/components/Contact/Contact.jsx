"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch for collaborations, opportunities, or just a chat."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently available for freelance work or full-time opportunities. 
              If you have a project that needs some creative touch, or just want to use my skills, feel free to contact me.
            </p>

            <div className="space-y-6">
              {[
                { icon: <FaMapMarkerAlt />, text: "Rajshahi, Bangladesh", href: null },
                { icon: <FaEnvelope />, text: "mdabubakkars182@gmail.com", href: "mailto:mdabubakkars182@gmail.com" },
                { icon: <FaPhone />, text: "+880 1304 589108", href: "tel:+8801304589108" },
                { icon: <FaWhatsapp />, text: "+880 1961 849643", href: "https://wa.me/8801961849643" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-lg">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-lg">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                 <a href="https://github.com/abubakkar-js-dev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                    <FaGithub size={18} />
                 </a>
                 <a href="https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                    <FaLinkedin size={18} />
                 </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-secondary/30 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 rounded-lg bg-darkBlue/50 text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                     <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-3 rounded-lg bg-darkBlue/50 text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        required
                    />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Subject</label>
                 <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full p-3 rounded-lg bg-darkBlue/50 text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    required
                />
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full p-3 rounded-lg bg-darkBlue/50 text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
