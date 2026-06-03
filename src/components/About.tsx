'use client'

import { useState } from "react";

const experiences = [
  {
    role: 'Desenvolvedor Backend Jr.',
    company: 'LM Sistemas',
    period: 'Abril 2026 – Presente',
    description: 'APIs e integrações para ERP (SIGE) com TypeScript, NestJS, Bun e PostgreSQL. Clean Architecture, Prisma ORM e testes via Postman.',
  },
  {
    role: 'Intercâmbio - Food Runner',
    company: 'The Highlands at Harbor Springs',
    period: 'Dez 2025 – Mar 2026',
    description: 'Experiência internacional em ambiente multicultural, com desenvolvimento intensivo de inglês profissional, trabalho em equipe, agilidade e comunicação. Atendimento ao cliente seguindo padrões internacionais de hospitalidade.',
  },
  {
    role: 'QA Intern — Automação de Testes',
    company: 'Thomson Reuters Brasil',
    period: 'Mar 2025 – Dez 2025',
    description: 'Testes E2E e automação de APIs com TypeScript, Playwright, Selenium e Cucumber/Gherkin BDD. Metodologias ágeis com Azure DevOps.',
  },
  {
    role: 'Desenvolvedor de IA / Product Owner',
    company: 'Ema Sistemas',
    period: 'Out 2024 – Mar 2025',
    description: 'Chatbot integrado ao ChatGPT (OpenAI API) com Python, FastAPI, MongoDB e ReactJS. Atuação como PO organizando processos do projeto.',
  },
  {
    role: 'Estagiário Front-End',
    company: 'La Moda',
    period: 'Out 2023 – Mai 2024',
    description: 'Site institucional via plataforma VTEX com HTML, CSS, React e JSON',
  },
  {
    role: 'Jovem Aprendiz',
    company: 'La Moda',
    period: 'Mar 2023 – Out 2023',
    description: 'Início da carreira com atividades no setor Omnichannel (varejo e atacado).',
  },
];

export default function About() {
  const [expandido, setExpandido] = useState(false);
  
  // Array dinâmico baseado no clique do botão
  const rolesVisiveis = expandido ? experiences : experiences.slice(0, 3);

  return (
    <section id="sobremim" className="w-full max-w-4xl mx-auto px-6 py-20">
      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Sobre Mim</h2>
        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-10" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Bio */}
        <div className="flex flex-col gap-4" data-aos="fade-right" data-aos-delay="100">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Estudante de <strong className="text-zinc-900 dark:text-white">Ciência da Computação</strong> na Unesc (2023–2027),
            com experiência prática em desenvolvimento Backend e Garantia de Qualidade.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Construo APIs REST escaláveis com <strong className="text-zinc-900 dark:text-white">NestJS, TypeScript e PostgreSQL</strong>,
            aplicando princípios de Clean Architecture. Tenho <strong className="text-zinc-900 dark:text-white">inglês avançado (C1)</strong> desenvolvido
            durante intercâmbio nos EUA pelo programa J-1.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { value: '2', label: 'Anos' },
              { value: '5', label: 'Empresas' },
              { value: '10+', label: 'Tecnologias' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{s.value}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-delay="150">
          <div className="flex flex-col gap-6">
            {rolesVisiveis.map((exp, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  {i < rolesVisiveis.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800 mt-1" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{exp.role}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-7">
            <button
              onClick={() => setExpandido(!expandido)}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
            >
              {expandido ? (
                <>Ver menos <span className="text-[10px]">▲</span></>
              ) : (
                <>Ver mais experiências ({experiences.length - 3} ocultas) <span className="text-[10px]">▼</span></>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
