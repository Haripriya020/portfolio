function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python"],
    },

    {
      title: "Frameworks",
      skills: ["Flask", "React.js"],
    },

    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "REST API"],
    },

    {
      title: "Databases",
      skills: ["MySQL", "SQLite"],
    },

    {
      title: "Testing",
      skills: [
        "Selenium WebDriver",
        "Postman",
        "Junit Testing",
        "Functional Testing",
      ],
    },

    {
      title: "AI/ML Tools",
      skills: [
        "Gemini API",
        "TensorFlow Lite",
        "Android",
        "CameraX",
      ],
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Android Studio",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;