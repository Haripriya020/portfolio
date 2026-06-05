import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publication from "./components/Publication";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen">
     <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

<div className="fixed bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publication />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;