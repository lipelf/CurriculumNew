import { SiGithub } from 'react-icons/si';
import { HiArrowNarrowRight } from 'react-icons/hi';

const projects = [
  {
    title: 'Currículo',
    description: 'Meu currículo em formato web, mostrando um pouco dos meus conhecimentos, experiências e afins.',
    tags: ['TypeScript', 'NestJS'],
    github: 'https://github.com/lipelf/CurriculumNew',
  },
  {
    title: 'Automação de chatbot via Whatsapp - EM BREVE',
    description: 'Automação de chatbot via Whatsapp utilizando typescript, apis do whatsapp e openai api.',
    tags: ['TypeScript', 'OpenAI API', 'Whatsapp API'],
    github: 'https://github.com/lipelf',
  },
    {
    title: 'Sistema automático de envio de emails para usuários.',
    description: 'Sistema automático de envio de emails para usuários utilizando typescript, Redis, BUll, SMTP',
    tags: ['TypeScript', 'Redis', 'Node', 'SMTP'],
    github: 'https://github.com/lipelf/templates-email',
  },
];

const tagColors: Record<string, string> = {
  TypeScript:   'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  NestJS:       'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
  PostgreSQL:   'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  Prisma:       'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  Bun:          'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  Playwright:   'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
  Selenium:     'bg-lime-100 text-lime-700 dark:bg-lime-950 dark:text-lime-300',
  Postman:      'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  Scrum:        'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  Python:       'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
  FastAPI:      'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300',
  MongoDB:      'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  ReactJS:      'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300',
  'OpenAI API': 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
};

export default function Projects() {
  return (
    <section id="projetos" className="w-full max-w-4xl mx-auto px-6 py-20">
      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Projetos</h2>
        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-10" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="flex flex-col p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] ?? 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
            >
              <SiGithub size={14} />
              Ver no GitHub
              <HiArrowNarrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
