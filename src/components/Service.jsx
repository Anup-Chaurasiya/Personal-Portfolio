import React from "react";
import {
  Mic,
  Cpu,
  Server,
  Layout,
  Store,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const CAPABILITIES = [
  {
    num: "01",
    title: "Real-Time Voice AI & WebRTC Systems",
    tag: "VOICE_AGENT_ENGINEERING",
    icon: <Mic className="text-cyan-400" size={24} />,
    description:
      "Engineering low-latency, bidirectional audio streaming pipelines using LiveKit and WebRTC. Implementing voice activity detection (VAD), silence buffer flushing, dynamic interruption handling, and natural turn-taking with the OpenAI Realtime API.",
    technologies: ["LiveKit", "WebRTC", "OpenAI Realtime", "VAD", "WebSockets", "Plivo"],
    metrics: "Sub-second speech turnaround & zero AI overlap",
  },
  {
    num: "02",
    title: "Stateful RAG & Multi-Agent Orchestration",
    tag: "AGENTIC_KNOWLEDGE_OPS",
    icon: <Cpu className="text-emerald-400" size={24} />,
    description:
      "Architecting stateful LLM workflows using LangGraph and LangChain with high-dimensional vector search on Qdrant and pgvector. Implementing strict structured output validation to prevent hallucinations and enforce ground-truth compliance.",
    technologies: ["LangGraph", "Qdrant", "LangChain", "pgvector", "LiteLLM", "Prompt Ops"],
    metrics: "100% structured schema compliance & hallucination defense",
  },
  {
    num: "03",
    title: "High-Concurrency Distributed Backends",
    tag: "MICROSERVICES_CONCURRENCY",
    icon: <Server className="text-indigo-400" size={24} />,
    description:
      "Developing resilient backend infrastructures with FastAPI, Django, and Node.js. Designing asynchronous worker queues with Celery and Redis to handle 100+ concurrent background jobs for heavy document processing and automated AI evaluation.",
    technologies: ["FastAPI", "Django", "Celery", "Redis", "PostgreSQL", "Docker"],
    metrics: "70% pipeline latency cut & 99.9% worker reliability",
  },
  {
    num: "04",
    title: "Full-Stack SaaS Platforms & Applications",
    tag: "PRODUCTION_SAAS",
    icon: <Layout className="text-sky-400" size={24} />,
    description:
      "Building complete end-to-end production web applications with Next.js, React 19, TypeScript, and TailwindCSS. Implementing secure OAuth/JWT authentication, recurring billing with Razorpay, and Chrome extension companion tooling.",
    technologies: ["Next.js", "React 19", "TypeScript", "TailwindCSS v4", "Razorpay", "Chrome APIs"],
    metrics: "Serving 100+ live paying/active job seekers on Twerz",
  },
  {
    num: "05",
    title: "E-Commerce Growth & Discount Engines",
    tag: "SHOPIFY_ECOSYSTEM",
    icon: <Store className="text-purple-400" size={24} />,
    description:
      "Building high-speed GraphQL synchronization layers between merchant storefronts and backend discount engines. Developing embedded UI applications with Shopify Polaris and automated LLM-driven personalized bundle recommendation engines.",
    technologies: ["GraphQL", "Node.js", "Remix", "Shopify Polaris", "TypeScript", "REST"],
    metrics: "Sub-100ms promotion calculation & checkout sync",
  },
  {
    num: "06",
    title: "Software Reliability & Automated QA",
    tag: "RELIABILITY_TESTING",
    icon: <CheckCircle2 className="text-rose-400" size={24} />,
    description:
      "Authoring comprehensive automated unit and integration test suites covering complex LLM chains, WebRTC connections, and billing flows. Ensuring continuous deployment confidence across 64+ merged pull requests.",
    technologies: ["PyTest", "Jest", "GitHub Actions", "Docker", "CI/CD", "Linux"],
    metrics: "150+ automated test cases & 0 breaking deployments",
  },
];

const Service = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative cyber-grid">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
            <Terminal size={12} />
            <span>// 04. CORE ENGINEERING SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Architectural Capabilities &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              System Engineering
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            What I bring to high-impact teams: specialized production experience in Voice AI, scalable microservices, and reliable SaaS platforms.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.num}
              className="rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] relative overflow-hidden"
            >
              {/* Subtle Corner Number */}
              <div className="absolute top-4 right-4 font-mono text-xs font-bold text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                {cap.num}
              </div>

              <div>
                {/* Icon HUD */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 flex items-center justify-center mb-5 transition-all">
                  {cap.icon}
                </div>

                {/* Tag & Title */}
                <div className="font-mono text-[10px] text-cyan-400/90 tracking-wider uppercase mb-1.5 font-semibold">
                  {cap.tag}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Metrics & Tech */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
                  <Zap size={13} className="text-amber-400 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{cap.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {cap.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
