import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800 text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        
      <div className="text-2xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
  Anup Chaurasiya
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {["Home", "About Me", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transform transition-transform duration-300 hover:scale-105 px-5 py-2 rounded-full shadow-lg">
          Connect Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-8 py-6 space-y-4 text-center border-t border-gray-800">
          {["Home", "About Me", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block text-lg hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg">
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
