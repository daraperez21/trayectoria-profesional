import { ArrowDown, Database, Activity, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 bg-grid pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-1.5 text-sm font-500 text-teal-200">
            <Sparkles className="h-4 w-4" />
            <span>Open to work · Data Science &amp; Analytics</span>
          </div>

          <h1 className="animate-fade-up mt-7 font-display text-4xl font-800 leading-[1.05] tracking-tight text-white text-balance sm:text-6xl">
            De las redes de fibra óptica
            <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-amber-300 bg-clip-text text-transparent">
              a la ciencia de datos
            </span>
          </h1>

          <p className="animate-fade-up mt-6 text-lg leading-relaxed text-ink-300 sm:text-xl text-balance">
            Soy <span className="font-600 text-white">Dara Perez</span>. Después
            de 4 años diseñando, desplegando y optimizando redes de fibra
            óptica, descubrí que mi trabajo siempre giró en torno a los datos.
            Ahora busco mi primera oportunidad en ciencia de datos.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-teal-400 px-7 py-3 text-base font-600 text-ink-950 transition-all hover:bg-teal-300 hover:shadow-xl hover:shadow-teal-400/30"
            >
              Hablemos
            </a>
            <a
              href="#trayectoria"
              className="rounded-full border border-white/15 px-7 py-3 text-base font-500 text-white transition-all hover:border-white/30 hover:bg-white/5"
            >
              Mi trayectoria
            </a>
          </div>

          <a
            href="#sobre-mi"
            className="mt-16 inline-flex flex-col items-center gap-1 text-ink-400 transition-colors hover:text-teal-300"
          >
            <span className="text-xs font-500 uppercase tracking-widest">
              Descubre más
            </span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in mt-20 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: <Activity className="h-5 w-5" />,
              value: '4+ años',
              label: 'Experiencia en telecomunicaciones',
            },
            {
              icon: <Database className="h-5 w-5" />,
              value: 'SQL · Python',
              label: 'Herramientas de análisis de datos',
            },
            {
              icon: <Sparkles className="h-5 w-5" />,
              value: 'Junior',
              label: 'Listo para aportar desde el día uno',
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm transition-all hover:border-teal-400/25 hover:bg-teal-400/[0.04]"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-teal-400/12 text-teal-300">
                {s.icon}
              </div>
              <div className="font-display text-2xl font-700 text-white">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
