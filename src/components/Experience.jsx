import React from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Founding Engineer",
    company: "Twerz",
    duration: "2026",
    status: "Live",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "LangChain", "Docker", "Redis", "Google OAuth", "Razorpay"],
    points: [
      "Founded and launched a production AI career SaaS used by 100+ job seekers to analyze job descriptions, tailor resumes, generate ATS-optimized PDF/DOCX resumes, and manage their job application pipeline.",
      "Engineered an evidence-grounded LLM pipeline for job analysis, resume tailoring, ATS scoring, and quality validation, preventing fabricated skills, experience, and achievements in AI-generated resumes.",
      "Designed scalable backend services with FastAPI, PostgreSQL, background workers, secure Google OAuth/JWT authentication, payment integration (Razorpay), cloud storage, and production monitoring.",
      "Built a Next.js web application and Chrome extension that automate job capture, generate role-specific applications, assist with application forms, create outreach messages, and track application progress.",
      "Developed 80+ automated tests covering AI workflows, API endpoints, and document rendering pipelines to ensure reliable resume tailoring across diverse job descriptions and edge cases."
    ]
  },
  {
    id: 2,
    role: "Full-Stack Software Engineer",
    company: "SkillMoksha & AI Projects",
    duration: "Present",
    status: "Live",
    technologies: ["Django", "React", "GraphQL", "Python", "TypeScript"],
    points: [
      "Built the complete AI candidate pipeline end-to-end — resume upload, LLM-based scoring, and automated interview scheduling — reducing manual recruiter effort by 60%.",
      "Engineered real-time AI voice interviews using LiveKit, integrating speech-to-text, LLM-driven interview orchestration, transcript generation, automated candidate evaluation, and interview summaries.",
      "Integrated object detection and real-time recording on interview sessions, enabling automated proctoring and flagging suspicious activity without human oversight.",
      "Implemented automated email reminder workflows using Celery Beat scheduler — candidates and recruiters receive timed reminders at 48h, 24h before scheduled interviews, reducing no-shows by 40%.",
      "Engineered scalable GraphQL APIs and REST endpoints for AI-powered hiring workflows, integrating LLMs and third-party communication services with response times under 200 ms.",
      "Developed async processing pipelines using Celery + Redis handling 100+ concurrent jobs — resume parsing, AI scoring, notifications."
    ]
  }
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20" id="experience">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">Experience</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {exp.role}
                  </h3>
                  <div className="flex items-center flex-wrap gap-2 mt-2 text-gray-300 text-base sm:text-lg">
                    <Briefcase size={18} className="text-gray-400" />
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded-full border border-gray-700 text-green-400">
                      {exp.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50 whitespace-nowrap w-fit">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{exp.duration}</span>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 flex-grow">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-400 leading-relaxed text-sm sm:text-base">
                    <ChevronRight size={20} className="text-green-400 mt-0.5 flex-shrink-0 mr-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
