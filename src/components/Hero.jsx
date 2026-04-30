import { useState, useEffect } from 'react'

export default function Hero({ slides, personal, contact }) {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    if (!slides?.length) return
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length)
        setFading(false)
      }, 350)
    }, 4000)
    return () => clearInterval(id)
  }, [slides])

  const slide = slides?.[current] ?? {}

  return (
    <section id="hero" className="grid-bg relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* ── Left: text ── */}
        <div>
          <p className="font-mono text-cyan-400 text-xs uppercase tracking-widest mb-6">
            — {personal?.location}
          </p>

          {/* Slide content with fade */}
          <div
            className="transition-all duration-350"
            style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(8px)' : 'translateY(0)' }}
          >
            <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 text-white">
              {slide.title}
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl mb-8 font-mono leading-relaxed">
              {slide.subtitle}
            </p>
          </div>

          {/* Bio */}
          <p className="text-slate-300 text-base leading-relaxed max-w-md mb-10">
            {personal?.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-[#080b14] font-semibold rounded-lg hover:bg-cyan-300 active:scale-95 transition-all duration-200 text-sm"
            >
              Ver proyectos ↓
            </a>
            <a
              href={contact?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:border-cyan-400 hover:bg-cyan-400/5 active:scale-95 transition-all duration-200 text-sm"
            >
              GitHub →
            </a>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {slides?.map((_, i) => (
              <button
                key={i}
                onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 350) }}
                aria-label={`Slide ${i + 1}`}
                className={`h-[3px] rounded-full transition-all duration-400 ${
                  i === current ? 'w-8 bg-cyan-400' : 'w-3 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Right: avatar graphic ── */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-72 h-72">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full border border-cyan-400/15"
              style={{ animation: 'spin 25s linear infinite' }}
            />
            {/* Middle ring */}
            <div
              className="absolute inset-6 rounded-full border border-indigo-400/15"
              style={{ animation: 'spin 18s linear infinite reverse' }}
            />
            {/* Inner glow circle */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500/15 via-indigo-600/20 to-transparent border border-cyan-500/20 flex items-center justify-center">
              <span className="font-syne text-7xl font-black gradient-text select-none">
                {personal?.name?.charAt(0) ?? 'A'}
              </span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-[#0f172a] border border-cyan-400/30 rounded-full px-4 py-2">
              <span className="font-mono text-xs text-cyan-400">Full Stack</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}
