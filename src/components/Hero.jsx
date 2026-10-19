import React, { useState } from "react";
import {
  FileText,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import toast from "react-hot-toast";
import AnupPhoto from "../assets/anup.jpg";

const RESUME_URL =
  "https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing";

const HIGHLIGHTS = [
  { value: "2+", label: "Years Experience", sub: "Production software" },
  { value: "-30%", label: "Voice Latency Cut", sub: "LiveKit & WebRTC" },
  { value: "100+", label: "Active Users", sub: "Twerz SaaS platform" },
  { value: "300+", label: "Problems Solved", sub: "LeetCode & Algorithms" },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anupchaurasiya81@gmail.com");
    setCopied(true);
    toast.success("anupchaurasiya81@gmail.com copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Introduction & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for new opportunities</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5">
              Anup Chaurasiya
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-400 mt-2">
                AI & Full-Stack Software Engineer
              </span>
            </h1>

            {/* Concise Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              I build production real-time voice AI systems, multi-agent RAG platforms,
              and scalable full-stack web applications. Currently engineering voice
              pipelines at <span className="text-white font-medium">Krut AI</span> and
              founding <span className="text-white font-medium">Twerz</span>.
            </p>

            {/* Core Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
              {[
                "Python",
                "FastAPI",
                "LiveKit",
                "WebRTC",
                "LangGraph",
                "Next.js",
                "React 19",
                "PostgreSQL",
                "Redis",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-white hover:bg-slate-100 transition shadow-sm"
              >
                <FileText size={16} />
                <span>View Resume</span>
                <ArrowUpRight size={14} className="text-slate-600" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition"
              >
                <Mail size={16} className="text-slate-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition cursor-pointer"
                title="Copy email"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://github.com/Anup-Chaurasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/anupchaurasiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/2021cs132/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode size={18} />
              </a>
              <a
                href="https://x.com/anupchaurasia73"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/[0.05] transition"
                aria-label="Twitter / X Profile"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://wa.me/916386009873"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-emerald-400 hover:bg-white/[0.05] transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile & Shipped Highlights */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl card-surface p-6 sm:p-7 space-y-6">
              {/* Photo & Snapshot Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/[0.08]">
                <img
                  src={AnupPhoto}
                  alt="Anup Chaurasiya"
                  className="w-16 h-16 rounded-xl object-cover ring-1 ring-white/10"
                />
                <div>
                  <h2 className="text-lg font-bold text-white">Anup Chaurasiya</h2>
                  <p className="text-xs text-slate-400">Based in Noida / Remote</p>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">
                    Full-time SDE & AI roles
                  </p>
                </div>
              </div>

              {/* Current Focus Areas */}
              <div className="space-y-3.5 text-xs">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Current Focus & Production Work
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Real-Time Voice AI</span>
                    <span className="text-[10px] text-slate-400">Krut AI</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    LiveKit & WebRTC audio streaming, VAD turn-taking, and OpenAI Realtime API cutting latency by 30%.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">SaaS Product Ownership</span>
                    <span className="text-[10px] text-slate-400">Twerz</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    AI career platform serving 100+ active job seekers. FastAPI microservices, Next.js, and Razorpay billing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Multi-Agent Systems & RAG</span>
                    <span className="text-[10px] text-slate-400">ResolveAI</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Autonomous support ops with LangGraph orchestration and high-dimensional Qdrant vector retrieval.
                  </p>
                </div>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl font-bold text-white">2+ Years</div>
                  <div className="text-[11px] text-slate-400">Production Experience</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl font-bold text-white">100+ PRs</div>
                  <div className="text-[11px] text-slate-400">Merged to Production</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl card-surface"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
