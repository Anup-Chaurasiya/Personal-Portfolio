import React from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Krut AI",
    subtitle: "SkillMoksha — AI Hiring Platform",
    duration: "May 2025 – Present",
    status: "Live",
    technologies: ["Python", "Django", "LiveKit", "WebRTC", "OpenAI Realtime API", "Plivo", "Redis", "Celery", "PostgreSQL"],
    points: [
      "Built an end-to-end real-time AI voice interviewer using LiveKit, WebRTC, and OpenAI Realtime API, enabling candidates to speak naturally via live speech recognition and streamed voice output.",
      "Engineered conversational turn-taking with Voice Activity Detection (VAD), silence detection, transcript buffering, and interruption handling to prevent AI overlap.",
      "Built a backend-controlled interview orchestration engine tracking question state transitions (answer/skip/clarify), generating follow-ups while preserving contextual memory.",
      "Delivered a fault-tolerant voice/telephony backend using async WebSockets, Plivo audio streaming, and Redis concurrency control, cutting pipeline latency by 70% and no-shows by 40%.",
      "Built LLM-driven automated candidate evaluation with real-time object detection for proctoring, reducing recruiter effort by 75% and cutting time-to-shortlist from days to hours.",
      "Shipped async Celery & Redis pipelines handling 100+ concurrent background jobs for resume parsing, AI scoring, and timed reminders across 64+ merged pull requests."
    ]
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Upsellity AI",
    subtitle: "E-Commerce Growth & Upsell Platform",
    duration: "Jan 2025 – May 2025",
    status: "Completed",
    technologies: ["Node.js", "GraphQL", "React", "TypeScript", "Remix", "LLM", "Shopify Polaris"],
    points: [
      "Built Node.js backend services for an upsell/cross-sell application, including a configurable discount engine supporting product-level, cart-level, and conditional promotion rules.",
      "Integrated GraphQL APIs to sync product, discount, and order data in real time between backend services and merchant storefronts with sub-100ms response targets.",
      "Built the merchant dashboard using React, TypeScript, and Remix enabling merchants to launch marketing campaigns, run A/B tests, and track results without developer help.",
      "Engineered automated promotion rule validation and real-time storefront price calculation APIs handling high-concurrency merchant storefront traffic smoothly.",
      "Developed Shopify Polaris-based UI components for the merchant-facing app embedding, ensuring seamless UX consistency with the Shopify Admin design system.",
      "Integrated an LLM-powered product recommendation engine to auto-suggest contextually relevant upsell bundles based on cart contents, customer history, and purchase intent signals."
    ]
  },
  {
    id: 3,
    role: "Founding Engineer",
    company: "Twerz",
    subtitle: "AI Career SaaS Platform",
    duration: "Jun 2026 – Present",
    status: "Live",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "LangChain", "LiteLLM", "Docker", "Google OAuth", "Razorpay"],
    points: [
      "Founded and built a production AI career SaaS used by 100+ job seekers to analyze job descriptions, tailor resumes, score ATS fit, and track job applications.",
      "Engineered an evidence-grounded LLM pipeline for resume tailoring and ATS scoring with structured-output validation to prevent fabricated skills or experience.",
      "Designed scalable backend services with FastAPI, PostgreSQL, background workers, secure Google OAuth/JWT authentication, Razorpay payment processing, and system monitoring.",
      "Built a Next.js web application and Chrome extension automating job capture, role-specific application generation, outreach messages, and application pipeline tracking.",
      "Developed 150+ automated unit and integration tests covering AI workflows, document rendering, and billing APIs to ensure platform reliability."
    ]
  }
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20" id="experience">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Work Experience</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base">
          Proven track record in building production-grade AI platforms, real-time voice applications, and scalable full-stack SaaS solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-900 rounded-2xl p-6 sm:p-7 border border-gray-700 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex flex-col mb-4 gap-2">
                <div className="flex items-center justify-between">
                  <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30 font-semibold">
                    {exp.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400 bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700 text-xs font-medium">
                    <Calendar size={14} className="text-green-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-200 text-base font-semibold">
                    <Briefcase size={16} className="text-green-400" />
                    <span>{exp.company}</span>
                  </div>
                  {exp.subtitle && (
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{exp.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2.5 py-0.5 bg-gray-800 text-gray-300 rounded-md border border-gray-700 group-hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5 flex-grow">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-300 leading-relaxed text-xs sm:text-sm">
                    <ChevronRight size={16} className="text-green-400 mt-0.5 flex-shrink-0 mr-1.5" />
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
