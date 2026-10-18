import React from "react";
import {
  Mic,
  Server,
  Database,
  Layout,
  GitBranch,
  Code2,
} from "lucide-react";
import aboutImg from "../assets/about.jpg";

const SKILL_DOMAINS = [
  {
    title: "Real-Time Voice AI & Agentic LLMs",
    icon: <Mic size={18} className="text-slate-300" />,
    skills: [
      "LiveKit",
      "WebRTC",
      "OpenAI Realtime API",
      "LangGraph",
      "LangChain",
      "Voice Activity Detection (VAD)",
      "Structured Output Validation",
      "Prompt Engineering",
      "Function Calling",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    icon: <Server size={18} className="text-slate-300" />,
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "Express.js",
      "Celery Workers",
      "Redis Concurrency",
      "WebSockets",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    title: "Vector Search & Databases",
    icon: <Database size={18} className="text-slate-300" />,
    skills: [
      "Qdrant Vector DB",
      "PostgreSQL",
      "pgvector",
      "Redis Caching",
      "MongoDB",
      "MySQL",
      "Vector Indexing",
      "Schema Design",
    ],
  },
  {
    title: "Frontend & Full-Stack Architecture",
    icon: <Layout size={18} className="text-slate-300" />,
    skills: [
      "React 19",
      "Next.js",
      "TypeScript",
      "JavaScript (ESNext)",
      "Remix",
      "TailwindCSS",
      "Shopify Polaris",
      "Framer Motion",
    ],
  },
  {
    title: "DevOps, Systems & QA",
    icon: <GitBranch size={18} className="text-slate-300" />,
    skills: [
      "Docker",
      "Git & GitHub Actions",
      "Linux Systems",
      "PyTest & Automated Testing",
      "CI/CD Pipelines",
      "Razorpay & Stripe Integrations",
    ],
  },
];

const About = () => {
  return (
    <section id="aboutme" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Background & Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1.5 mb-3">
            About & Technical Stack
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Bridging conversational Voice AI and multi-agent LLM systems with
            resilient backend services and modern web applications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Portrait & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden card-surface p-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={aboutImg}
                  alt="Anup Chaurasiya"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-2xl card-surface p-6 space-y-3.5 text-sm text-slate-300 leading-relaxed">
              <h3 className="text-base font-bold text-white">
                Engineering Approach
              </h3>
              <p>
                I have 2+ years of production experience building software that
                demands real-time responsiveness, strict schema compliance, and
                high concurrency.
              </p>
              <p className="text-slate-400">
                At Krut AI, I engineered conversational turn-taking, audio
                streaming buffers, and interruption detection for our live voice
                interviewer. At Twerz, I architected our full-stack platform
                from scratch, serving active job seekers with anti-hallucination
                ATS scoring and subscription billing.
              </p>
              <p className="text-slate-400">
                I prioritize simple, maintainable architecture over unnecessary
                complexity, backed by comprehensive automated test suites and
                thoughtful monitoring.
              </p>
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills */}
          <div className="lg:col-span-7 space-y-4">
            {SKILL_DOMAINS.map((domain, idx) => (
              <div
                key={idx}
                className="rounded-2xl card-surface p-5 sm:p-6 space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-white/[0.04] text-slate-200">
                    {domain.icon}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {domain.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.07]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
