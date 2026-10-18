import React from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const RESUME_URL =
  "https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand info */}
          <div>
            <div className="text-base font-bold text-white">
              Anup Chaurasiya
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              AI & Full-Stack Software Engineer
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <span className="text-slate-700">•</span>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <span className="text-slate-700">•</span>
            <a href="#aboutme" className="hover:text-white transition">
              About & Skills
            </a>
            <span className="text-slate-700">•</span>
            <a href="#certificates" className="hover:text-white transition">
              Credentials
            </a>
            <span className="text-slate-700">•</span>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Resume
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom copyright and socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Anup Chaurasiya. Built with React & TailwindCSS.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/Anup-Chaurasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/anupchaurasiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://leetcode.com/u/2021cs132/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LeetCode"
            >
              <SiLeetcode size={16} />
            </a>
            <a
              href="https://x.com/anupchaurasia73"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter / X"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://wa.me/916386009873"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
