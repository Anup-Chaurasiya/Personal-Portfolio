import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s31vlvi",
        "template_iwpzwtq",
        form.current,
        "N2LfBHdir3475BF_F"
      )
      .then(
        (result) => {
          toast.success("✅ Message sent successfully!");
        },
        (error) => {
          toast.error("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white py-16 md:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base">
          I’d love to hear from you! Whether it’s a project idea, job
          opportunity, or just to say hi — feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-12 gap-8">
          {/* Left Side: Contact Info */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
              Let’s Talk
            </h3>

            <div className="space-y-4">
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/20 transition">
                <FaEnvelope className="text-green-400 text-xl mr-3" />
                <a href="mailto:anupchaurasiya81@gmail.com" className="hover:underline text-sm sm:text-base">
                  anupchaurasiya81@gmail.com
                </a>
              </div>

              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/20 transition">
                <FaPhone className="text-green-400 text-xl mr-3" />
                <span className="text-sm sm:text-base">+91 6386009873</span>
              </div>

              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/20 transition">
                <FaMapMarkedAlt className="text-green-400 text-xl mr-3" />
                <span className="text-sm sm:text-base">
                  Crossing Republic, Noida, UP, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-sm sm:text-base">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 transition text-sm sm:text-base"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="title" className="block mb-1 font-medium text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 transition text-sm sm:text-base"
                  placeholder="Enter your subject"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 transition text-sm sm:text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 transition text-sm sm:text-base"
                  rows="5"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white w-full sm:w-auto px-6 py-2 rounded-full hover:scale-105 transform transition-transform duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
