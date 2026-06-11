function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Education
      </h2>

      {/* BE Card */}
      <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500">

        <h3 className="text-2xl font-bold text-cyan-400">
          BE Computer Science and Engineering with Minor in Public Administration
        </h3>

        

        <p className="text-slate-300 mt-4">
          KSR Institute for Engineering and Technology
        </p>

        <p className="text-slate-300 mt-2">
          CGPA:
          <span className="text-cyan-400 font-semibold"> 8.86</span>
        </p>

        <p className="text-slate-400 mt-2">
          2021 – 2025
        </p>

      </div>

      {/* Divider */}
      <div className="flex justify-center my-8">
        <div className="w-1 h-12 bg-cyan-400 rounded-full"></div>
      </div>

      {/* HSC & SSLC */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-500">

          <h3 className="text-xl font-bold text-cyan-400">
            Higher Secondary Certificate
          </h3>

          <p className="text-slate-300 mt-3">
            KRP Matric Higher Secondary School
          </p>

          <p className="text-slate-300 mt-2">
            Score:
            <span className="text-cyan-400 font-semibold"> 93%</span>
          </p>

          <p className="text-slate-400 mt-2">
            2021
          </p>

        </div>

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-500">

          <h3 className="text-xl font-bold text-cyan-400">
            Secondary School Leaving Certificate
          </h3>

          <p className="text-slate-300 mt-3">
            KRP Matric Higher Secondary School
          </p>

          <p className="text-slate-300 mt-2">
            Score:
            <span className="text-cyan-400 font-semibold"> 90%</span>
          </p>

          <p className="text-slate-400 mt-2">
            2019
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;