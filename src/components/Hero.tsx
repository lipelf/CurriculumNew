import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';

const stats = [
  { value: '2', label: 'Anos de experiência' },
  { value: '5+', label: 'Empresas / projetos' },
  { value: '10+', label: 'Tecnologias' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="w-full max-w-4xl mx-auto px-6 py-28 flex flex-col items-center text-center gap-6"
    >
      <span
        className="animate-fade-up text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900"
      >
        👋 Bem-vindo ao meu portfólio
      </span>

      <h1 className="animate-fade-up animate-delay-100 text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
        Luiz Fellipe{' '}
        <span className="text-blue-600 dark:text-blue-400">Rocha</span>
      </h1>

      <p className="animate-fade-up animate-delay-200 text-lg text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
        Desenvolvedor Backend Jr. · TypeScript · Node.js · NestJS · PostgreSQL
      </p>

      <p className="animate-fade-up animate-delay-300 max-w-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Estudante de Ciência da Computação na Unesc, com experiência em Backend e QA.
        Construo APIs REST escaláveis com NestJS e TypeScript, aplicando Clean Architecture.
        Inglês avançado (C1) desenvolvido durante intercâmbio nos EUA.
      </p>

      {/* Links */}
      <div className="animate-fade-up animate-delay-400 flex gap-3 flex-wrap justify-center mt-2">
        <a
          href="https://github.com/LuizSantos01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          <SiGithub size={16} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/luiz-felliperocha-dos-santos-028145165"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          <FaLinkedinIn size={16} /> LinkedIn
        </a>
        <a
          href="mailto:luizfrs2004@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-105 transition-all duration-200"
        >
          <HiMail size={16} /> Email
        </a>
      </div>

      {/* Métricas */}
      <div className="animate-fade-up animate-delay-500 grid grid-cols-3 gap-6 mt-8 w-full max-w-sm">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{s.value}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center leading-tight">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
