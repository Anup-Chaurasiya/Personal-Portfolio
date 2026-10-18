import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import AnupPhoto from "../assets/anup.jpg";

const NAV_ITEMS = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About & Skills", href: "#aboutme" },
  { name: "Credentials", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1zD-sORJKZXDfBlIiRntyzI7DkFKAzodM/view?usp=sharing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "experience", "projects", "aboutme", "certificates", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#090a0f]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Home"
        >
          <img
            src={AnupPhoto}
            alt="Anup Chaurasiya"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20 group-hover:ring-white/40 transition"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white tracking-tight group-hover:text-slate-200 transition">
              Anup Chaurasiya
            </span>
            <span className="text-[11px] text-slate-400 font-normal">
              AI & Full-Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] transition"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} className="text-slate-400" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium text-black bg-white hover:bg-slate-100 transition shadow-sm"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0e16]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] transition"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-200 border border-white/10 bg-white/[0.04]"
            >
              <span>View Resume</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium text-black bg-white font-semibold"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
