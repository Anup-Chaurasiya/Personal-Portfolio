import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast"

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
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          I’d love to hear from you! Whether it’s a project idea, job
          opportunity, or just to say hi — feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Left Side: Contact Info */}
          <div className="flex-1 mt-4 md:mt-12">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500 mb-6"
            >
              Let’s Talk
            </h3>

            <div className="space-y-4">
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/20 transition">
                <FaEnvelope className="text-green-400 text-xl mr-3" />
                <a
                  href="mailto:anupchaurasiya81@gmail.com"
                  className="hover:underline"
                >
                  anupchaurasiya81@gmail.com
                </a>
              </div>

              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/20 transition">
                <FaPhone className="text-green-400 text-xl mr-3" />
                <span>+91 6386009873</span>
              </div>

              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-green-500/20 transition">
                <FaMapMarkedAlt className="text-green-400 text-xl mr-3" />
                <span>Crossing Republic, Noida, UP, India</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 
                  focus:outline-none focus:border-green-400 transition"
                  placeholder="Enter your name"
                required/>
              </div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Subject 
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 
                  focus:outline-none focus:border-green-400 transition"
                  placeholder="Enter your subject"
                />
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 
                  focus:outline-none focus:border-green-400 transition"
                  placeholder="Enter your email"
                required/>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 
                  focus:outline-none focus:border-green-400 transition"
                  rows="5"
                  placeholder="Enter your message"
                required/>
              </div>

              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full cursor-pointer'>Send Message</button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
