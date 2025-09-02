import React from "react";

// Example certificates array
const certificates = [

  {
    id: 1,
    title: "MERN Internship",
    issuer: "ABESIT",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1i2IFx4QwvgZ8AktDYRn_aR74cmEI500e/view",
  },
  {
    id: 2,
    title: "C++ Programming Language",
    issuer: "Udemy",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/13Lghr5kAzqU5aoLd7AKNz7_2TSK-YfAh/view",
  },
  {
    id: 3,
    title: "JavaScript Algorithms & CSS",
    issuer: "Udemy",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1AiOKc6IoxcgOuSl32m30-bnMrhGdnbPE/view",
  },
  {
    id: 4,
    title: "Java & Oops Training Program",
    issuer: "ABESIT",
    date: "Feb 2024",
    link: "https://drive.google.com/file/d/1cS7vG9_nvsLcWN926p33sIG7VdST7l6v/view",
  },
  {
    id: 5,
    title: "Backend Development",
    issuer: "Udemy",
    date: "Apr 2024",
    link: "https://drive.google.com/file/d/1NETVABmSyzGSRY5MNC_rXXAZiGyE3HGl/view",
  },
  {
    id: 6,
    title: "JavaScript Algorithms & CSS",
    issuer: "Udemy",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1AiOKc6IoxcgOuSl32m30-bnMrhGdnbPE/view",
  },
  {
    id: 7,
    title: "Python Programming Language",
    issuer: "Udemy",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1TBo_OXlOrkiejDWhpyD8RZvMKbF5CGqw/view",
  },
  {
    id: 8,
    title: "AI Beginner Course",
    issuer: "Simplilearn",
    date: "Feb 2025",
    link: "https://drive.google.com/file/d/1Y3nomMw5H_qDmDgorLv-nNXfCh4BBIVl/view",
  }
  
];

const Certificates = () => {
  return (
    <div className="bg-black text-white py-20" id="certificates">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700
              hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-2">Issued by: {cert.issuer}</p>
              <p className="text-gray-400 mb-4">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
