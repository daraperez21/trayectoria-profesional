import { Database, Code2, BarChart3, Network, Brain, Layers } from 'lucide-react';

const groups = [
  {
    icon: <Database className="h-6 w-6" />,
    title: 'SQL',
    desc: 'Consultas, joins, agregaciones y modelado de datos relacionales.',
    level: 'Intermedio',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Python',
    desc: 'Análisis y manipulación de datos con librerías como pandas y NumPy.',
    level: 'En desarrollo',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Visualización & BI',
    desc: 'Dashboards e reporting para convertir datos en decisiones.',
    level: 'En desarrollo',
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: 'Telecom & Redes',
    desc: '4+ años trabajando con métricas de red, fibra óptica y operativas.',
    level: 'Avanzado',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Pensamiento analítico',
    desc: 'Resolución de problemas complejos basada en mediciones y evidencia.',
    level: 'Avanzado',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Aprendizaje continuo',
    desc: 'Comprometida con seguir creciendo y aportar valor desde el día uno.',
    level: 'Actitud',
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-ink-950 bg-grid py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-widest text-teal-300">
            Lo que aporto
          </span>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-white sm:text-4xl text-balance">
            Herramientas y capacidades
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            Combinación de experiencia técnica en telecomunicaciones con
            formación en ciencia de datos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:border-teal-400/30 hover:bg-teal-400/[0.05]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-teal-400/12 text-teal-300 transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-700 text-white">
                  {s.title}
                </h3>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-500 text-ink-300">
                  {s.level}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {[
            '#CienciaDeDatos',
            '#DataScience',
            '#SQL',
            '#Python',
            '#Telecomunicaciones',
            '#CambioDeCarrera',
            '#OpenToWork',
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-500 text-teal-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
