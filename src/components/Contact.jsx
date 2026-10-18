import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
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
    toast.success("anupchaurasiya81@gmail.com copied to clipboard!");
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
          toast.success("Message sent successfully! I'll get back to you shortly.");
          form.current.reset();
        },
        () => {
          setLoading(false);
          toast.error("Failed to send message. Please email directly at anupchaurasiya81@gmail.com");
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1.5 mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Interested in working together or have an opportunity to discuss?
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl card-surface p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  I typically respond within 24 hours. Open to full-time engineering
                  roles and collaborative opportunities.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-slate-400" />
                    <div>
                      <div className="text-[11px] text-slate-400">Email</div>
                      <a
                        href="mailto:anupchaurasiya81@gmail.com"
                        className="text-white hover:text-slate-300 font-medium text-xs sm:text-sm"
                      >
                        anupchaurasiya81@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check size={15} className="text-emerald-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <Phone size={18} className="text-slate-400" />
                  <div>
                    <div className="text-[11px] text-slate-400">Phone / WhatsApp</div>
                    <a
                      href="https://wa.me/916386009873"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-slate-300 font-medium text-xs sm:text-sm"
                    >
                      +91 6386009873
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <MapPin size={18} className="text-slate-400" />
                  <div>
                    <div className="text-[11px] text-slate-400">Location</div>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      Noida / Bengaluru / Remote (India)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/[0.08]">
                <div className="text-xs text-slate-400 mb-3 font-medium">
                  Connect on Social Platforms
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/Anup-Chaurasiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anupchaurasiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={17} />
                  </a>
                  <a
                    href="https://leetcode.com/u/2021cs132/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition"
                    aria-label="LeetCode Profile"
                  >
                    <SiLeetcode size={17} />
                  </a>
                  <a
                    href="https://x.com/anupchaurasia73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition"
                    aria-label="Twitter Profile"
                  >
                    <FaTwitter size={17} />
                  </a>
                  <a
                    href="https://wa.me/916386009873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-emerald-400 border border-white/10 transition"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-2xl card-surface p-6 sm:p-8 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="user_name"
                    className="text-xs font-medium text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="user_email"
                    className="text-xs font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Role Opportunity / Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Hi Anup, I came across your work on real-time Voice AI and wanted to connect about..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-white/30 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-sm text-black bg-white hover:bg-slate-100 transition shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
