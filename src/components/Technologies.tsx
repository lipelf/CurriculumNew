import {
  SiNodedotjs, SiNestjs, SiTypescript, SiPostgresql, SiMongodb,
  SiBun, SiPostman, SiGit, SiPrisma, SiDocker,
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa6';

const backend = [
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNodedotjs,  name: 'Node.js',    color: '#339933' },
  { icon: SiNestjs,     name: 'NestJS',     color: '#E0234E' },
  { icon: SiBun,        name: 'Bun',        color: '#fbf0df' },
  { icon: SiPrisma,     name: 'Prisma',     color: '#5a67d8' },
];

const databases = [
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiMongodb,    name: 'MongoDB',    color: '#47A248' },
];

const tools = [
  { icon: SiPostman,    name: 'Postman',      color: '#FF6C37' },
  { icon: SiGit,        name: 'Git',          color: '#F05032' },
  { icon: FaMicrosoft,  name: 'Azure DevOps', color: '#0078D4' },
  { icon: SiDocker,     name: 'Docker',       color: '#2496ED' },
];

const categories = [
  { label: 'Backend & Frameworks', items: backend },
  { label: 'Banco de Dados',       items: databases },
  { label: 'Ferramentas',          items: tools },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="w-full max-w-4xl mx-auto px-6 py-20">
      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Tecnologias & Ferramentas</h2>
        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-10" />
      </div>

      <div className="flex flex-col gap-10">
        {categories.map(({ label, items }) => (
          <div key={label} data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">{label}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {items.map(({ icon: Icon, name, color }, i) => (
                <div
                  key={name}
                  data-aos="zoom-in"
                  data-aos-delay={i * 60}
                  className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
                >
                  <Icon size={28} color={color} />
                  <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
