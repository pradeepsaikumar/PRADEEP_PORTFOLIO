import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g9zymjj",     // 👉 replace with your EmailJS Service ID
        "__ejs-test-mail-service__",// 👉 replace with your EmailJS Template ID
        form.current,
        "b0r4FlgnZKs-3ow4n"      // 👉 replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white px-6 py-24 overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-150px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]"
      >
        Let’s Connect 🚀
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl mb-10"
      >
        <p className="text-gray-300 mb-4">
          I’m always open to collaborations, freelance projects, and creative tech talks.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail className="text-blue-400 w-5 h-5" />
            <a href="mailto:pallempradeepsaikumar07@gmail.com" className="hover:text-blue-400">
              pallempradeepsaikumar07@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-pink-400 w-5 h-5" />
            <a href="tel:+918639500480" className="hover:text-pink-400">
              +91 86395 00480
            </a>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(147,51,234,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white transition-all duration-300 shadow-lg"
        >
          {loading ? "Sending..." : isSent ? "✅ Message Sent!" : "Send Message"}
        </motion.button>
      </motion.form>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center gap-6 mt-10 text-2xl"
      >
        <a
          href="http://linkedin.com/in/pradeepsaikumar07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Linkedin />
        </a>
        <a
          href="github.com/pradeepsaikumar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <Github />
        </a>
        <a
          href="https://x.com/Pradeepdsmart01?t=yQkhw5XVEm69v1w08yfRfg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <Twitter />
        </a>
        <a
          href="https://www.instagram.com/pradeep_d_smart_07?igsh=d3J1cmkzNTg3ODM5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <Instagram />
        </a>
      </motion.div>
    </section>
  );
}
