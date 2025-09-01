import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import image4 from "../assets/image4.jpg";
import { ReactTyped } from "react-typed";


const Hero = () => {


  return (
    <div className="bg-black text-white text-center pt-40 pb-20" id="home">
      <motion.img
        src={image4}
        alt="Anup Chaurasiya"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover border-4 border-green-400 shadow-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          <ReactTyped
            strings={[
              "Anup Chaurasiya 🚀",
              "Full Stack Developer 💻",
              "Problem Solver 🧩"
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1500}
            loop
            showCursor
            cursorChar="|"
          />
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-lg md:text-2xl text-gray-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Full-Stack Developer | Problem Solver
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 text-gray-300 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        I design and develop modern, responsive, and high-performance web applications that combine clean,
        efficient code with intuitive user experiences, ensuring scalable and reliable solutions for every project.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* Contact Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition"
        >
          <Mail size={18} /> Contact Me
        </a>

        {/* Resume Button */}
        <a
          href="/Anup_Chaurasiya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition"
        >
          <FileText size={18} /> Resume
        </a>

        {/* LeetCode Button */}
        <a
          href="https://leetcode.com/u/2021cs132/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition"
        >
          <FileText size={18} /> LeetCode
        </a>
      </motion.div>

    </div>
  );
};

export default Hero;
