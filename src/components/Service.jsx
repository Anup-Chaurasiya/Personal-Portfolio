import React, { useState } from "react";
import { Code, Layers, Database, Monitor, CheckCircle, Bug } from "lucide-react"; 

const services = [
  {
    id: 1,
    title: "Software Developer",
    short: "Designing and developing efficient, scalable, and reliable software solutions.",
    full: "As a software developer, I build customized software applications tailored to client needs. From requirement gathering to deployment, I ensure high-quality code, strong architecture, and long-term maintainability.",
    icon: <Monitor size={36} className="text-green-400" />,
  },
  {
    id: 2,
    title: "Full-Stack Development",
    short: "Building end-to-end web applications with modern technologies.",
    full: "I specialize in creating seamless full-stack solutions by combining frontend and backend expertise. From UI/UX design to database management and API integrations, I deliver complete, production-ready applications.",
    icon: <Layers size={36} className="text-yellow-400" />,
  },
  {
    id: 3,
    title: "Backend Development",
    short: "Developing secure, scalable, and high-performance server-side applications.",
    full: "I focus on Node.js, Express, and databases (SQL & MongoDB) to build APIs, authentication systems, and business logic that power robust backend infrastructures.",
    icon: <Database size={36} className="text-purple-400" />,
  },
  {
    id: 4,
    title: "Frontend Development",
    short: "Creating interactive, user-friendly, and responsive interfaces.",
    full: "With React.js and modern frameworks, I design pixel-perfect, dynamic, and engaging frontends that provide users with smooth and responsive experiences across devices.",
    icon: <Code size={36} className="text-blue-400" />,
  },
  {
    id: 5,
    title: "Quality Assurance",
    short: "Ensuring bug-free, secure, and reliable applications.",
    full: "Through comprehensive manual and automated testing strategies, I identify issues early, improve performance, and maintain high software quality standards before release.",
    icon: <CheckCircle size={36} className="text-pink-400" />,
  },
  {
    id: 6,
    title: "Manual & Automation Testing",
    short: "Improving efficiency with Cypress and automation tools.",
    full: "I implement test automation frameworks using Cypress and other tools, ensuring faster release cycles, reduced errors, and consistent product reliability alongside detailed manual testing.",
    icon: <Bug size={36} className="text-red-400" />,
  },
];

const Service = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-16 sm:py-20" id="services">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700
              hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-800 mb-4 sm:mb-6 
                group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                {expanded === service.id ? service.full : service.short}
              </p>

              {/* Read More Button */}
              <button
                onClick={() => toggleExpand(service.id)}
                className="inline-block w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 
                text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-center"
              >
                {expanded === service.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
