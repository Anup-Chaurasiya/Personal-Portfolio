import React from "react";
import {
  Cpu,
  Server,
  Database,
  Layout,
  GitBranch,
  Terminal,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
} from "lucide-react";
import aboutImg from "../assets/about.jpg";

const SKILL_DOMAINS = [
  {
    title: "Voice AI & Agentic LLMs",
    icon: <Cpu className="text-cyan-400" size={18} />,
    color: "cyan",
    skills: [
      "LiveKit",
      "WebRTC",
      "OpenAI Realtime API",
      "LangGraph",
      "LangChain",
      "VAD (Voice Activity Detection)",
      "Structured Output Validation",
      "Prompt Engineering",
      "Function Calling",
    ],
  },
  {
    title: "Distributed Backend & APIs",
    icon: <Server className="text-emerald-400" size={18} />,
    color: "emerald",
    skills: [
      "FastAPI",
      "Python",
      "Django",
      "Node.js",
      "Express.js",
      "Celery Workers",
      "Redis Concurrency",
      "WebSockets",
      "GraphQL",
      "RESTful Services",
    ],
  },
  {
    title: "Vector Search & Databases",
    icon: <Database className="text-indigo-400" size={18} />,
    color: "indigo",
    skills: [
      "Qdrant Vector DB",
      "PostgreSQL",
      "pgvector",
      "Redis Cache",
      "MongoDB",
      "MySQL",
      "Vector Indexing",
      "Data Modeling",
    ],
  },
  {
    title: "Modern Frontend & Full-Stack",
    icon: <Layout className="text-sky-400" size={18} />,
    color: "sky",
    skills: [
      "React 19",
      "Next.js",
      "TypeScript",
      "JavaScript (ESNext)",
      "Remix",
      "Shopify Polaris",
      "TailwindCSS v4",
      "Framer Motion",
    ],
  },
  {
    title: "DevOps, Systems & QA",
    icon: <GitBranch className="text-purple-400" size={18} />,
    color: "purple",
    skills: [
      "Docker",
      "Kubernetes",
      "Git & GitHub Actions",
      "Linux Systems",
      "PyTest & Automated Testing",
      "CI/CD Pipelines",
      "Production Telemetry",
    ],
  },
];

const About = () => {
  return (
    <section id="aboutme" className="py-20 lg:py-28 relative cyber-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
            <Terminal size={12} />
            <span>// 01. TECHNICAL PROFILE & ENGINEERING VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Dual Superpower:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              AI Engineering + Scalable Full-Stack Systems
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Bridging cutting-edge Voice AI and Agentic LLMs with robust FastAPI microservices and responsive Next.js frontends.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Portrait & Engineering Credo (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0e18] border border-white/[0.08] p-4 shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-h-[480px]">
                <img
                  src={aboutImg}
                  alt="Anup Chaurasiya"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-80" />

                {/* Cyber Badges on Image */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#090d16]/80 backdrop-blur-md border border-white/10 font-mono text-[11px] text-cyan-300 flex items-center gap-1.5">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>PRODUCTION VERIFIED</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-400">STATUS:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      ACTIVE // KRUT AI
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-slate-300">
                    LiveKit • FastAPI • LangGraph • Qdrant
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#0a0e18]/80 border border-white/[0.06] hover:border-cyan-500/30 transition-all">
                <div className="font-mono text-2xl font-bold text-cyan-400">2+ YOE</div>
                <div className="text-xs text-slate-400 mt-1">Enterprise & Venture Engineering</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0e18]/80 border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                <div className="font-mono text-2xl font-bold text-emerald-400">100+ Users</div>
                <div className="text-xs text-slate-400 mt-1">Production SaaS (Twerz)</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0e18]/80 border border-white/[0.06] hover:border-purple-500/30 transition-all">
                <div className="font-mono text-2xl font-bold text-purple-400">64+ PRs</div>
                <div className="text-xs text-slate-400 mt-1">Merged in Production Repos</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0e18]/80 border border-white/[0.06] hover:border-blue-500/30 transition-all">
                <div className="font-mono text-2xl font-bold text-blue-400">300+ DSA</div>
                <div className="text-xs text-slate-400 mt-1">Algorithms & Data Structures</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Technical Stack Matrix (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Engineering Narrative */}
            <div className="p-6 rounded-2xl bg-[#0a0e18]/80 border border-white/[0.08] shadow-lg space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap size={20} className="text-cyan-400" />
                <span>AI Engineering Meets Production Full-Stack</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an <strong className="text-white font-semibold">AI Engineer and Full-Stack Software Engineer</strong> with <strong className="text-cyan-300">2+ years of production experience</strong>. What sets me apart is the rare ability to bridge deep generative AI architectures with battle-tested distributed engineering.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                At <strong className="text-white">Krut AI</strong>, I built an end-to-end real-time AI interviewer (<strong className="text-slate-200">SkillMoksha</strong>) using LiveKit WebRTC, VAD, and OpenAI Realtime API. At <strong className="text-white">Twerz</strong>, I founded a production AI career SaaS serving 100+ active job seekers with evidence-grounded ATS scoring pipelines, FastAPI microservices, and automated Razorpay billing.
              </p>
            </div>

            {/* Technical Skills Categorized Matrix */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2">
                  <Code2 size={16} className="text-cyan-400" />
                  <span>Technical Stack Matrix</span>
                </h3>
                <span className="font-mono text-[11px] text-slate-400">UPDATED Q1 2025</span>
              </div>

              <div className="space-y-3.5">
                {SKILL_DOMAINS.map((domain, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#090d16]/70 border border-white/[0.06] hover:border-white/[0.12] transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {domain.icon}
                      <span className="font-semibold text-sm text-slate-200">{domain.title}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-white/[0.06] hover:border-cyan-500/30 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
