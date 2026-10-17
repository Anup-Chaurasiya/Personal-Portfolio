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
  Code2,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import toast from "react-hot-toast";
import AnupPhoto from "../assets/anup.jpg";

const TELEMETRY_TABS = [
  { id: "overview", label: "01 // DIAGNOSTICS" },
  { id: "pipelines", label: "02 // LIVE PIPELINE" },
  { id: "stack", label: "03 // CORE ARTIFACTS" },
];

const METRICS = [
  { value: "1.8+", label: "Years in Production", sub: "Enterprise & Venture" },
  { value: "70%", label: "Latency Cut", sub: "WebRTC Audio Pipeline" },
  { value: "100+", label: "Active SaaS Users", sub: "Twerz Career Engine" },
  { value: "300+", label: "DSA Problems Solved", sub: "LeetCode & Codeforces" },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("overview");
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

          {/* Left Column: Positioning & Call-To-Action (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Live Operational Beacon */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold text-emerald-300">SYS.ONLINE</span>
              <span className="text-slate-500">|</span>
              <span>SOFTWARE ENGINEER @ KRUT AI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5"
            >
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Production Voice AI
              </span>
              , Distributed RAG & Scalable Systems.
            </motion.h1>

            {/* Dynamic Typed Sub-Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-mono text-base sm:text-lg text-slate-300 mb-6 flex flex-wrap items-center gap-2"
            >
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-slate-400">Engineering:</span>
              <span className="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-4">
                <ReactTyped
                  strings={[
                    "Real-Time Voice AI (LiveKit + WebRTC)",
                    "Evidence-Grounded RAG (LangGraph + Qdrant)",
                    "FastAPI Microservices & Celery Queues",
                    "Production AI SaaS Architecture (Twerz)",
                    "High-Concurrency GraphQL Engines (Shopify)"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop
                  showCursor
                  cursorChar="▌"
                />
              </span>
            </motion.div>

            {/* Professional Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            >
              Full-Stack Software Engineer with <strong className="text-slate-200 font-semibold">1.8+ years of production experience</strong> building real-time voice interviewers with LiveKit, stateful RAG support platforms with LangGraph & Qdrant, and production SaaS backends serving live users.
            </motion.p>

            {/* Action Buttons & Social Dock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View Production Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-mono text-sm font-medium text-slate-200 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Resume PDF</span>
                <ExternalLink size={12} className="text-slate-500" />
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} className="text-slate-400" />
                )}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>

              {/* Verified Social Handles */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/Anup-Chaurasiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-white bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anupchaurasiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-sky-400 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-sky-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/2021cs132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-amber-400 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-amber-500/40 transition-all"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={18} />
                </a>
                <a
                  href="https://x.com/anupchaurasia73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-cyan-400 bg-[#0d121f] hover:bg-[#131b2e] border border-white/10 hover:border-cyan-500/40 transition-all"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </motion.div>

            {/* Impact Metric Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 border-t border-white/[0.08]"
            >
              {METRICS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#090e18]/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
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

          {/* Right Column: Synthetic Telemetry Console HUD (5 Cols) */}
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
                    telemetry@anup-prod:~$
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                  <Activity size={10} className="animate-spin text-emerald-400" />
                  <span>99.98% UPTIME</span>
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
              <div className="p-5 font-mono text-xs space-y-4 min-h-[360px] flex flex-col justify-between">
                {activeTab === "overview" && (
                  <div className="space-y-4">
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
                        <div className="text-cyan-400 text-[11px]">Software Engineer @ Krut AI</div>
                        <div className="text-slate-400 text-[10px]">Ex-Upsellity AI • Founding Eng @ Twerz</div>
                        <div className="text-slate-400 text-[10px]">Noida, India (UTC +5:30)</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-slate-300">
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">ROLE_TARGET:</span>
                        <span className="text-cyan-300 font-semibold">SDE-II / AI Systems Engineer</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">SPECIALIZATION:</span>
                        <span className="text-emerald-300">Voice AI • RAG • Distributed Backends</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">VOICE_STACK:</span>
                        <span className="text-slate-200">LiveKit, WebRTC, OpenAI Realtime, VAD</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/[0.04]">
                        <span className="text-slate-400">BACKEND_CORE:</span>
                        <span className="text-slate-200">FastAPI, Django, Redis, Celery, PostgreSQL</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">RAG_OPS:</span>
                        <span className="text-slate-200">LangGraph, Qdrant Vector DB, pgvector</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "pipelines" && (
                  <div className="space-y-3">
                    <div className="text-cyan-400 font-semibold text-[11px] flex items-center gap-1.5">
                      <Cpu size={14} />
                      <span>REAL-TIME VOICE AI PIPELINE (KRUT AI)</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
                        <span className="text-slate-300">01. WebRTC Ingestion</span>
                        <span className="text-emerald-400 font-semibold">&lt;50ms latency</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-blue-950/20 border border-blue-500/20 flex items-center justify-between">
                        <span className="text-slate-300">02. VAD & Silence Turn-Taking</span>
                        <span className="text-cyan-400 font-semibold">Buffer Flush Active</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/20 flex items-center justify-between">
                        <span className="text-slate-300">03. OpenAI Realtime Audio Out</span>
                        <span className="text-purple-400 font-semibold">Full Duplex</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                        <span className="text-slate-300">04. Async Celery Eval + Proctoring</span>
                        <span className="text-emerald-400 font-semibold">100+ Jobs</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-3">
                    <div className="text-cyan-400 font-semibold text-[11px] flex items-center gap-1.5">
                      <Layers size={14} />
                      <span>PRODUCTION CAPABILITIES & SYSTEMS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-cyan-400 block font-semibold">Twerz SaaS</span>
                        <span className="text-slate-300">100+ Users, Next.js, FastAPI, ATS Engine</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-emerald-400 block font-semibold">ResolveAI Ops</span>
                        <span className="text-slate-300">FastAPI, LangGraph, Qdrant Vector DB</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-blue-400 block font-semibold">Upsellity Platform</span>
                        <span className="text-slate-300">GraphQL, Shopify Polaris, Sub-100ms API</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-purple-400 block font-semibold">DSA & Reliability</span>
                        <span className="text-slate-300">300+ Solved, 150+ Automated Tests</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terminal Bottom Telemetry Line */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-slate-400 text-[10px]">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck size={12} /> VERIFIED PRODUCTION LOG
                  </span>
                  <span>PID: 5490 • REV: 2.1</span>
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
