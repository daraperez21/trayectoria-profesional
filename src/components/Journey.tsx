import { Cable, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    year: '2019 — 2023',
    role: 'Ingeniera de Telecomunicaciones',
    desc: 'Diseño, despliegue y optimización de redes de fibra óptica. Trabajo con métricas de red, análisis de fallos y toma de decisiones basada en mediciones.',
    tags: ['FTTH', 'Redes', 'Métricas de red', 'Optimización'],
  },
  {
    year: '2024 — Presente',
    role: 'Transición a Ciencia de Datos',
    desc: 'Formación en SQL, Python y análisis de datos. Combinando la experiencia en telecom con herramientas de data science para aportar valor desde el día uno.',
    tags: ['SQL', 'Python', 'Análisis', 'BI'],
  },
];

function Journey() {
  return (
    <section id="trayectoria" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-widest text-teal-600">
            Trayectoria
          </span>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl text-balance">
            Un cambio de rumbo con bases sólidas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Mi experiencia técnica me da una ventaja única: entiendo los datos
            desde donde nacen, no solo desde el dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.role}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 p-8 transition-all hover:border-teal-300 hover:shadow-xl hover:shadow-ink-200/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500 text-white">
                  {i === 0 ? (
                    <Cable className="h-5 w-5" />
                  ) : (
                    <TrendingUp className="h-5 w-5" />
                  )}
                </span>
                <span className="text-sm font-600 text-amber-600">
                  {s.year}
                </span>
              </div>
              <h3 className="font-display text-xl font-700 text-ink-900">
                {s.role}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-500">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-500 text-ink-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {i === 0 && (
                <div className="mt-6 flex items-center gap-2 text-sm font-600 text-teal-600">
                  <span className="capitalize">Siguiente paso</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
