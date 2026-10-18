import React from "react";
import { ArrowUpRight, Award } from "lucide-react";

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
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Education & Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1.5 mb-3">
            Credentials & Training
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Coursework and formal certifications validating computer science
            fundamentals, backend development, and AI engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl card-surface p-6 flex flex-col justify-between space-y-4 hover:border-white/20 transition"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">
                    {cert.issuer}
                  </span>
                  <span>{cert.date}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400">{cert.field}</p>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition"
                >
                  <span>Verify Credential</span>
                  <ArrowUpRight size={13} className="text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
