import React from "react";
import { Terminal, ArrowUp, Activity, ShieldCheck, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-white/[0.08] text-slate-400 py-12 overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Operational Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal size={16} />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-white tracking-tight">
                anup<span className="text-cyan-400">.dev</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYS_STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Nav Quicklinks */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <span className="text-slate-600">•</span>
            <a href="#aboutme" className="hover:text-cyan-300 transition-colors">About</a>
            <span className="text-slate-600">•</span>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <span className="text-slate-600">•</span>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <span className="text-slate-600">•</span>
            <a href="#services" className="hover:text-cyan-300 transition-colors">Capabilities</a>
            <span className="text-slate-600">•</span>
            <a href="#certificates" className="hover:text-cyan-300 transition-colors">Credentials</a>
            <span className="text-slate-600">•</span>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-2 font-mono text-xs"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Middle Tier: Summary & Verified Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-slate-400 text-center md:text-left max-w-lg leading-relaxed">
            Software Engineer specializing in Production Voice AI, Distributed RAG Systems & Scalable Microservices. Architected with high fidelity and performance in mind.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Anup-Chaurasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0a0e18] hover:bg-[#12192c] border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/anupchaurasiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0a0e18] hover:bg-[#12192c] border border-white/10 hover:border-sky-500/40 text-slate-400 hover:text-sky-400 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://leetcode.com/u/2021cs132/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0a0e18] hover:bg-[#12192c] border border-white/10 hover:border-amber-500/40 text-slate-400 hover:text-amber-400 transition-all"
              aria-label="LeetCode"
            >
              <SiLeetcode size={16} />
            </a>
            <a
              href="https://x.com/anupchaurasia73"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0a0e18] hover:bg-[#12192c] border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Meta */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Anup Chaurasiya. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React 19 • TailwindCSS v4 • Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
