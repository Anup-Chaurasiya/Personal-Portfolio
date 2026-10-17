import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash) {
      history.replaceState(null, null, " ");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#080c16",
            color: "#f1f5f9",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
          },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Service />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
