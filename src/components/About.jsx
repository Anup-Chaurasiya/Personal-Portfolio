import React from "react";
import about from "../assets/about.jpg";
import { Code, Database, Terminal, Layers } from "lucide-react"; // icons

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "GraphQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["FastAPI", "Django", "React", "Node.js", "Express.js", "Remix", "Shopify Polaris", "TailwindCSS"],
  },
  {
    title: "AI & LLM",
    skills: ["LangChain", "LangGraph", "RAG", "AI Agents", "Prompt Engineering", "Function Calling"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "pgvector", "Vector Databases"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "GitHub"],
  }
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
              I am a <span className="text-green-400 font-semibold">Software Engineer at Krut AI</span>, and former <span className="text-purple-400 font-semibold">Software Engineer Intern at Upsellity AI</span>. With 1.8+ years of production engineering experience, I specialize in architecting intelligent, scalable systems from the ground up. At <span className="text-blue-400 font-semibold">Twerz</span> — a production AI career SaaS — I built the entire evidence-grounded LLM pipeline, ATS scoring engine, and backend architecture serving 100+ real job seekers. I have also shipped real-time voice AI platforms using LiveKit and WebRTC, high-performance RAG operations platforms like <span className="text-green-400 font-semibold">ResolveAI</span> using FastAPI, LangGraph, and Qdrant, and e-commerce growth engines with GraphQL and Remix. My technical expertise spans advanced LLM orchestration, robust FastAPI/Django backends, and responsive React/Next.js frontends.
            </p>

            {/* Skills Section */}
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 text-sm font-medium hover:border-green-400 hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <Code className="mx-auto mb-2 text-green-400" size={28} />
                <h3 className="text-2xl font-bold text-green-400">1.8+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <Layers className="mx-auto mb-2 text-blue-400" size={28} />
                <h3 className="text-2xl font-bold text-blue-400">10+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <Terminal className="mx-auto mb-2 text-purple-400" size={28} />
                <h3 className="text-2xl font-bold text-purple-400">300+</h3>
                <p className="text-gray-400">DSA Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
