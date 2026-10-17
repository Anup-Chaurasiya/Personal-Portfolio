import React from "react";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Terminal,
  CheckCircle,
} from "lucide-react";

const CERTIFICATES = [
  {
    id: 1,
    title: "MERN Stack Full-Stack Training",
    issuer: "ABESIT",
    date: "Aug 2024",
    field: "Full-Stack Web Development",
    link: "https://drive.google.com/file/d/1i2IFx4QwvgZ8AktDYRn_aR74cmEI500e/view",
  },
  {
    id: 2,
    title: "Backend Development Specialization",
    issuer: "Udemy",
    date: "Apr 2024",
    field: "API Architecture & Databases",
    link: "https://drive.google.com/file/d/1NETVABmSyzGSRY5MNC_rXXAZiGyE3HGl/view",
  },
  {
    id: 3,
    title: "AI Practitioner & Foundations",
    issuer: "Simplilearn",
    date: "Feb 2025",
    field: "Artificial Intelligence & LLMs",
    link: "https://drive.google.com/file/d/1Y3nomMw5H_qDmDgorLv-nNXfCh4BBIVl/view",
  },
  {
    id: 4,
    title: "Java & Object-Oriented Programming",
    issuer: "ABESIT",
    date: "Feb 2024",
    field: "OOP & Systems Design",
    link: "https://drive.google.com/file/d/1cS7vG9_nvsLcWN926p33sIG7VdST7l6v/view",
  },
  {
    id: 5,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Udemy",
    date: "Oct 2023",
    field: "Algorithms & Problem Solving",
    link: "https://drive.google.com/file/d/1AiOKc6IoxcgOuSl32m30-bnMrhGdnbPE/view",
  },
  {
    id: 6,
    title: "Python Programming Language Mastery",
    issuer: "Udemy",
    date: "Dec 2022",
    field: "Core Python & Scripting",
    link: "https://drive.google.com/file/d/1TBo_OXlOrkiejDWhpyD8RZvMKbF5CGqw/view",
  },
  {
    id: 7,
    title: "C++ Programming & Algorithms",
    issuer: "Udemy",
    date: "Dec 2022",
    field: "Systems & DSA",
    link: "https://drive.google.com/file/d/13Lghr5kAzqU5aoLd7AKNz7_2TSK-YfAh/view",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 lg:py-28 relative cyber-grid">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
            <Terminal size={12} />
            <span>// 05. VERIFIED CREDENTIALS & TRAININGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Accreditations &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Verified Certifications
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Institutional certifications validating expertise in backend architecture, AI foundations, and data structures.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-[#0a0e18] border border-white/[0.08] hover:border-cyan-500/40 p-6 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-md font-medium">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span>VERIFIED</span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title & Field */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-3">
                  {cert.field}
                </p>

                {/* Issuer Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono text-xs text-slate-300 mb-6">
                  Issued by: <strong className="text-white">{cert.issuer}</strong>
                </div>
              </div>

              {/* View Certificate Link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Verify Credential PDF</span>
                  <ExternalLink size={13} />
                </a>
                <Award size={16} className="text-slate-600 group-hover:text-cyan-400/80 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
