import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  Copy,
  Check,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  ExternalLink,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import toast from "react-hot-toast";
import AnupPhoto from "../assets/anup.jpg";

const TELEMETRY_TABS = [
  { id: "recruiter", label: "01 // RECRUITER HUD" },
  { id: "voice", label: "02 // VOICE AI PIPELINE" },
  { id: "production", label: "03 // METRICS & SAAS" },
];

const METRICS = [
  { value: "2+", label: "Years in Production", sub: "Enterprise & Venture" },
  { value: "-70%", label: "Voice Pipeline Latency", sub: "LiveKit & WebRTC" },
  { value: "100+", label: "Active SaaS Users", sub: "Twerz Career Platform" },
  { value: "300+", label: "DSA Problems Solved", sub: "LeetCode & Algorithms" },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("recruiter");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anupchaurasiya81@gmail.com");
    setCopied(true);
    toast.success("anupchaurasiya81@gmail.com copied to clipboard!", {
      style: {
        background: "#090d16",
        color: "#38bdf8",
        border: "1px solid rgba(56, 189, 248, 0.3)",
      },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center cyber-grid overflow-hidden"
    >
      {/* Ambient Cybernetic Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Positioning & Immediate Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Instant Hook Badge for Recruiters & Hiring Managers */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-400/40 text-cyan-300 font-mono text-xs tracking-wider mb-5 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-bold text-emerald-300">ACTIVELY INTERVIEWING</span>
              <span className="text-slate-500">|</span>
              <span className="text-white font-medium">AVAILABLE WITHIN 15-30 DAYS</span>
            </motion.div>

            {/* Main Headline — Instant Recognition of Role & Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 mb-4"
            >
              <div className="font-mono text-sm uppercase tracking-widest text-cyan-400 font-bold">
                HI, I'M ANUP CHAURASIYA
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                AI Engineer &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  Full-Stack Engineer
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typed Sub-Headline — Exact High-Value Tech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-base sm:text-lg text-slate-300 mb-5 flex flex-wrap items-center gap-2"
            >
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-slate-400">Shipping:</span>
              <span className="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-4">
                <ReactTyped
                  strings={[
                    "Real-Time Voice AI (LiveKit + WebRTC)",
                    "Multi-Agent RAG (LangGraph + Qdrant)",
                    "Scalable FastAPI & Django Microservices",
                    "Production Next.js & React 19 Full-Stack SaaS",
                    "High-Throughput GraphQL Engines & Polaris"
                  ]}
                  typeSpeed={45}
                  backSpeed={25}
                  backDelay={2000}
                  loop
                  showCursor
                  cursorChar="▌"
                />
              </span>
            </motion.div>

            {/* 3-Second Recruiter Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 rounded-xl bg-[#0a0e18]/90 border border-cyan-500/20 max-w-2xl mb-6 shadow-lg space-y-2 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-start gap-2">
                <Zap size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">AI Engineering:</strong> Shipped end-to-end real-time AI voice interviewer at <strong className="text-cyan-300">Krut AI</strong> using LiveKit, WebRTC, and OpenAI Realtime API cutting latency by 70%. Built autonomous support ops platform (<strong className="text-cyan-300">ResolveAI</strong>) with LangGraph & Qdrant vector retrieval.
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-white/[0.04]">
                <Briefcase size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Full-Stack SaaS Ownership:</strong> Founded <strong className="text-cyan-300">Twerz</strong> (AI Career SaaS serving 100+ active job seekers, FastAPI + PostgreSQL + Next.js + Razorpay). 2+ years of production engineering experience with 80+ merged pull requests.
                </div>
              </div>
            </motion.div>

            {/* Core Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-1.5 mb-7 max-w-2xl"
            >
              {["Python", "FastAPI", "LiveKit", "WebRTC", "LangGraph", "Qdrant", "React 19", "Next.js", "PostgreSQL", "Redis", "Celery", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* High-Converting Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full"
            >
              {/* Primary Resume CTA */}
              <a
                href="https://drive.google.com/file/d/1icnz3OnGTZvUtFtMNext3VMSKfOc5nKe/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText size={17} />
                <span>DOWNLOAD RESUME (PDF)</span>
                <ExternalLink size={13} className="text-cyan-200" />
              </a>

              {/* Hire Me CTA */}
              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0d121f] hover:bg-[#131b2e] border border-cyan-500/40 hover:border-cyan-400 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Mail size={15} className="text-cyan-400" />
                <span>Hire Me / Email</span>
              </a>

              {/* Direct WhatsApp Call */}
              <a
                href="https://wa.me/916386009873"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl font-mono text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-center gap-2"
                title="Direct WhatsApp"
              >
                <FaWhatsapp size={16} className="text-emerald-400" />
                <span>+91 6386009873</span>
              </a>

              {/* Copy Email Fast Button */}
              <button
                onClick={copyEmail}
                className="p-3.5 rounded-xl text-slate-300 hover:text-white bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-slate-500 transition-all cursor-pointer"
                title="Copy Email"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>

              {/* Social Channels Dock */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/Anup-Chaurasiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-white bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anupchaurasiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-sky-400 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-sky-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={17} />
                </a>
                <a
                  href="https://leetcode.com/u/2021cs132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-amber-400 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-amber-500/40 transition-all"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={17} />
                </a>
                <a
                  href="https://x.com/anupchaurasia73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-cyan-400 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-cyan-500/40 transition-all"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter size={17} />
                </a>
              </div>
            </motion.div>

            {/* Impact Metric Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 border-t border-white/[0.08]"
            >
              {METRICS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#090e18]/70 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
                >
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-1">
                    <span className="text-cyan-400">{item.value}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{item.label}</div>
                  <div className="font-mono text-[10px] text-slate-400">{item.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Synthetic Recruiter HUD & Engineer Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Holographic Glowing Backdrop */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-60" />

            <div className="relative rounded-2xl bg-[#080c16]/95 border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Console Top Bar */}
              <div className="px-4 py-3 bg-[#0c1220] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 tracking-tight">
                    recruiter_hud@anup-prod:~$
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                  <Activity size={10} className="animate-spin text-emerald-400" />
                  <span>READY FOR HIRE</span>
                </div>
              </div>

              {/* Console Tab Selector */}
              <div className="flex border-b border-white/[0.08] bg-[#070a13]">
                {TELEMETRY_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 font-mono text-[11px] tracking-wide transition-all border-b-2 cursor-pointer ${
                      activeTab === tab.id
                        ? "border-cyan-400 text-cyan-300 bg-white/[0.04] font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Console Body Content */}
              <div className="p-5 font-mono text-xs space-y-4 min-h-[380px] flex flex-col justify-between">
                {activeTab === "recruiter" && (
                  <div className="space-y-3.5">
                    {/* Engineer Profile Card */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="relative">
                        <img
                          src={AnupPhoto}
                          alt="Anup Chaurasiya"
                          className="w-16 h-16 rounded-xl object-cover border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        />
                        <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#090d16]" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-white font-bold text-sm">Anup Chaurasiya</div>
                        <div className="text-cyan-400 text-xs font-semibold">AI & Full-Stack Engineer</div>
                        <div className="text-slate-400 text-[10px]">2+ Years Production Experience</div>
                        <div className="text-slate-400 text-[10px]">Noida / Bengaluru / Remote</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-slate-300">
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">TARGET_ROLES:</span>
                        <span className="text-cyan-300 font-semibold">AI Engineer / Full-Stack SDE-II</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">AVAILABILITY:</span>
                        <span className="text-emerald-300 font-semibold">Immediate / 15-30 Days</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">AI_SPECIALTY:</span>
                        <span className="text-slate-200 font-medium">LiveKit, WebRTC, LangGraph, Qdrant</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">BACKEND_SPECIALTY:</span>
                        <span className="text-slate-200 font-medium">FastAPI, Django, Redis, Celery, Postgres</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">FRONTEND_CORE:</span>
                        <span className="text-slate-200 font-medium">React 19, Next.js, TypeScript, Remix</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">CONTACT_FAST:</span>
                        <span className="text-emerald-400 font-semibold">+91 6386009873 (WhatsApp)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "voice" && (
                  <div className="space-y-3">
                    <div className="text-cyan-400 font-semibold text-[11px] flex items-center gap-1.5">
                      <Cpu size={14} />
                      <span>REAL-TIME VOICE AI SYSTEM ARCHITECTURE</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
                        <span className="text-slate-300">01. Live Audio Streaming</span>
                        <span className="text-emerald-400 font-semibold">WebRTC / LiveKit</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-blue-950/20 border border-blue-500/20 flex items-center justify-between">
                        <span className="text-slate-300">02. Turn-Taking & Interruption</span>
                        <span className="text-cyan-400 font-semibold">VAD + Buffer Flush</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
                        <span className="text-slate-300">03. Realtime Synthesis</span>
                        <span className="text-purple-400 font-semibold">OpenAI Realtime API</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                        <span className="text-slate-300">04. Background Orchestration</span>
                        <span className="text-emerald-400 font-semibold">Celery & Redis (100+ Jobs)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "production" && (
                  <div className="space-y-3">
                    <div className="text-cyan-400 font-semibold text-[11px] flex items-center gap-1.5">
                      <Layers size={14} />
                      <span>PRODUCTION COMMERCE & SAAS RESULTS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-cyan-400 block font-bold">Twerz SaaS</span>
                        <span className="text-slate-300">100+ Job Seekers, FastAPI, Next.js, ATS Scoring</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-emerald-400 block font-bold">Krut AI Voice</span>
                        <span className="text-slate-300">-70% Latency, -75% Recruiter Screening Effort</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-blue-400 block font-bold">Upsellity Platform</span>
                        <span className="text-slate-300">Sub-100ms API, GraphQL, Shopify Polaris</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-purple-400 block font-bold">Quality & DSA</span>
                        <span className="text-slate-300">150+ Automated Tests, 300+ Solved Problems</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terminal Bottom Telemetry Line */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-slate-400 text-[10px]">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck size={12} /> PRODUCTION VERIFIED
                  </span>
                  <a
                    href="https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Resume PDF ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
