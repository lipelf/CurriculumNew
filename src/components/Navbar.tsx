'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';

const links = [
  { href: '#inicio',      label: 'Início' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#sobremim',    label: 'Sobre mim' },
  { href: '#projetos',    label: 'Projetos' },
  { href: '#contato',     label: 'Contato' },
];

export default function Navbar() {
  // Alterado de theme para resolvedTheme
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Agora detecta corretamente o tema do sistema operacional também
  const isDark = resolvedTheme === 'dark';

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-zinc-200/60 dark:shadow-zinc-900/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#inicio" className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white select-none">
          Luiz<span className="text-blue-600 dark:text-blue-400">Fellipe</span>
          <span className="text-zinc-400 dark:text-zinc-500">.dev</span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link hover:text-zinc-900 dark:hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle + menu mobile */}
        <div className="flex items-center gap-2">
          {/* Toggle dark/light */}
          <button
            onClick={() => mounted && setTheme(isDark ? 'light' : 'dark')}
            aria-label="Alternar tema"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all duration-200 cursor-pointer"
          >
            {mounted ? (
              isDark ? (
                <><HiSun size={15} className="text-amber-400" /> <span>Claro</span></>
              ) : (
                <><HiMoon size={15} className="text-blue-500" /> <span>Escuro</span></>
              )
            ) : (
              // Mantém a tag button intacta e renderiza um esqueleto apenas no texto/ícone
              <div className="w-14 h-4 bg-zinc-300/50 dark:bg-zinc-600/50 rounded animate-pulse" />
            )}
          </button>
          {/* Hamburguer mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
