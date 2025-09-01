import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-10">
          {/* Left: About */}
          <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Anup
            </h3>
            <p className="text-gray-400 max-w-md">
              Full-Stack Developer passionate about building modern, scalable
              and user-friendly web applications.
            </p>
          </div>

          {/* Right: Newsletter */}
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center md:justify-end">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-2/3 lg:w-1/2 p-3 rounded-l-full bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400 transition"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-6 
                py-3 rounded-r-full hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Anup Chaurasiya. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-green-400 transition text-xl">
              <FaFacebook />
            </a>
            <a href="https://x.com/anupchaurasia73" className="text-gray-400 hover:text-blue-400 transition text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/anupchaurasiya/" className="text-gray-400 hover:text-blue-500 transition text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Anup-Chaurasiya" className="text-gray-400 hover:text-white transition text-xl">
              <FaGithub />
            </a>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
