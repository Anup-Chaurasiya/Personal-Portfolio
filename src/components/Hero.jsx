import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import Anup from "../assets/anup.jpg";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 lg:pb-12 min-h-screen flex flex-col justify-center" id="home">
      <motion.img
        src={Anup}
        alt="Anup Chaurasiya"
        className="block mx-auto mb-4 sm:mb-6 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.4)]"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-2 sm:px-4 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          <ReactTyped
            strings={[
              "Anup Chaurasiya",
              "AI Full-Stack Engineer at Krut AI"
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
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 px-2 sm:px-4 font-medium max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Building Production AI Products at <span className="text-white font-semibold">Twerz</span> & <span className="text-white font-semibold">SkillMoksha</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 text-gray-400 max-w-3xl mx-auto px-4 sm:px-8 text-sm sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        I specialize in engineering intelligent LLM pipelines, RAG systems, and robust full-stack applications. From concept to deployment, I build scalable AI solutions that solve real-world problems and drive measurable business impact.
      </motion.p>

      {/* Highlight Chips */}
      <motion.div
        className="mt-5 flex flex-wrap justify-center gap-2 px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {["Python", "LangChain", "RAG", "FastAPI", "Django", "React", "Node.js", "GraphQL", "PostgreSQL", "Docker", "LLM Pipelines"].map((tag) => (
          <span
            key={tag}
            className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-300 hover:border-green-400 hover:text-white transition-colors"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 px-2"
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
          href="https://drive.google.com/file/d/1vIfawAvm5zscZtlSBGQuCaaPjxS7ePge/view?usp=sharing"
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
