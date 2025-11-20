import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import Anup from "../assets/anup.jpg";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20" id="home">
      <motion.img
        src={Anup}
        alt="Anup Chaurasiya"
        className="block mx-auto mb-6 sm:mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-green-400 shadow-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          <ReactTyped
            strings={[
              "Anup Chaurasiya 🚀",
              "Software Developer at Accountant AI💻",
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
        className="text-sm sm:text-lg md:text-xl text-gray-400 mt-2 px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Software Developer | Problem Solver
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 text-gray-300 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-4 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        I design and develop modern, responsive, and high-performance web applications that combine clean,
        efficient code with intuitive user experiences, ensuring scalable and reliable solutions for every project.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#contact"
          className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition text-sm sm:text-base"
        >
          <Mail size={16} /> Contact Me
        </a>

        <a
          href="https://drive.google.com/file/d/1wO6PZqFBKlsEhl1FiEnaVAh6EpvkR7cn/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition text-sm sm:text-base"
        >
          <FileText size={16} /> Resume
        </a>

        <a
          href="https://github.com/Anup-Chaurasiya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition text-sm sm:text-base"
        >
          <FaGithub size={16} /> GitHub
        </a>

        <a
          href="https://leetcode.com/u/2021cs132/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium shadow-lg hover:scale-105 transform transition text-sm sm:text-base"
        >
          <SiLeetcode size={16} /> LeetCode
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
