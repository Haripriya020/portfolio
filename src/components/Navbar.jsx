import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top-0 w-full backdrop-blur-xl bg-black/30 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-lg md:text-xl font-bold text-cyan-400">
          HARIPRIYA RB
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
             <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publication">Publication</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
       
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          <ul className="flex flex-col p-4 gap-4">

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            
            <li>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#publication" onClick={() => setMenuOpen(false)}>
                Publication
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#achievements" onClick={() => setMenuOpen(false)}>
                Achievements
              </a>
            </li>

            <li>
              <a href="#certifications" onClick={() => setMenuOpen(false)}>
                Certifications
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;