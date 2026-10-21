import { useEffect, useState } from 'react';
import { Menu, X, Network } from 'lucide-react';

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-400/15 ring-1 ring-teal-400/30">
            <Network className="h-5 w-5 text-teal-300" />
          </span>
          <span className="font-display text-lg font-700 tracking-tight">
            Dara<span className="text-teal-300">.</span>Perez
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-500 text-ink-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-teal-400 px-5 py-2 text-sm font-600 text-ink-950 transition-all hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/25"
          >
            Conecta conmigo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-500 text-ink-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-teal-400 px-5 py-2.5 text-center text-sm font-600 text-ink-950"
            >
              Conecta conmigo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
