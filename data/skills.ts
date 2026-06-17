import type { SkillCategory } from '@/types'

// Levels: 1=Familiar, 2=Basic, 3=Proficient, 4=Advanced, 5=Expert
// Source: skills.pdf (Alto=4, Medio=3, Bajo=2) + CV context
// Note: visual color-per-category was dropped in the redesign —
// the site now uses a single accent color, so categories no longer
// carry color/bgColor fields.

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: { en: 'Languages & Runtimes', es: 'Lenguajes y Runtimes' },
    skills: [
      { name: 'PHP',        level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'Java',       level: 4 },
      { name: 'Python',     level: 4 },
      { name: 'Bash',       level: 4 },
      { name: 'PowerShell', level: 3 },
      { name: 'Dart',       level: 3 },
      { name: 'C',          level: 3 },
      { name: 'C#',         level: 3 },
      { name: 'HTML5',      level: 5 },
      { name: 'CSS3',       level: 4 },
    ],
  },
  {
    id: 'frameworks',
    label: { en: 'Frameworks & Libraries', es: 'Frameworks y Librerías' },
    skills: [
      { name: 'Symfony',    level: 4 },
      { name: 'Vue.js',     level: 4 },
      { name: 'Django',     level: 4 },
      { name: 'React',      level: 3 },
      { name: 'Next.js',    level: 3 },
      { name: 'Flutter',    level: 3 },
      { name: '.NET',       level: 3 },
      { name: 'Twig',       level: 4 },
    ],
  },
  {
    id: 'databases',
    label: { en: 'Databases', es: 'Bases de Datos' },
    skills: [
      { name: 'MySQL',      level: 4 },
      { name: 'PostgreSQL', level: 3 },
      { name: 'SQLite',     level: 3 },
    ],
  },
  {
    id: 'infra',
    label: { en: 'Infrastructure & DevOps', es: 'Infraestructura y DevOps' },
    skills: [
      { name: 'Git / GitHub',      level: 4 },
      { name: 'Linux',             level: 4 },
      { name: 'Windows Server',    level: 4 },
      { name: 'Active Directory',  level: 4 },
      { name: 'Microsoft 365',     level: 4 },
      { name: 'LAN / WLAN Config', level: 3 },
      { name: 'Server Deployment', level: 3 },
      { name: 'REST APIs',         level: 4 },
    ],
  },
  {
    id: 'security',
    label: { en: 'Cybersecurity', es: 'Ciberseguridad' },
    skills: [
      { name: 'Network Security',        level: 3 },
      { name: 'Vulnerability Analysis',  level: 3 },
      { name: 'Environment Hardening',   level: 3 },
      { name: 'Endpoint Security',       level: 3 },
    ],
  },
  {
    id: 'tools',
    label: { en: 'Tools & IDEs', es: 'Herramientas e IDEs' },
    skills: [
      { name: 'VS Code',      level: 5 },
      { name: 'Cursor IDE',   level: 4 },
      { name: 'Eclipse IDE',  level: 4 },
      { name: 'NetBeans IDE', level: 4 },
      { name: 'Notion',       level: 4 },
      { name: 'AI Integration', level: 4 },
    ],
  },
]
