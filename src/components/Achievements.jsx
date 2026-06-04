function Achievements() {
  const achievements = [
    "Best Project Award – AIR Summit 2025 at College level",
    "IEEE Conference Publication",
    "Second Prize in Paper Presentation - Recent Trends in Smart Materials",
    "Silver Medal in Physics & Chemistry - Silver Zone Olympiad",
    "Bronze Medal in Mathematics - Silver Zone Olympiad"
  ];

  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
          >
            <p className="text-lg text-slate-200">
              🏆 {achievement}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Achievements;