import React from "react";
import { motion } from "motion/react";
import chromotionIcon from "./assets/iconChromotion.svg";
import nikkiIcon from "./assets/iconNikki.svg";
import picktureIcon from "./assets/iconPickture.svg";
import recordaIcon from "./assets/iconRecorda.svg";
import swiprIcon from "./assets/iconSwipr 1.svg";
import untoothableIcon from "./assets/iconUntoothable.svg";
import memoji1 from "./assets/memoji1.svg";
import memoji2 from "./assets/memoji2.svg";
import memoji3 from "./assets/memoji3.svg";
import memoji4 from "./assets/memoji4.svg";
import memoji5 from "./assets/memoji5.svg";
import {
  GitBranch,
  Link2,
  Mail,
  ExternalLink,
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

const Motion = motion;

const projects = [
  {
    title: "Pickture!",
    subtitle: {
      en: "Photo-picking social game",
      pt: "Jogo social de escolha de fotos",
    },
    description: {
      en: "A playful social experience where players choose images, compare perspectives, and spark fun interactions through visual decisions.",
      pt: "Uma experiência social divertida em que jogadores escolhem imagens, comparam perspectivas e criam interações leves por meio de decisões visuais.",
    },
    tags: ["Swift", "SwiftUI", "GameKit", "PhotosUI", "MVVM"],
    image: picktureIcon,
    accent: "#7c3aed",
    accentSoft: "rgba(124, 58, 237, 0.12)",
    link: "#",
  },
  {
    title: "Recorda.",
    subtitle: {
      en: "Music memory journal",
      pt: "Diário de memórias musicais",
    },
    description: {
      en: "An iPhone app for turning albums into personal memory capsules. Users can search music through the Spotify API, open album details, and attach written reflections, photos, or videos to songs and albums, creating a more emotional way to revisit what they listened to.",
      pt: "Um app para iPhone que transforma álbuns em cápsulas pessoais de memória. Usuários podem buscar músicas pela API do Spotify, abrir detalhes de álbuns e anexar reflexões escritas, fotos ou vídeos a músicas e álbuns, criando uma forma mais emocional de revisitar o que ouviram.",
    },
    tags: ["Swift", "UIKit", "Spotify API", "Core Data", "AVFoundation"],
    image: recordaIcon,
    accent: "#A3E635",
    accentSoft: "rgba(163, 230, 53, 0.18)",
    link: "#",
  },
  {
    title: "Nikki",
    subtitle: {
      en: "Scrapbook-style journaling app",
      pt: "App de diário com estilo scrapbook",
    },
    description: {
      en: "A creative journaling experience built around a square canvas, freeform layouts, and expressive page composition.",
      pt: "Uma experiência criativa de diário construída em torno de uma tela quadrada, layouts livres e composições expressivas de página.",
    },
    tags: ["SwiftUI", "PaperKit", "PencilKit", "MVVM"],
    image: nikkiIcon,
    accent: "#0ea5e9",
    accentSoft: "rgba(14, 165, 233, 0.12)",
    link: "#",
  },
  {
    title: "swipr",
    subtitle: {
      en: "Fast-paced reflex game",
      pt: "Jogo de reflexo rápido",
    },
    description: {
      en: "A minimalist game where players match directional arrows with quick swipes in a 30-second challenge.",
      pt: "Um jogo minimalista em que jogadores combinam setas direcionais com gestos rápidos em um desafio de 30 segundos.",
    },
    tags: ["SwiftUI", "Game Center", "MVC", "Game Design"],
    image: swiprIcon,
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.12)",
    link: "#",
  },
  {
    title: "Chromotion",
    subtitle: {
      en: "Interactive color psychology experience",
      pt: "Experiência interativa de psicologia das cores",
    },
    description: {
      en: "My submission to the Swift Student Challenge 2026. A playful project combining storytelling, retro aesthetics, and color-emotion interactions for the Apple ecosystem.",
      pt: "Minha submissão para o Swift Student Challenge 2026. Um projeto lúdico que combina narrativa, estética retrô e interações entre cor e emoção para o ecossistema Apple.",
    },
    tags: ["Swift", "SwiftUI", "Storytelling", "Aseprite", "AVFoundation"],
    image: chromotionIcon,
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.12)",
    link: "#",
  },
  {
    title: "UnToothAble",
    subtitle: {
      en: "Endless runner game",
      pt: "Jogo endless runner",
    },
    description: {
      en: "A mobile arcade game that combines endless runner mechanics with a playful action concept. The project explores responsive gameplay, score progression, and system-based game structure within an iPhone experience.",
      pt: "Um jogo mobile de arcade que combina mecânicas de endless runner com uma proposta de ação divertida. O projeto explora gameplay responsivo, progressão de pontuação e estrutura de jogo baseada em sistemas em uma experiência para iPhone.",
    },
    tags: ["Swift", "SwiftUI", "GameKit", "SpriteKit", "ECS"],
    image: untoothableIcon,
    accent: "#06b6d4",
    accentSoft: "rgba(6, 182, 212, 0.12)",
    link: "#",
  },
];

