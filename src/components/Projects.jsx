function Projects() {

  const projects = [
   {
  title: "EchoBot",
  tech: "Python • YOLOv8 • OpenCV • Dialogflow",
  desc: "Voice-enabled chatbot for real-time object detection and navigation for visually impaired users.",
  demo: null,
  github: null,
  featured: true
},
    {
      title: "Internship Management System",
      tech: "Flask • SQLite • Python",
      desc: "Student registration, internship application and tracking system.",
      demo: "https://haripriya02020.pythonanywhere.com",
      github: "https://github.com/Haripriya020/internship_management_system",
      featured: false
    },
    {
      title: "Photography Booking Website",
      tech: "HTML • CSS • PHP • MySQL",
      desc: "Portfolio and booking platform for photography services.",
      demo: "https://priyaphotography.site.je",
      github: "https://github.com/Haripriya020/photography",
      featured: false
    },
    {
  title: "Complaint Guidance System",
  tech: "Python Kivy",
  desc: "Desktop application for complaint filing and tracking.",
  demo: null,
  github: "https://github.com/Haripriya020/Compliance-portals",
  featured: false
},
    {
      title: "Personal Portfolio Website",
      tech: "React • Tailwind CSS • GitHub Pages",
      desc: "Modern responsive portfolio showcasing projects, skills, publications, certifications and professional experience.",
      demo: "https://haripriya020.github.io/portfolio/",
      github: "https://github.com/Haripriya020/portfolio",
      featured: false
    }
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >

      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500"
          >

            {project.featured && (
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ⭐ Featured Project
              </span>
            )}

            <h3 className="text-2xl font-bold mt-4 mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-cyan-400 mb-3">
              {project.tech}
            </p>

            <p className="text-slate-300 mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-4">

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition duration-300"
    >
      Live Demo
    </a>
  )}

  {project.github && project.github !== "#" && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-cyan-400 px-5 py-2 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
    >
      GitHub
    </a>
  )}

</div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;