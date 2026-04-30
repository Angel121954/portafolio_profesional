export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-3">
            03. Habilidades
          </p>
          <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white">
            Mi stack técnico.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills?.map((skill, idx) => (
            <div
              key={skill.name}
              className="group bg-[#080b14] border border-slate-800/80 rounded-xl p-4 hover:border-cyan-500/25 transition-all duration-300"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Header de la skill */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl" role="img" aria-label={skill.name}>
                    {skill.icon}
                  </span>
                  <span className="font-medium text-slate-200 text-sm group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
