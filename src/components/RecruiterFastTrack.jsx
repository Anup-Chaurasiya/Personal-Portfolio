import React from "react";
import {
  FileText,
  Phone,
  Mail,
  Zap,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PILLARS = [
  {
    title: "1. Real-Time Voice AI (Rare Skillset)",
    highlight: "LiveKit • WebRTC • OpenAI Realtime • VAD",
    detail:
      "Engineered full duplex voice interviewer at Krut AI with low-latency turn-taking, interruption handling, and audio buffer flushing. Cut pipeline latency by 30%.",
  },
  {
    title: "2. Scalable Microservices & Distributed Queues",
    highlight: "FastAPI • Django • Redis • Celery • PostgreSQL",
    detail:
      "Designed asynchronous worker pipelines handling 100+ concurrent resume-parsing and evaluation jobs across 80+ merged production pull requests.",
  },
  {
    title: "3. Full-Stack SaaS Product Ownership",
    highlight: "Next.js • React 19 • TypeScript • Razorpay",
    detail:
      "Founded Twerz (production AI career platform serving 100+ active users) with anti-hallucination ATS scoring, OAuth, automated billing, and Chrome extension.",
  },
  {
    title: "4. Algorithmic Rigor & Software QA",
    highlight: "300+ DSA Problems • 150+ Automated Tests",
    detail:
      "Proven data structures and algorithmic foundation on LeetCode with 150+ automated unit and integration tests guaranteeing 99.9% deployment reliability.",
  },
];

const RecruiterFastTrack = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-br from-[#0c1322] via-[#090e18] to-[#070b14] border border-cyan-500/30 p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_-15px_rgba(6,182,212,0.25)] relative overflow-hidden">
        {/* Subtle Cyber Corner Badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>RECRUITER 30-SECOND FAST TRACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why I Am Ready to Deliver Immediate ROI on Day 1
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Targeting: <strong className="text-cyan-300">AI Engineer</strong> / <strong className="text-cyan-300">Full-Stack SDE-II</strong> Roles
            </p>
          </div>

          {/* Quick Snapshot Matrix */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono self-start md:self-auto">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-slate-400 block text-[10px]">NOTICE PERIOD:</span>
              <span className="text-emerald-400 font-bold">&lt; 30 Days (Immediate)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-slate-400 block text-[10px]">LOCATIONS:</span>
              <span className="text-white font-bold">Noida / BLR / Remote</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-white/[0.08]">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>{pillar.title}</span>
                </h3>
                <div className="font-mono text-[10px] text-cyan-300/90 font-semibold mt-1">
                  {pillar.highlight}
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mt-2">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Direct Connect Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>2+ Years Enterprise & Startup Track Record • 100+ Production Users</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              <span>Resume PDF</span>
            </a>

            <a
              href="https://wa.me/916386009873"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center gap-1.5"
            >
              <FaWhatsapp size={14} className="text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="#contact"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-1.5"
            >
              <Mail size={14} className="text-cyan-400" />
              <span>Email Channel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterFastTrack;
