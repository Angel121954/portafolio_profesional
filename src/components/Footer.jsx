export default function Footer({ personal }) {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <a href="#hero" className="font-mono text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors">
          &lt;{personal?.name ?? 'dev'}&nbsp;/&gt;
        </a>

        <p className="font-mono text-slate-500 text-xs text-center">
          Hecho con React + Tailwind CSS + DaisyUI · {year}
        </p>

        <p className="font-mono text-slate-600 text-xs">
          {personal?.location}
        </p>
      </div>
    </footer>
  )
}
