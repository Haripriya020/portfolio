function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Experience
      </h2>

      <div className="space-y-8">

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all">

          <h3 className="text-2xl font-bold">
            Full Stack Development Intern
          </h3>

          <p className="text-cyan-400 mt-2">
            Code Bind Technologies • Coimbatore
          </p>

          <p className="text-slate-300 mt-4">
            Assisted in developing and testing web applications
            using HTML, CSS, JavaScript, PHP and MySQL.
          </p>

        </div>

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all">

          <h3 className="text-2xl font-bold">
            Web Development Intern
          </h3>

          <p className="text-cyan-400 mt-2">
            N2P Technology • Coimbatore
          </p>

          <p className="text-slate-300 mt-4">
            Worked on frontend and backend integration
            and contributed to web development tasks.
          </p>

        </div>

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition-all">

          <h3 className="text-2xl font-bold">
            Online Research Intern
          </h3>

          <p className="text-cyan-400 mt-2">
            NHRC
          </p>

          <p className="text-slate-300 mt-4">
            Proposed app-based complaint and guidance
            solutions for gig workers.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;