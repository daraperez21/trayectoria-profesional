import { Lightbulb, Cpu, GitBranch } from 'lucide-react';

function About() {
  return (
    <section id="sobre-mi" className="bg-ink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-widest text-teal-600">
            Sobre mí
          </span>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl text-balance">
            Pensar como analista de datos sin saberlo
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Después de 4 años como{' '}
              <span className="font-600 text-ink-900">
                ingeniera en telecomunicaciones
              </span>
              , diseñando, desplegando y optimizando redes de fibra óptica, me
              di cuenta de algo: gran parte de mi trabajo siempre giró en torno
              a los datos.
            </p>
            <p>
              Analizar métricas de red, detectar patrones en fallas, tomar
              decisiones basadas en mediciones… eso es, en esencia, pensar
              como analista de datos.
            </p>
            <p>
              Por eso estoy dando el siguiente paso: busco mi primera
              oportunidad en{' '}
              <span className="font-600 text-ink-900">
                ciencia de datos
              </span>{' '}
              y aporto una base técnica sólida, pensamiento analítico y
              experiencia resolviendo problemas complejos en entornos reales.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: <Lightbulb className="h-5 w-5" />,
                title: 'Pensamiento analítico',
                desc: 'Formación técnica sólida y mentalidad orientada a datos.',
              },
              {
                icon: <Cpu className="h-5 w-5" />,
                title: 'SQL & Python',
                desc: 'Herramientas para extraer, transformar y visualizar datos.',
              },
              {
                icon: <GitBranch className="h-5 w-5" />,
                title: 'Sector telecom',
                desc: 'Conocimiento profundo de una industria con datos enormes y muy valiosos.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-lg hover:shadow-ink-200/50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-700 text-ink-900">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
