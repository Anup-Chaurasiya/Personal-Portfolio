import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import image1 from "../assets/image1.jpg";
import tracking from "../assets/tracking.avif";
import shopify from "../assets/shopify.png";
import skillmoksha from "../assets/skillmoksha.png";
import resumeImage from "../assets/resume.jpeg";
import resolveai from "../assets/resolveai.jpg";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "ai", label: "Voice AI & LLMs" },
  { id: "fullstack", label: "Full-Stack SaaS" },
];

const PROJECTS = [
  {
    id: "skillmoksha",
    category: ["featured", "ai"],
    name: "SkillMoksha — Real-Time Voice AI Interviewer",
    tagline: "LiveKit & WebRTC Conversational Turn-Taking Engine",
    technologies: [
      "Python",
      "Django",
      "LiveKit",
      "WebRTC",
      "OpenAI Realtime API",
      "Redis",
      "Celery",
      "PostgreSQL",
    ],
    image: skillmoksha,
    github: "https://github.com/Anup-Chaurasiya/SkillMoksha",
    live: "https://app.skillmoksha.ai",
    description:
      "Real-time voice interviewer platform with LiveKit WebRTC audio streaming, VAD silence turn-taking, interruption handling, and proctoring. Cut speech turnaround latency by 70% and reduced recruiter screening time by 75%.",
  },
  {
    id: "twerz",
    category: ["featured", "fullstack", "ai"],
    name: "Twerz — AI Career SaaS Platform",
    tagline: "Evidence-Grounded Resume Tailoring & ATS Scoring Engine",
    technologies: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "LangChain",
      "Docker",
      "Razorpay",
      "TailwindCSS",
    ],
    image: resumeImage,
    live: "https://twerz.com",
    github: "https://github.com/Anup-Chaurasiya/Personal-Portfolio",
    description:
      "Production SaaS platform serving 100+ active job seekers. Features FastAPI microservices, structured anti-hallucination ATS scoring, a Next.js web application, Chrome extension, and automated Razorpay billing.",
  },
  {
    id: "resolveai",
    category: ["featured", "ai"],
    name: "ResolveAI — AI Support Operations Platform",
    tagline: "Autonomous Support Ops with Stateful Vector Retrieval",
    technologies: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Qdrant Vector DB",
      "React",
      "TypeScript",
    ],
    image: resolveai,
    github: "https://github.com/Anup-Chaurasiya/Resolve-AI---AI-Support-Operations-Platform-",
    live: "https://resolveai.twerz.com/",
    description:
      "Enterprise support operations architecture powered by FastAPI microservices, LangGraph multi-agent routing, and high-dimensional semantic vector search via Qdrant for automated contextual resolution.",
  },
  {
    id: "upsellity",
    category: ["featured", "fullstack"],
    name: "Upsellity AI — E-Commerce Growth Engine",
    tagline: "Sub-100ms Promotion Engine & Shopify Polaris Embedded UI",
    technologies: [
      "Node.js",
      "GraphQL",
      "React",
      "TypeScript",
      "Remix",
      "Shopify Polaris",
      "LLMs",
    ],
    image: shopify,
    github: "https://github.com/Anup-Chaurasiya/Upsellity",
    live: "https://upsellity.com/",
    description:
      "E-commerce growth platform featuring a configurable discount engine supporting product-level and cart-level rules, real-time GraphQL merchant storefront sync, and LLM-driven bundle recommendations.",
  },
  {
    id: "code-reviewer",
    category: ["ai", "fullstack"],
    name: "AI-Powered Code Reviewer",
    tagline: "Automated AST Analysis & Bug Prevention",
    technologies: ["MERN Stack", "Gemini AI", "TailwindCSS", "Node.js"],
    image: image1,
    github: "https://github.com/Anup-Chaurasiya/AI-Powered-Code-Reviewer/tree/main",
    live: "https://ai-powered-code-reviewer-anupchaura.vercel.app/",
    description:
      "Automated code review system analyzing code submissions for security vulnerabilities, syntax bottlenecks, and idiomatic improvements using Gemini AI with instant inline diagnostics.",
  },
  {
    id: "device-tracker",
    category: ["fullstack"],
    name: "Real-Time Device Tracker",
    tagline: "High-Frequency WebSocket Geolocation Telemetry",
    technologies: ["Node.js", "Socket.io", "Leaflet Maps", "Express.js"],
    image: tracking,
    github: "https://github.com/Anup-Chaurasiya/Real-Time-Device-Tracker",
    live: "https://real-time-device-tracker-hv9u.onrender.com/",
    description:
      "High-frequency geolocation telemetry service streaming continuous coordinates over bidirectional WebSockets, mapped in real time on interactive Leaflet maps with sub-50ms latency.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1.5 mb-3">
              Projects & Shipped Systems
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Production platforms, real-time voice architectures, and full-stack
              tools engineered for reliability and scale.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl card-surface overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:border-white/20"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-slate-200 transition">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="p-6 pt-0 flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-slate-100 transition shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition"
                  >
                    <FaGithub size={13} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
