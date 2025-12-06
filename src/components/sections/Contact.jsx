"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset status
    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputClasses = "w-full p-4 rounded-lg bg-darkBlue/50 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-600 focus:bg-darkBlue/80";

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
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/5">
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
                 <a href="https://github.com/abubakkar-js-dev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" aria-label="GitHub">
                    <FaGithub size={18} />
                 </a>
                 <a href="https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" aria-label="LinkedIn">
                    <FaLinkedin size={18} />
                 </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-secondary/30 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === "success" ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center bg-secondary/95 z-10 rounded-2xl p-8"
                >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <FaPaperPlane className="text-4xl text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
            ) : null}

            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClasses}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClasses}
                        required
                    />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Subject</label>
                 <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className={inputClasses}
                    required
                />
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    className={`${inputClasses} resize-none`}
                    required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {status === "submitting" ? (
                    <>Sending...</>
                ) : (
                    <>Send Message <FaPaperPlane className="text-sm" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
