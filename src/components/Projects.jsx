import React, { useState } from "react";
import {
  ExternalLink,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Cpu,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import blog from "../assets/blog.avif";
import jobImage from "../assets/seeking.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import tracking from "../assets/tracking.avif";
import text from "../assets/text.jpg";
import shopify from "../assets/shopify.png";
import skillmoksha from "../assets/skillmoksha.png";
import resumeImage from "../assets/resume.jpeg";
import resolveai from "../assets/resolveai.jpg";

const CATEGORIES = [
  { id: "all", label: "All Systems (10)" },
  { id: "production", label: "Production Platforms (4)" },
  { id: "ai", label: "Voice AI & Agentic LLMs (3)" },
  { id: "fullstack", label: "Full-Stack SaaS & APIs (4)" },
];

const PROJECTS = [
  {
    id: "twerz",
    category: ["production", "ai"],
    featured: true,
    name: "Twerz — AI Career SaaS Platform",
    tagline: "Production Career Platform with Evidence-Grounded ATS Engine",
    metricBadge: "100+ REAL USERS",
    metricColor: "cyan",
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "LangChain", "Docker", "Razorpay", "TailwindCSS"],
    image: resumeImage,
    live: "https://twerz.com",
    github: "https://github.com/Anup-Chaurasiya/Personal-Portfolio",
    description:
      "Production SaaS serving 100+ active job seekers. Built with FastAPI microservices, structured anti-hallucination ATS scoring pipelines, Next.js web application, Chrome extension, and automated Razorpay billing.",
  },
  {
    id: "skillmoksha",
    category: ["production", "ai"],
    featured: true,
    name: "SkillMoksha — AI Hiring & Real-time Voice Platform",
    tagline: "LiveKit & WebRTC Conversational Turn-Taking Engine",
    metricBadge: "-70% LATENCY",
    metricColor: "emerald",
    technologies: ["Python", "Django", "LiveKit", "WebRTC", "OpenAI Realtime API", "Redis", "Celery", "PostgreSQL"],
    image: skillmoksha,
    github: "https://github.com/Anup-Chaurasiya/SkillMoksha",
    live: "https://app.skillmoksha.ai",
    description:
      "Real-time voice interviewer platform with LiveKit WebRTC audio streaming, VAD silence turn-taking, interruption handling, and proctoring. Reduced recruiter screening time by 75% and candidate no-shows by 40%.",
  },
  {
    id: "resolveai",
    category: ["production", "ai"],
    featured: true,
    name: "ResolveAI — AI Support Operations Platform",
    tagline: "Autonomous Support Ops with Stateful Vector Retrieval",
    metricBadge: "LANGGRAPH + QDRANT",
    metricColor: "purple",
    technologies: ["FastAPI", "LangGraph", "LangChain", "Qdrant Vector DB", "React", "TypeScript", "TailwindCSS"],
    image: resolveai,
    github: "https://github.com/Anup-Chaurasiya/Resolve-AI---AI-Support-Operations-Platform-",
    live: "https://resolveai.twerz.com/",
    description:
      "Enterprise support operations architecture powered by FastAPI microservices, LangGraph multi-agent routing, and high-dimensional semantic vector search via Qdrant for automated contextual resolution.",
  },
  {
    id: "upsellity",
    category: ["production", "fullstack"],
    featured: true,
    name: "Upsellity AI — E-Commerce Growth Engine",
    tagline: "Sub-100ms Promotion Engine & Shopify Polaris Embedded UI",
    metricBadge: "<100ms TARGET",
    metricColor: "sky",
    technologies: ["Node.js", "GraphQL", "React", "TypeScript", "Remix", "Shopify Polaris", "LLM"],
    image: shopify,
    github: "https://github.com/Anup-Chaurasiya/Upsellity",
    live: "https://upsellity.com/",
    description:
      "E-commerce growth platform featuring a configurable discount engine supporting product-level & cart-level promotional rules, GraphQL real-time merchant storefront sync, and LLM bundle suggestions.",
  },
  {
    id: "code-reviewer",
    category: ["ai", "fullstack"],
    featured: false,
    name: "AI-Powered Code Reviewer",
    tagline: "Automated AST Analysis & Real-time Bug Prevention",
    metricBadge: "GEMINI AI",
    metricColor: "amber",
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
    featured: false,
    name: "Real-Time Device Tracker",
    tagline: "High-Frequency WebSocket Geolocation Telemetry",
    metricBadge: "WEBSOCKETS",
    metricColor: "emerald",
    technologies: ["Node.js", "Socket.io", "Leaflet Maps", "Express.js"],
    image: tracking,
    github: "https://github.com/Anup-Chaurasiya/Real-Time-Device-Tracker",
    live: "https://real-time-device-tracker-hv9u.onrender.com/",
    description:
      "Low-latency real-time geospatial positioning tracking engine using bidirectional WebSockets (Socket.io) and interactive Leaflet map rendering with dynamic coordinate streaming.",
  },
  {
    id: "ai-blog",
    category: ["ai", "fullstack"],
    featured: false,
    name: "AI Blog Application",
    tagline: "Generative Content Platform with Rich Markdown",
    metricBadge: "MERN STACK",
    metricColor: "purple",
    technologies: ["MERN Stack", "Gemini AI", "JWT Auth", "Cloudinary"],
    image: blog,
    github: "https://github.com/Anup-Chaurasiya/AI-Blog-Application/tree/main",
    live: "https://ai-blog-application-anup.vercel.app/",
    description:
      "Full-stack generative publishing engine enabling automated draft synthesis, semantic tagging, image uploading via Cloudinary, and secure JWT authentication.",
  },
  {
    id: "job-seeking",
    category: ["fullstack"],
    featured: false,
    name: "Job Seeking Portal",
    tagline: "Role-Based Career & Candidate Workflow System",
    metricBadge: "RBAC AUTH",
    metricColor: "cyan",
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React"],
    image: jobImage,
    github: "https://github.com/Anup-Chaurasiya/Job-Seeking-portal/tree/main",
    live: "https://job-seeking-portal-anup.vercel.app/",
    description:
      "Multi-tenant career platform featuring dual-role interfaces for job applicants and recruiters, dynamic application pipelines, status lifecycle management, and resume attachments.",
  },
  {
    id: "portfolio",
    category: ["fullstack"],
    featured: false,
    name: "Personal Portfolio HUD",
    tagline: "Synthetic Developer Telemetry & Production Showcase",
    metricBadge: "REACT 19",
    metricColor: "sky",
    technologies: ["React 19", "Vite", "TailwindCSS v4", "Framer Motion"],
    image: image2,
    github: "https://github.com/Anup-Chaurasiya/Personal-Portfolio/tree/main",
    live: "https://personal-portfolio-a-self.vercel.app/",
    description:
      "High-performance synthetic engineering portfolio built with React 19, TailwindCSS v4, responsive HUD elements, real-time telemetry simulator, and EmailJS integration.",
  },
  {
    id: "hider-app",
    category: ["fullstack"],
    featured: false,
    name: "Hider Application",
    tagline: "Data Masking & Secure State Workspace",
    metricBadge: "UTILITY",
    metricColor: "amber",
    technologies: ["React", "TailwindCSS", "State Machine"],
    image: text,
    github: "https://github.com/Anup-Chaurasiya/Assignment-projects",
    live: "https://hider-projects.vercel.app/",
    description:
      "Privacy utility interface designed for sensitive text obfuscation, dynamic DOM toggling, and client-side data concealment with rapid keyboard shortcut triggers.",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category.includes(filter);
  });

  const featured = filteredProjects.filter((p) => p.featured);
  const secondary = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 relative cyber-grid">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
            <Terminal size={12} />
            <span>// 03. PRODUCTION & SYSTEM ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Systems &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Architectural Works
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Production AI platforms, low-latency voice engines, high-concurrency microservices, and distributed systems.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0a0e18] border border-white/[0.08]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-slate-400 hover:text-white border border-transparent hover:bg-white/[0.03]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Production Projects (Large Featured Cards) */}
        {featured.length > 0 && (
          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 tracking-wider uppercase pl-1">
              <Activity size={14} className="text-cyan-400" />
              <span>Flagship Production Deployments</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featured.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-cyan-500/30 shadow-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Header & Preview Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070b14]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-90" />

                    {/* Metric Badge */}
                    <div className="absolute top-4 left-4 font-mono text-[11px] font-bold px-3 py-1 rounded-lg bg-[#090d16]/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300 shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span>{project.metricBadge}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300/90 font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center gap-1.5 cursor-pointer"
                        >
                          <ExternalLink size={13} />
                          <span>Live System</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl font-mono text-xs font-medium text-slate-300 hover:text-white bg-[#0e1424] hover:bg-[#151f38] border border-white/10 hover:border-slate-500 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <FaGithub size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Secondary Systems Grid */}
        {secondary.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 tracking-wider uppercase pl-1">
              <Layers size={14} className="text-cyan-400" />
              <span>Full-Stack Applications & Developer Tooling</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondary.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-white/20 p-5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#070b14]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-2.5 right-2.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#090d16]/90 border border-white/10 text-slate-300">
                        {project.metricBadge}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ExternalLink size={12} />
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
