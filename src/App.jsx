import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
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
    <div className="min-h-screen bg-[#090a0f] text-slate-200 flex flex-col">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#111420",
            color: "#f1f5f9",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "13px",
          },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
