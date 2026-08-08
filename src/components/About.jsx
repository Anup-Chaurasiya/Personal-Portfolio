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
            I am a <span className="text-green-400 font-semibold">Founding Engineer at Twerz</span> and an <span className="text-blue-400 font-semibold">AI Full-Stack Engineer</span>. I specialize in architecting intelligent, scalable systems from the ground up. At Twerz—a production AI career SaaS startup—I built the entire evidence-grounded LLM pipeline and backend architecture to serve real-world job seekers. Concurrently, at SkillMoksha, I develop AI-powered hiring platforms using cutting-edge technologies. My expertise spans advanced RAG architectures, robust FastAPI/Django backends, and high-performance Next.js/React frontends. I take complete ownership of the product lifecycle, shipping reliable AI products that drive measurable business impact.
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
