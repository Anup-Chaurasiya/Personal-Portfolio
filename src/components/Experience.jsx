import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  GitPullRequest,
  Users,
  Timer,
  CheckCircle2,
} from "lucide-react";

const EXPERIENCES = [
  {
    id: "krut-ai",
    company: "Krut AI",
    role: "Software Engineer — AI & Voice Systems",
    product: "SkillMoksha — Real-time AI Voice Interviewer & Hiring Engine",
    duration: "June 2025 – Present",
    statusBadge: "PRODUCTION ACTIVE",
    statusColor: "emerald",
    metrics: [
      { label: "Pipeline Latency", val: "-30%", icon: <Timer size={13} className="text-emerald-400" /> },
      { label: "Candidate No-Shows", val: "-40%", icon: <Users size={13} className="text-cyan-400" /> },
      { label: "Recruiter Effort", val: "-75%", icon: <CheckCircle2 size={13} className="text-purple-400" /> },
      { label: "Merged PRs", val: "100+", icon: <GitPullRequest size={13} className="text-sky-400" /> },
    ],
    technologies: [
      "Python",
      "Django",
      "LiveKit",
      "WebRTC",
      "OpenAI Realtime API",
      "Plivo",
      "Redis",
      "Celery",
      "PostgreSQL",
      "WebSockets",
    ],
    highlights: [
      {
        title: "Real-Time AI Voice Streaming",
        desc: "Built an end-to-end real-time AI voice interviewer using LiveKit, WebRTC, and the OpenAI Realtime API, enabling candidates to speak naturally via live speech recognition and streamed voice synthesis.",
      },
      {
        title: "VAD & Turn-Taking Engine",
        desc: "Engineered conversational turn-taking with Voice Activity Detection (VAD), silence detection, transcript buffering, and interruption handling to prevent AI overlap.",
      },
      {
        title: "Stateful Interview Orchestration",
        desc: "Built a backend-controlled interview orchestration engine tracking question state transitions (answer/skip/clarify), generating follow-ups while preserving contextual memory.",
      },
      {
        title: "Telephony & WebSocket Infrastructure",
        desc: "Delivered a fault-tolerant voice/telephony backend using async WebSockets, Plivo audio streaming, and Redis concurrency control, cutting pipeline latency by 70% and no-shows by 40%.",
      },
      {
        title: "Automated Evaluation & Proctoring",
        desc: "Built LLM-driven candidate evaluation with real-time object detection for proctoring, reducing recruiter screening effort by 75% and cutting time-to-shortlist from days to hours.",
      },
      {
        title: "High-Concurrency Async Workers",
        desc: "Shipped async Celery & Redis pipelines handling 100+ concurrent background jobs for resume parsing, AI scoring, and timed reminders across 64+ merged pull requests.",
      },
    ],
  },
  {
    id: "twerz",
    company: "Twerz",
    role: "Founding Engineer — Full-Stack AI Platform",
    product: "AI Career SaaS Platform (Serving 100+ Active Job Seekers)",
    duration: "Jun 2026 – Present",
    statusBadge: "PRODUCTION SAAS",
    statusColor: "cyan",
    metrics: [
      { label: "Active Users", val: "100+", icon: <Users size={13} className="text-cyan-400" /> },
      { label: "Automated Tests", val: "150+", icon: <CheckCircle2 size={13} className="text-emerald-400" /> },
      { label: "ATS Pipeline", val: "Real-time", icon: <Activity size={13} className="text-purple-400" /> },
      { label: "Payments", val: "Razorpay Live", icon: <Sparkles size={13} className="text-amber-400" /> },
    ],
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LiteLLM",
      "Docker",
      "Google OAuth",
      "Razorpay",
      "TailwindCSS",
    ],
    highlights: [
      {
        title: "Evidence-Grounded ATS Pipeline",
        desc: "Founded and engineered a production AI career SaaS used by 100+ job seekers to analyze job descriptions, tailor resumes, score ATS fit, and track job applications.",
      },
      {
        title: "Anti-Hallucination LLM Guardrails",
        desc: "Engineered an evidence-grounded LLM pipeline for resume tailoring and ATS scoring with structured-output validation to prevent fabricated skills or experience.",
      },
      {
        title: "Scalable Microservice Backend",
        desc: "Designed scalable backend services with FastAPI, PostgreSQL, background workers, secure Google OAuth/JWT authentication, Razorpay payment processing, and system monitoring.",
      },
      {
        title: "Next.js Web App & Chrome Extension",
        desc: "Built a Next.js web application and Chrome extension automating job capture, role-specific application generation, outreach messages, and application pipeline tracking.",
      },
      {
        title: "Automated Test Suite",
        desc: "Authored 150+ automated unit and integration tests covering AI workflows, document rendering, and billing APIs to guarantee 99.9% platform reliability.",
      },
    ],
  },
  {
    id: "upsellity",
    company: "Upsellity AI",
    role: "Software Engineer Intern",
    product: "E-Commerce Growth & Automated Discount Engine",
    duration: "Jan 2025 – June 2025",
    statusBadge: "COMPLETED",
    statusColor: "purple",
    metrics: [
      { label: "API Target", val: "<100ms", icon: <Timer size={13} className="text-cyan-400" /> },
      { label: "Sync Engine", val: "GraphQL", icon: <Layers size={13} className="text-emerald-400" /> },
      { label: "UI System", val: "Shopify Polaris", icon: <Sparkles size={13} className="text-purple-400" /> },
      { label: "A/B Testing", val: "Automated", icon: <CheckCircle2 size={13} className="text-sky-400" /> },
    ],
    technologies: [
      "Node.js",
      "GraphQL",
      "React",
      "TypeScript",
      "Remix",
      "Shopify Polaris",
      "LLM Recommendations",
      "REST APIs",
    ],
    highlights: [
      {
        title: "Configurable Promotion & Discount Engine",
        desc: "Built Node.js backend services for an upsell/cross-sell application, including a configurable discount engine supporting product-level, cart-level, and conditional promotion rules.",
      },
      {
        title: "High-Speed GraphQL Synchronization",
        desc: "Integrated GraphQL APIs to sync product, discount, and order data in real time between backend services and merchant storefronts with sub-100ms response targets.",
      },
      {
        title: "Merchant Analytics Dashboard",
        desc: "Built the merchant dashboard using React, TypeScript, and Remix enabling merchants to launch marketing campaigns, run A/B tests, and track results without developer help.",
      },
      {
        title: "Shopify Polaris UI Admin Embedding",
        desc: "Developed Shopify Polaris-based UI components for the merchant-facing app embedding, ensuring UX consistency with the Shopify Admin design system.",
      },
      {
        title: "LLM Bundle Recommendation Engine",
        desc: "Integrated an LLM-powered product recommendation engine to auto-suggest contextually relevant upsell bundles based on cart contents, customer history, and purchase intent signals.",
      },
    ],
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(EXPERIENCES[0].id);

  const active = EXPERIENCES.find((e) => e.id === selectedExp) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative cyber-grid">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
            <Terminal size={12} />
            <span>// 02. PRODUCTION WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Track Record &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Shipped Systems
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Direct impact, engineering decisions, and measurable outcomes delivered across venture-backed AI platforms and high-growth products.
          </p>
        </div>

        {/* Company Selector Tab Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {EXPERIENCES.map((exp) => {
            const isSelected = exp.id === selectedExp;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp.id)}
                className={`px-4 sm:px-6 py-3 rounded-xl font-mono text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-cyan-950/60 border border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                    : "bg-[#0a0e18] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    exp.statusColor === "emerald"
                      ? "bg-emerald-400 animate-pulse"
                      : exp.statusColor === "cyan"
                      ? "bg-cyan-400"
                      : "bg-purple-400"
                  }`}
                />
                <span className="font-bold">{exp.company}</span>
                <span className="text-slate-500 text-xs hidden sm:inline">|</span>
                <span className="text-slate-400 text-xs hidden sm:inline">{exp.role}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Deep-Dive Card */}
        <div className="rounded-2xl bg-[#0a0e18] border border-white/[0.08] shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

          {/* Top Metadata Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {active.role}
                </h3>
                <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                  @ {active.company}
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold tracking-wider">
                  {active.statusBadge}
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base font-medium flex items-center gap-2">
                <Briefcase size={15} className="text-cyan-400" />
                <span>{active.product}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-300 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-xl self-start lg:self-auto">
              <Calendar size={15} className="text-cyan-400" />
              <span>{active.duration}</span>
            </div>
          </div>

          {/* Key Production Impact Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-white/[0.08]">
            {active.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                  {m.icon}
                </div>
                <div>
                  <div className="font-mono text-lg sm:text-xl font-bold text-white tracking-tight">
                    {m.val}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="py-5 border-b border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Production Stack Deployed:
            </div>
            <div className="flex flex-wrap gap-2">
              {active.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-3 py-1 rounded-lg bg-[#0e1424] text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Accomplishments Grid */}
          <div className="pt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold mb-4 flex items-center gap-2">
              <Terminal size={14} className="text-cyan-400" />
              <span>Key Architectural Deliverables & Impact</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {active.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all space-y-1.5"
                >
                  <div className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                    <ChevronRight size={15} className="text-cyan-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
