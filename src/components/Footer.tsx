import { Network } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-400/15 ring-1 ring-teal-400/30">
            <Network className="h-4 w-4 text-teal-300" />
          </span>
          <span className="font-display text-base font-700">
            Dara<span className="text-teal-300">.</span>Perez
          </span>
        </div>
        <p className="text-sm text-ink-500">
          De telecomunicaciones a ciencia de datos · 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
