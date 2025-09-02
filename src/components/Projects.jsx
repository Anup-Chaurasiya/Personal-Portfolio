import React from "react";
import blog from "../assets/blog.avif"
import jobImage from "../assets/seeking.jpg"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import tracking from "../assets/tracking.avif"
import text from "../assets/text.jpg"
import testing from "../assets/testing.webp"


const projects = [
    {
        id: 1,
        name: "AI Blog Application",
        technologies: "MERN Stack, Gemini AI",
        image: blog,
        github: "https://github.com/Anup-Chaurasiya/AI-Blog-Application/tree/main",
        live: "https://ai-blog-application-anup.vercel.app/",
    },
    {
        id: 2,
        name: "Job Seeking Application",
        technologies: "MERN Stack",
        image: jobImage,
        github: "https://github.com/Anup-Chaurasiya/Job-Seeking-portal/tree/main",
        live: "https://job-seeking-portal-anup.vercel.app/",
    },
    {
        id: 3,
        name: "AI Code Reviewer",
        technologies: "MERN Stack, Gemini AI",
        image: image1,
        github: "https://github.com/Anup-Chaurasiya/AI-Powered-Code-Reviewer/tree/main",
        live: "https://ai-powered-code-reviewer-anupchaura.vercel.app/",
    },
      {
        id: 4,
        name: "Personal Portfolio",
        technologies: "React, Tailwind CSS",
        image: image2,
        github: "https://github.com/Anup-Chaurasiya/Personal-Portfolio/tree/main",
        live: "https://personal-portfolio-a-self.vercel.app/",
    },
    {
        id: 5,
        name: "Real-Time Device Tracker",
        technologies: "Node.js, Socket.io",
        image: tracking,
        github: "https://github.com/Anup-Chaurasiya/Real-Time-Device-Tracker",
        live: "https://real-time-device-tracker-hv9u.onrender.com/",
    },
    {
        id: 6,
        name: "Hider Application",
        technologies: "React, Tailwind CSS",
        image: text,
        github: "https://github.com/Anup-Chaurasiya/Assignment-projects",
        live: "https://hider-projects.vercel.app/",
    },
    {
        id: 7,
        name: "Enterprise-HRMS",
        technologies: "Manual & Automation Testing",
        image: testing,
        github: "https://github.com/Anup-Chaurasiya/Enterprise-HRMS-Automation-Project-Manual-Testing",
        live: "https://github.com/Anup-Chaurasiya/Enterprise-HRMS-Automation-Project-Manual-Testing",

    }
];


const Projects = () => {
    return (
        <div className="bg-black text-white py-20" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                        transform transition-transform duration-300 hover:scale-105">
                             <img src={project.image} alt={project.name} className="rounded-lg mb-4 
                             w-full h-48 object-cover" />
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.technologies}</p>
                            <div className="space-x-2">
                                <a
                                    href={project.live}
                                    className="inline-block bg-gradient-to-r 
                                    from-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow-md hover:opacity-90 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live
                                </a>

                                <a
                                    href={project.github}
                                    className="inline-block bg-gradient-to-r 
                                     from-gray-700 to-black text-white px-4 py-2 rounded-full shadow-md hover:opacity-90 transition ml-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;