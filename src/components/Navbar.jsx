import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ExternalLink, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "#aboutme", num: "01" },
  { name: "Experience", href: "#experience", num: "02" },
  { name: "Projects", href: "#projects", num: "03" },
  { name: "Capabilities", href: "#services", num: "04" },
  { name: "Credentials", href: "#certificates", num: "05" },
  { name: "Contact", href: "#contact", num: "06" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "aboutme", "experience", "projects", "services", "certificates", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#090d16]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3 px-4 sm:px-6"
            : "bg-[#090d16]/50 backdrop-blur-md border border-white/[0.04] py-4 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Synthetic Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
              <Terminal size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border-2 border-[#090d16]"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  anup<span className="text-cyan-400">.dev</span>
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                  AVAILABLE // &lt;30 DAYS
                </span>
              </div>
              <span className="font-mono text-[10px] text-cyan-300 font-medium tracking-wider">
                AI & FULL-STACK ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-cyan-300 bg-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="font-mono text-[10px] text-cyan-500/80">{item.num}</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-1.5"
            >
              <span>Resume</span>
              <ExternalLink size={12} className="text-slate-400" />
            </a>

            <a
              href="#contact"
              className="relative group px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all flex items-center gap-1.5"
            >
              <Sparkles size={13} className="text-cyan-200" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.03] border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/[0.08] space-y-2">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] flex items-center gap-2 border border-transparent hover:border-white/[0.06]"
                >
                  <span className="font-mono text-[10px] text-cyan-400">{item.num}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-2 pt-2 border-t border-white/[0.06]">
              <a
                href="https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2 rounded-xl text-center font-mono text-xs font-medium text-slate-200 border border-white/10 bg-white/[0.04]"
              >
                Resume PDF ↗
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2 rounded-xl text-center text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
