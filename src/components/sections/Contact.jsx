"use client";
import { useToast } from "@/components/ui/Toast";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    FaCheckCircle,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhone,
    FaSpinner,
    FaTwitter,
    FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    setStatus("submitting");
    
    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus("success");
    toast.success("Message sent successfully! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />, 
      label: "Location",
      text: "Rajshahi, Bangladesh", 
      href: null,
      color: "from-red-400 to-pink-500"
    },
    { 
      icon: <FaEnvelope />, 
      label: "Email",
      text: "mdabubakkars182@gmail.com", 
      href: "mailto:mdabubakkars182@gmail.com",
      color: "from-teal-400 to-cyan-500"
    },
    { 
      icon: <FaPhone />, 
      label: "Phone",
      text: "+880 1304 589108", 
      href: "tel:+8801304589108",
      color: "from-blue-400 to-indigo-500"
    },
    { 
      icon: <FaWhatsapp />, 
      label: "WhatsApp",
      text: "+880 1961 849643", 
      href: "https://wa.me/8801961849643",
      color: "from-green-400 to-emerald-500"
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/abubakkar-js-dev", label: "GitHub", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-abu-bakkar-siddik-024a72269/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, href: "https://x.com/MrBakka244179", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/fabsc2021/", label: "Facebook", color: "hover:text-blue-500" },
  ];

  const inputClasses = (hasError) => `
    w-full p-4 rounded-xl bg-slate-800/50 text-white border 
    ${hasError ? 'border-red-500/50' : 'border-slate-700'} 
    focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 
    outline-none transition-all placeholder:text-gray-500 
    focus:bg-slate-800/80
  `;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            <FaPaperPlane />
            Get In Touch
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-teal-400">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm currently available for freelance work or full-time opportunities. 
                  If you have a project that needs a creative touch, let's talk!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-5 hover:border-teal-400/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 group-hover:scale-110 transition-transform`}>
                        <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center text-2xl text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-white hover:text-teal-400 transition-colors font-medium"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-white font-medium">{item.text}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 ${social.color} hover:border-teal-400/50 transition-all duration-100`}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { label: "Response Time", value: "< 24h" },
                  { label: "Projects Done", value: "20+" },
                  { label: "Satisfaction", value: "100%" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-teal-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-sm z-20 rounded-2xl p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/50"
                    >
                      <FaCheckCircle className="text-4xl text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-center">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClasses(errors.name)}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClasses(errors.email)}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className={inputClasses(errors.subject)}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={`${inputClasses(errors.message)} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 py-4 rounded-xl font-bold shadow-lg shadow-teal-400/30 hover:shadow-teal-400/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                >
                  {status === "submitting" ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;