import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';

const info = [
  { icon: FaWhatsapp,       label: 'WhatsApp',       href: 'https://wa.me/5548998386296',  value: '+55 48 99838-6296' },
  { icon: HiMail,           label: 'Email',           href: 'mailto:luizfrs2004@gmail.com', value: 'luizfrs2004@gmail.com' },
  { icon: HiLocationMarker, label: 'Localização',     href: undefined,                      value: 'Criciúma, SC — Brasil' },
  { icon: HiClock,          label: 'Disponibilidade', href: undefined,                      value: 'Seg – Sex: 9h às 22h' },
];

export default function Contact() {
  return (
    <section id="contato" className="w-full max-w-4xl mx-auto px-6 py-20">
      <div data-aos="fade-up">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Vamos trabalhar juntos?</h2>
        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-10" />
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4" data-aos="fade-right" data-aos-delay="100">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Disponível para novas oportunidades, projetos freelance ou apenas um bate-papo sobre tecnologia. Me manda uma mensagem!
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {info.map(({ icon: Icon, label, href, value }) => {
              const Wrapper = href ? 'a' : 'div';
              const extraProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Wrapper key={label} {...extraProps} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">{label}</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">{value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4" data-aos="fade-left" data-aos-delay="150">
          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Links rápidos</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/lipelf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors group"
            >
              <SiGithub size={20} className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">GitHub primário</p>
                <p className="text-xs text-zinc-400">github.com/lipelf</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-fellipe-rocha-dos-santos-028145165/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors group"
            >
              <FaLinkedinIn size={20} className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">LinkedIn</p>
                <p className="text-xs text-zinc-400">luiz-felliperocha-dos-santos</p>
              </div>
            </a>
            <a
              href="mailto:luizfrs2004@gmail.com"
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors group"
            >
              <HiMail size={20} className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">Email</p>
                <p className="text-xs text-zinc-400">luizfrs2004@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-400">
        Desenvolvido por Luiz Fellipe · {new Date().getFullYear()}
      </div>
    </section>
  );
}
