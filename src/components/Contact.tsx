import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-ink-950 bg-grid py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="text-sm font-600 uppercase tracking-widest text-teal-300">
          Hablemos
        </span>
        <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-white sm:text-5xl text-balance">
          ¿Contratando o tienes un consejo?
          <span className="block bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
            Me encantaría conectar
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 text-balance">
          Busco mi primera oportunidad en ciencia de datos. Si estás
          contratando, conoces a alguien que lo haga, o simplemente quieres
          compartir un consejo, escríbeme.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3.5 text-base font-600 text-ink-950 transition-all hover:bg-teal-300 hover:shadow-xl hover:shadow-teal-400/30"
          >
            <Linkedin className="h-5 w-5" />
            Conéctame en LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:dara@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-500 text-white transition-all hover:border-white/30 hover:bg-white/5"
          >
            <Mail className="h-5 w-5" />
            Enviar email
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ink-400">
          <span className="rounded-full bg-white/5 px-3 py-1">Open to work</span>
          <span>·</span>
          <span>Analista de datos</span>
          <span>·</span>
          <span>Científica de datos Jr.</span>
          <span>·</span>
          <span>BI</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