const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "SpriteKit",
  "Game Center",
  "MapKit",
  "SwiftData",
  "MVVM",
  "Figma",
  "Git",
  "GitHub",
];

const skillAccents = [
  "rgba(255, 45, 85, 0.08)",
  "rgba(120, 84, 255, 0.07)",
  "rgba(255, 45, 85, 0.06)",
  "rgba(120, 84, 255, 0.06)",
];

const skillRows = [skills, [...skills].reverse()];
const memojis = [memoji1, memoji2, memoji3, memoji4, memoji5];

const copy = {
  en: {
    lang: "en-US",
    nav: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    portfolio: "Portfolio",
    heroNote: "iOS Developer • UI/UX",
    heroTitlePrefix: "Building digital experiences with ",
    heroTitleAccent: "purpose",
    heroDescription:
      "Designing and building iOS apps with sense of aesthetics, intentional interactions, and attention to details.",
    heroPrimaryCta: "See projects",
    heroSecondaryCta: "Contact me",
    heroScroll: "Scroll to explore",
    aboutEyebrow: "About",
    aboutTitle:
      "A developer focused on building iOS apps that feel clear, intentional and carefully crafted",
    aboutDescription: "I build apps the way I’d want to use them.",
    aboutParagraphs: [
      "I look foward to build experiences that feel right. Not just functional, but considered. Not just visually appealing, but meaningful in how they behave.",
      "When I work on an app, I’m constantly considering aesthetics and performance, always making sure to build an experience that is both engaging and reliable.",
      "Most of my work lives in the iOS ecosystem, where I can shape products from idea to execution with a strong focus on detail and quality.",
    ],
    projectsEyebrow: "Projects",
    projectsTitle: "Selected work",
    projectsDescription:
      "A focused set of projects across iOS, games, creativity, and visual interaction.",
    projectLink: "View details",
    skillsEyebrow: "Skills",
    skillsTitle: "Tools and areas I work with",
    skillsDescription:
      "A compact snapshot of the technologies and disciplines that appear most often in my work.",
    contactEyebrow: "Contact",
    contactTitle: "Interested in building something together?",
    contactDescription:
      "Feel free to reach out for collaborations, opportunities, or simply to connect.",
    email: "Email",
    rights: "All rights reserved.",
  },
  pt: {
    lang: "pt-BR",
    nav: [
      { label: "Sobre", href: "#about" },
      { label: "Projetos", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contact" },
    ],
    portfolio: "Portfolio",
    heroNote: "Desenvolvedor iOS • UI/UX",
    heroTitlePrefix: "Construindo experiências digitais com ",
    heroTitleAccent: "propósito",
    heroDescription:
      "Projetando e desenvolvendo apps iOS com senso estético, interações intencionais e atenção aos detalhes.",
    heroPrimaryCta: "Ver projetos",
    heroSecondaryCta: "Entrar em contato",
    heroScroll: "Role para explorar",
    aboutEyebrow: "Sobre",
    aboutTitle:
      "Um desenvolvedor focado em criar apps iOS que sejam claros, intencionais e cuidadosamente construídos",
    aboutDescription: "Eu construo apps da forma como eu gostaria de usá-los.",
    aboutParagraphs: [
      "Quero construir experiências que pareçam certas. Não apenas funcionais, mas pensadas. Não apenas bonitas visualmente, mas significativas na forma como se comportam.",
      "Quando trabalho em um app, estou constantemente considerando estética e performance, sempre garantindo uma experiência envolvente e confiável.",
      "A maior parte do meu trabalho vive no ecossistema iOS, onde consigo moldar produtos da ideia à execução com um forte foco em detalhe e qualidade.",
    ],
    projectsEyebrow: "Projetos",
    projectsTitle: "Trabalhos selecionados",
    projectsDescription:
      "Um conjunto objetivo de projetos entre iOS, jogos, criatividade e interação visual.",
    projectLink: "Ver detalhes",
    skillsEyebrow: "Skills",
    skillsTitle: "Ferramentas e áreas com que trabalho",
    skillsDescription:
      "Uma visão compacta das tecnologias e disciplinas que aparecem com mais frequência no meu trabalho.",
    contactEyebrow: "Contato",
    contactTitle: "Interessado em construir algo juntos?",
    contactDescription:
      "Fique à vontade para entrar em contato sobre colaborações, oportunidades ou simplesmente para conversar.",
    email: "E-mail",
    rights: "Todos os direitos reservados.",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="section-eyebrow text-sm uppercase tracking-[0.28em]">{eyebrow}</p>
      <h2 className="section-heading mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="section-description mt-4 text-base leading-7">{description}</p>
      )}
    </div>
  );
}

