import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './components/styles.css';
import ContactSection from './components/ContactSection';


const App = () => (
  <div>
    <Navbar />
    <About />
    <AboutSection />
    <Projects />
    {/* <Certifications /> */}
    <Skills />
    <ContactSection />  
    <Footer />
  </div>
);

export default App;
