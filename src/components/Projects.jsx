function Projects() {
  const projects = [
    {
      title: "EchoBot",
      type: "Android Application",
      tech: "Java • XML • Android • Gemini API • TensorFlow Lite • CameraX",
      desc: "Designed and built an assistive Android application integrating the Gemini API for AI-powered voice interaction and TensorFlow Lite (TFLite) for on-device real-time object detection, using CameraX for camera processing to support visually impaired users.",
      github: null,
      demo: null,
      featured: true,
    },

    {
      title: "Internship Management System",
      type: "Web Application",
      tech: "HTML • CSS • JavaScript • PHP • MySQL • Selenium WebDriver",
      desc: "Built a web-based platform for student registration, internship application management, tracking, and company-side processing. Performed functional testing of navigation, forms, and user interactions using Selenium WebDriver.",
      github: "https://github.com/Haripriya020/internship_management_system",
      demo: "https://haripriya02020.pythonanywhere.com",
      featured: false,
    },

    {
      title: "Photography Booking Website",
      type: "Full-Stack Web Application",
      tech: "HTML • CSS • JavaScript • PHP • MySQL • Postman • Manual Testing",
      desc: "Created a responsive web application to showcase photography services and manage client booking information through database integration. Tested booking APIs using Postman and performed manual testing of booking forms and client workflows.",
      github: "https://github.com/Haripriya020/photography",
      demo: "https://priyaphotography.site.je",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            {project.featured && (
              <span className="inline-block bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-3">
                ⭐ Featured Project
              </span>
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <span className="text-cyan-400 text-sm font-medium">
                {project.type}
              </span>
            </div>

            <p className="text-cyan-400 mt-4 mb-4 font-medium">
              {project.tech}
            </p>

            <p className="text-slate-300 leading-7 mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 px-5 py-2 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
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