function SurfaceCard({ children, className = "" }) {
  return <div className={`surface-card rounded-[1.75rem] ${className}`}>{children}</div>;
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
    >
      <span className={`theme-thumb ${isDark ? "theme-thumb-dark" : ""}`} />
      <span className={`theme-option ${!isDark ? "theme-option-active" : ""}`}>
        <Sun className="h-4 w-4" />
      </span>
      <span className={`theme-option ${isDark ? "theme-option-active" : ""}`}>
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}

function LanguageToggle({ language, onToggle }) {
  const isPortuguese = language === "pt";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="language-toggle"
      aria-label={`Switch website language to ${isPortuguese ? "English" : "Portuguese"}`}
      aria-pressed={isPortuguese}
    >
      <span className={`language-thumb ${isPortuguese ? "language-thumb-pt" : ""}`} />
      <span className={`language-option ${!isPortuguese ? "language-option-active" : ""}`}>
        <span aria-hidden="true">🇺🇸</span>
      </span>
      <span className={`language-option ${isPortuguese ? "language-option-active" : ""}`}>
        <span aria-hidden="true">🇧🇷</span>
      </span>
    </button>
  );
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("portfolio-theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getRandomMemoji() {
  return memojis[Math.floor(Math.random() * memojis.length)];
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(getInitialTheme);
  const [language, setLanguage] = React.useState("en");
  const [heroMemoji] = React.useState(getRandomMemoji);
  const t = copy[language];

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.lang = t.lang;
  }, [t.lang]);

  return (
    <div className="page-shell min-h-screen antialiased">
      <header className="site-header sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="flex items-center">
            <div>
              <p className="brand-kicker text-xs uppercase tracking-[0.3em]">{t.portfolio}</p>
              <p className="brand-name text-sm font-medium">Rafael Toneto</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <nav className="nav-shell hidden items-center gap-6 md:flex">
              {t.nav.map((item) => (
                <a key={item.label} href={item.href} className="nav-link text-sm transition">
                  {item.label}
                </a>
              ))}
            </nav>

            <LanguageToggle
              language={language}
              onToggle={() => setLanguage((prev) => (prev === "en" ? "pt" : "en"))}
            />

            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            />

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="menu-button flex h-11 w-11 items-center justify-center rounded-2xl md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav border-t px-6 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {t.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-link rounded-2xl px-3 py-2 text-sm transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="hero-section mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8">
          <div className="hero-layout grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <Motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <Motion.p
                variants={fadeUp}
                className="hero-note mb-6 text-sm uppercase tracking-[0.35em]"
              >
                {t.heroNote}
              </Motion.p>

              <Motion.h1
                variants={fadeUp}
                className="hero-title max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
              >
                {t.heroTitlePrefix}
                <span className="accent-text">{t.heroTitleAccent}</span>
              </Motion.h1>

              <Motion.p
                variants={fadeUp}
                className="body-copy mt-6 max-w-2xl text-base leading-8 md:text-lg"
              >
                {t.heroDescription}
              </Motion.p>

              <Motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <Motion.a
                  href="#projects"
                  className="button-primary inline-flex items-center justify-center rounded-[1.25rem] px-6 py-3 text-sm font-semibold transition"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                >
                  {t.heroPrimaryCta}
                </Motion.a>

                <Motion.a
                  href="#contact"
                  className="button-secondary inline-flex items-center justify-center rounded-[1.25rem] px-6 py-3 text-sm font-semibold transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                >
                  {t.heroSecondaryCta}
                </Motion.a>
              </Motion.div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="hero-memoji-wrap"
            >
              <div className="hero-memoji-frame">
                <img src={heroMemoji} alt="Random Rafael memoji" className="hero-memoji" />
              </div>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ delay: 0.8, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="hero-scroll mt-20 flex items-center gap-3 text-sm"
          >
            <Motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </Motion.div>
            <span>{t.heroScroll}</span>
          </Motion.div>
        </section>

        <Motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-shell mx-auto max-w-6xl px-6 py-20 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionTitle
              eyebrow={t.aboutEyebrow}
              title={t.aboutTitle}
              description={t.aboutDescription}
            />

            <SurfaceCard className="p-8 md:p-10">
              <div className="body-copy space-y-5">
                {t.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </Motion.section>

        <Motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="section-shell mx-auto max-w-6xl px-6 py-20 lg:px-8"
        >
          <SectionTitle
            eyebrow={t.projectsEyebrow}
            title={t.projectsTitle}
            description={t.projectsDescription}
          />

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {projects.map((project) => (
              <Motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <SurfaceCard className="project-card group h-full p-7">
                  <div className="flex h-full flex-col">
                    <Motion.div
                      className="project-icon mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.25rem]"
                      style={{ backgroundColor: project.accentSoft }}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} app icon`}
                        className="h-full w-full object-cover"
                      />
                    </Motion.div>

                    <div>
                      <h3 className="project-title text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="project-subtitle mt-1 text-sm">{project.subtitle[language]}</p>
                      <p className="project-copy mt-4 text-sm leading-7">
                        {project.description[language]}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag-pill rounded-full px-3 py-1 text-xs"
                          style={{ backgroundColor: project.accentSoft, color: project.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Motion.a
                      href={project.link}
                      className="project-link mt-8 inline-flex items-center gap-2 text-sm font-medium transition"
                      style={{ color: project.accent }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {t.projectLink}
                      <ExternalLink className="h-4 w-4" />
                    </Motion.a>
                  </div>
                </SurfaceCard>
              </Motion.article>
            ))}
          </Motion.div>
        </Motion.section>

        <Motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-shell mx-auto max-w-6xl px-6 py-20 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <SectionTitle
              eyebrow={t.skillsEyebrow}
              title={t.skillsTitle}
              description={t.skillsDescription}
            />

            <SurfaceCard className="skills-card p-6 md:p-7">
              <div className="skills-carousel">
                {skillRows.map((row, rowIndex) => (
                  <Motion.div
                    key={`skill-row-${rowIndex}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: rowIndex * 0.12, ease: "easeOut" }}
                    className={`skills-track ${rowIndex === 1 ? "skills-track-reverse" : ""}`}
                  >
                    {[...row, ...row].map((skill, index) => (
                      <div
                        key={`${rowIndex}-${skill}-${index}`}
                        className="skills-chip"
                        style={{ backgroundColor: skillAccents[index % skillAccents.length] }}
                      >
                        <span className="skills-chip-dot" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </Motion.div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </Motion.section>

        <Motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="section-shell mx-auto max-w-6xl px-6 py-20 lg:px-8"
        >
          <SurfaceCard className="p-8 md:p-10">
            <SectionTitle
              eyebrow={t.contactEyebrow}
              title={t.contactTitle}
              description={t.contactDescription}
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <Motion.a
                href="mailto:rafael@example.com"
                className="button-primary inline-flex items-center justify-center gap-2 rounded-[1.25rem] px-5 py-3 text-sm font-semibold transition"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
              >
                <Mail className="h-4 w-4" />
                {t.email}
              </Motion.a>

              <Motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary inline-flex items-center justify-center gap-2 rounded-[1.25rem] px-5 py-3 text-sm font-semibold transition"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </Motion.a>

              <Motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary inline-flex items-center justify-center gap-2 rounded-[1.25rem] px-5 py-3 text-sm font-semibold transition"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
              >
                <Link2 className="h-4 w-4" />
                LinkedIn
              </Motion.a>
            </div>
          </SurfaceCard>
        </Motion.section>
      </main>

      <footer className="footer-shell mx-auto mt-8 max-w-6xl px-6 pb-10 pt-8 text-sm lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rafael Toneto. {t.rights}</p>
        </div>
      </footer>
    </div>
  );
}
