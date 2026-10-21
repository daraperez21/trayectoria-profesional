import { Briefcase, Lightbulb, Heart } from 'lucide-react';

const items = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Lo que busco',
    desc: 'Una posición junior o de entrada: analista de datos, científica de datos jr. o BI, en una empresa donde pueda seguir aprendiendo y aportar desde el día uno.',
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Sectores de interés',
    desc: 'Me interesan especialmente telecomunicaciones, infraestructura, energía o cualquier industria con datos operativos.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Mi actitud',
    desc: 'Si estás contratando, conoces a alguien que lo haga o simplemente tienes un consejo para quien cambia de rumbo, me encantaría conectar.',
  },
];

function LookingFor() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-widest text-teal-600">
            Lo que busco
          </span>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-ink-900 sm:text-4xl text-balance">
            Mi próxima oportunidad
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-ink-200 bg-ink-50 p-8 transition-all hover:border-teal-300 hover:shadow-lg hover:shadow-ink-200/40"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                {it.icon}
              </div>
              <h3 className="font-display text-xl font-700 text-ink-900">
                {it.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-500">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LookingFor;
