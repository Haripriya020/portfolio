import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
<section className="relative z-50 min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-6 pt-32">
      <div className="text-center md:text-left">

        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          HARIPRIYA RB
        </h1>

        <p className="text-xl text-cyan-400 font-semibold mb-4">
          • Full Stack Developer • IEEE Author
        </p>

        <p className="max-w-2xl text-slate-300">
          IEEE Published Researcher and Computer Science Engineer
          passionate about AI, Web Development and Innovative Solutions.
          Enthusiast to get challenged with technology and create
          impactful solutions.
        </p>

    <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

  <a
    href="#projects"
    className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-cyan-500 px-6 py-3 rounded-lg"
  >
    Contact Me
  </a>

  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold text-white"
  >
    Download Resume
  </a>

</div>

        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">

          <a
            href="https://github.com/Haripriya020"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 border border-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/haripriya-rb-a79b93230"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 border border-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div>
        <img
          src={profile}
          alt="Haripriya"
          className="w-72 h-72 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
        />
      </div>

    </section>
  );
}

export default Hero;