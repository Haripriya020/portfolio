function Certifications() {

  const certifications = [
    "Azure AI Fundamentals - Microsoft",
    "Data Science 101 - IBM",
    "Introduction to Artificial Intelligence - IBM",
    "Basic Image Classification with Real-Time Practical Simulation - Coursera",
    "GenAI Study Jam - Google Developer Student Club"
  ];

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certifications.map((cert, index) => (

          <div
            key={index}
            className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <p className="text-lg text-slate-200">
              📜 {cert}
            </p>
          </div>

        ))}

      </div>
    </section>
  );
}

export default Certifications;