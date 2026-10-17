import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Terminal,
  Copy,
  Check,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anupchaurasiya81@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!", {
      style: {
        background: "#090d16",
        color: "#38bdf8",
        border: "1px solid rgba(56, 189, 248, 0.3)",
      },
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_s31vlvi",
        "template_iwpzwtq",
        form.current,
        "N2LfBHdir3475BF_F"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message transmitted successfully. I'll respond within 24 hours!", {
            style: {
              background: "#090d16",
              color: "#4ade80",
              border: "1px solid rgba(74, 222, 128, 0.3)",
            },
          });
          form.current.reset();
        },
        () => {
          setLoading(false);
          toast.error("Transmission failed. Please email directly at anupchaurasiya81@gmail.com", {
            style: {
              background: "#090d16",
              color: "#f87171",
              border: "1px solid rgba(248, 113, 113, 0.3)",
            },
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative cyber-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
            <Terminal size={12} />
            <span>// 06. DIRECT COMMUNICATIONS CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiate Conversation &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              System Inquiries
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Available for high-impact software engineering roles, Voice AI architecture engagements, and production backend challenges.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Communication Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Operational Status Card */}
            <div className="rounded-2xl bg-[#0a0e18] border border-white/[0.08] p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  TELEMETRY DISPATCH
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Let's Build Something Exceptional
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Whether you're looking for an engineer to architect low-latency voice pipelines, scale production FastAPI backends, or drive technical SaaS execution — my inbox is open.
              </p>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-cyan-400" />
                  <span>SLA Response: &lt; 24h</span>
                </span>
                <span>Timezone: IST (UTC +5:30)</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy Trigger */}
              <div className="rounded-xl bg-[#0a0e18] border border-white/[0.08] hover:border-cyan-500/40 p-4 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Email Address</div>
                    <a
                      href="mailto:anupchaurasiya81@gmail.com"
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      anupchaurasiya81@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="rounded-xl bg-[#0a0e18] border border-white/[0.08] hover:border-emerald-500/40 p-4 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Direct / WhatsApp</div>
                    <a
                      href="tel:+916386009873"
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      +91 6386009873
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+916386009873"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-300 transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Location Card */}
              <div className="rounded-xl bg-[#0a0e18] border border-white/[0.08] p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Operating Base</div>
                  <div className="text-sm font-semibold text-white">Noida, Uttar Pradesh, India</div>
                  <div className="font-mono text-[10px] text-slate-400">Open to Remote / Hybrid / Relocation</div>
                </div>
              </div>
            </div>

            {/* Social Channels Network */}
            <div className="rounded-xl bg-[#0a0e18] border border-white/[0.08] p-4">
              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-3">
                Verified External Network:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/Anup-Chaurasiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <FaGithub size={14} className="text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anupchaurasiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-sky-500/30 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <FaLinkedin size={14} className="text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/2021cs132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-amber-500/30 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <SiLeetcode size={14} className="text-amber-400" />
                  <span>LeetCode</span>
                </a>
                <a
                  href="https://x.com/anupchaurasia73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <FaTwitter size={14} className="text-cyan-400" />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Synthetic Terminal Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#080c16] border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Form Terminal Bar */}
              <div className="px-5 py-3.5 bg-[#0c1220] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    dispatch@anup.dev:~$ ./send_message
                  </span>
                </div>
                <div className="font-mono text-[10px] text-cyan-400">TLS_ENCRYPTED</div>
              </div>

              {/* Form Body */}
              <form ref={form} onSubmit={sendEmail} className="p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-slate-300 font-medium">
                      01 // YOUR NAME <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d121f] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-slate-300 font-medium">
                      02 // EMAIL ADDRESS <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d121f] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-slate-300 font-medium">
                    03 // SUBJECT OR TOPIC
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Software Engineer Role / AI Voice Project"
                    className="w-full px-4 py-3 rounded-xl bg-[#0d121f] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-slate-300 font-medium">
                    04 // MESSAGE TRANSMISSION <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Provide context regarding the project, position, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0d121f] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <span className="font-mono text-[11px] text-slate-500">
                    Encrypted via EmailJS • Zero Spam
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
