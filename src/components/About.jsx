import React from "react";
import about from "../assets/about.jpg";
import { Code, Database, Terminal, Layers } from "lucide-react"; // icons

const skills = [
  { name: "HTML & CSS", level: "w-[90%]" },
  { name: "React JS", level: "w-[90%]" },
  { name: "Node JS", level: "w-[90%]" },
  { name: "C++", level: "w-[96%]" },
  { name: "JavaScript", level: "w-[90%]" },
  { name: "Python", level: "w-[75%]" },
  { name: "OOPs", level: "w-[90%]" },
  { name: "SQL", level: "w-[95%]" },
  { name: "Express", level: "w-[80%]" },
  { name: "MongoDB", level: "w-[80%]" },
  { name: "Git & GitHub", level: "w-[80%]" },
  { name: "Linux", level: "w-[70%]" },
  { name: "Data Structures & Algorithms", level: "w-[75%]" },
  { name: "Manual Testing", level: "w-[85%]" },
  { name: "Automation Testing", level: "w-[70%]" },
  { name: "Cypress", level: "w-[60%]" },
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
             I am Anup Chaurasiya, a passionate <span className="text-green-400">Full-Stack Developer</span> with expertise in both frontend and backend technologies. 
             I thrive on solving complex problems and building modern, scalable web applications. With a focus on clean code, 
             optimal performance, and seamless user experiences, I continuously explore new tools and frameworks to stay ahead in the ever-evolving world of web development.
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
                <h3 className="text-2xl font-bold text-green-400">6+</h3>
                <p className="text-gray-400">Months Experience</p>
              </div>
              <div>
                <Layers className="mx-auto mb-2 text-blue-400" size={28} />
                <h3 className="text-2xl font-bold text-blue-400">7+</h3>
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
