import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'  
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';


const App = () => {

  useEffect(() => {

    window.scrollTo(0, 0);

    if (window.location.hash) {
      history.replaceState(null, null, " ");
    }
  }, []);



  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Certificates />
      <Footer />
    </div>
  )
}

export default App
