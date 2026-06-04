function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-cyan-400">
          HARIPRIYA RB
        </h1>

        <ul className="flex gap-6 text-sm">

  <li><a href="#about">About</a></li>

  <li><a href="#skills">Skills</a></li>

  <li><a href="#projects">Projects</a></li>

  <li><a href="#publication">Publication</a></li>

  <li><a href="#experience">Experience</a></li>

  <li><a href="#achievements">Achievements</a></li>

  <li><a href="#certifications">Certifications</a></li>

  <li><a href="#contact">Contact</a></li>

</ul>

      </div>
    </nav>
  )
}

export default Navbar