import React from "react";
import about from "../assets/about.jpg";
import { Code, Database, Terminal, Layers } from "lucide-react"; // icons

const skills = [
  { name: "HTML & CSS", level: "w-[95%]" },
  { name: "Tailwind CSS", level: "w-[88%]" },
  { name: "React JS", level: "w-[95%]" },
  { name: "Remix", level: "w-[85%]" },
  { name: "Node JS", level: "w-[95%]" },
  { name: "C++", level: "w-[95%]" },
  { name: "JavaScript", level: "w-[95%]" },
  { name: "TypeScript", level: "w-[90%]" },
  { name: "Python", level: "w-[95%]" },
  { name: "OOPs", level: "w-[95%]" },
  { name: "SQL", level: "w-[95%]" },
  { name: "Express", level: "w-[95%]" },
  { name: "Django", level: "w-[90%]" },
  { name: "GraphQL", level: "w-[87%]" },
  { name: "MongoDB", level: "w-[95%]" },
  { name: "PostgreSQL", level: "w-[87%]" },
  { name: "MySQL", level: "w-[85%]" },
  { name: "Redis", level: "w-[82%]" },
  { name: "Git & GitHub", level: "w-[95%]" },
  { name: "Data Structures & Algorithms", level: "w-[95%]" },
];

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="aboutme">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <img
            src={about}
            alt="Profile"
            className="w-72 h-100 rounded-2xl object-cover mb-8 md:mb-0 shadow-lg shadow-green-500/20 mt-8 md:mt-16"
          />

          {/* Content */}
          <div className="flex-1">
            <p className="text-lg mb-10 leading-relaxed text-gray-300">
            I am a <span className="text-green-400">Full-Stack Software Engineer</span> with hands-on experience building and deploying production-grade applications. Currently working at Accountant AI, I have developed and scaled real-world products including Upsellity, a Shopify app focused on revenue optimization, and SkillMoksha, an AI-powered hiring platform. My work involves designing scalable backend systems, building APIs using Django and GraphQL, and developing high-performance frontend applications with React and TypeScript. I have strong ownership of features from architecture to deployment and focus on writing clean, efficient code that solves real business problems. I am particularly interested in building scalable systems, optimizing performance, and delivering impactful solutions in real-world environments.
            </p>

            {/* Skills Section */}
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${skill.level} transition-all duration-700 ease-out`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <Code className="mx-auto mb-2 text-green-400" size={28} />
                <h3 className="text-2xl font-bold text-green-400">1+</h3>
                <p className="text-gray-400">Year Experience</p>
              </div>
              <div>
                <Layers className="mx-auto mb-2 text-blue-400" size={28} />
                <h3 className="text-2xl font-bold text-blue-400">9+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <Terminal className="mx-auto mb-2 text-purple-400" size={28} />
                <h3 className="text-2xl font-bold text-purple-400">300+</h3>
                <p className="text-gray-400">DSA Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
