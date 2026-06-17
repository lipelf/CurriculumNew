# Portfolio — Luiz Fellipe Rocha

> 🇧🇷 [Português](#-português) · 🇺🇸 [English](#-english)

---

## 🇧🇷 Português

### Sobre o projeto

Site de portfólio pessoal desenvolvido para apresentar minha trajetória como desenvolvedor Backend Jr., minhas habilidades técnicas, tecnologias que utilizo e projetos que desenvolvi ou estou desenvolvendo.

O site conta com suporte a tema claro/escuro, animações de entrada nos elementos e layout totalmente responsivo.

### Tecnologias utilizadas

| Tecnologia | Uso |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | Framework React com App Router |
| [React 19](https://react.dev/) | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utility-first |
| [next-themes](https://github.com/pacocoursey/next-themes) | Suporte a tema claro/escuro |
| [AOS](https://michaelosaki.github.io/AOS/) | Animações ao fazer scroll |
| [react-icons](https://react-icons.github.io/react-icons/) | Ícones de tecnologias e UI |

### Estrutura

```text
src/
├── app/
│   ├── layout.tsx       # Layout raiz com ThemeProvider
│   └── page.tsx         # Página principal
└── components/
    ├── Navbar.tsx        # Barra de navegação com toggle de tema
    ├── Hero.tsx          # Seção inicial com apresentação e links
    ├── Technologies.tsx  # Grid de tecnologias e ferramentas
    ├── Projects.tsx      # Cards de projetos
    └── ThemeProvider.tsx # Provedor de tema (next-themes)
```

### Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para produção

```bash
npm run build
npm start
```

---

## 🇺🇸 English

### About the project

Personal portfolio website built to showcase my journey as a Junior Backend Developer, including my technical skills, tech stack, and the projects I have built or am currently working on.

The site features light/dark theme support, scroll-triggered animations, and a fully responsive layout.

### Tech stack

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [next-themes](https://github.com/pacocoursey/next-themes) | Light/dark theme support |
| [AOS](https://michaelosaki.github.io/AOS/) | Scroll-triggered animations |
| [react-icons](https://react-icons.github.io/react-icons/) | Tech and UI icons |

### Project structure

```text
src/
├── app/
│   ├── layout.tsx       # Root layout with ThemeProvider
│   └── page.tsx         # Main page
└── components/
    ├── Navbar.tsx        # Navigation bar with theme toggle
    ├── Hero.tsx          # Hero section with intro and links
    ├── Technologies.tsx  # Tech stack grid
    ├── Projects.tsx      # Project cards
    └── ThemeProvider.tsx # Theme provider (next-themes)
```

### Running locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

---

Made by [Luiz Fellipe Rocha](https://github.com/lipelf)
