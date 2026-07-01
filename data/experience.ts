import type { Experience } from '@/types'

export const experience: Experience[] = [
  {
    id: 'beondish-2026',
    company: 'Beondish',
    role: {
      en: 'DevOps Specialist',
      es: 'Especialista en DevOps',
    },
    type: 'contract',
    start: '2026-07',
    end: '2026-18',
    location: 'Santiago de Compostela, Galicia, España',
    tags: ['Flutter', 'REST API', 'IT Security'],
  },
  {
    id: 'colaiste-2025',
    company: 'Coláiste Dhúlaigh College of Further Education',
    role: {
      en: 'IT Support Specialist & Network Administrator',
      es: 'Especialista en Soporte de TI y Administración de Redes',
    },
    type: 'internship',
    start: '2025-09',
    end: '2025-11',
    location: 'Dublín, Irlanda',
    summary: {
      en: 'IT support and network administration internship at an Irish further education college, working entirely in English.',
      es: 'Prácticas de soporte IT y administración de redes en un centro de educación superior irlandés, en entorno completamente en inglés.',
    },
    highlights: [
      {
        en: 'Administered computer labs and workstations across the Microsoft ecosystem (Intune, Entra ID, M365)',
        es: 'Administración de parques informáticos mediante el ecosistema de Microsoft (Intune, Entra ID, M365)',
      },
      {
        en: 'Preventive and corrective hardware maintenance across the campus',
        es: 'Mantenimiento preventivo y correctivo de hardware y material tecnológico',
      },
      {
        en: 'Advanced technical support and incident resolution in English, consolidating bilingual professional proficiency',
        es: 'Soporte técnico avanzado y resolución de incidencias en inglés, consolidando competencia profesional bilingüe',
      },
      {
        en: 'Configured and hardened local area networks (LAN) to ensure campus service continuity',
        es: 'Configuración y securización de redes locales (LAN) para garantizar la continuidad del servicio en el campus',
      },
    ],
    tags: ['Windows Server', 'Active Directory', 'Microsoft 365', 'LAN/WLAN', 'IT Support', 'Intune'],
  },
  {
    id: 'mentiness-2025',
    company: 'Mentiness',
    role: {
      en: 'Web Application Developer',
      es: 'Desarrollador de Aplicaciones Web',
    },
    type: 'internship',
    start: '2025-04',
    end: '2025-06',
    location: 'Santiago de Compostela, Galicia, España',
    summary: {
      en: 'Full-stack web development internship at a digital health startup, integrating AI tooling into product workflows.',
      es: 'Prácticas de desarrollo web full-stack en una startup de salud digital, con integración de herramientas de IA.',
    },
    highlights: [
      {
        en: 'Maintained and extended web projects using the Symfony framework and PHP',
        es: 'Mantenimiento y desarrollo de proyectos web con el framework Symfony y PHP',
      },
      {
        en: 'Integrated AI tools to enhance product features and automate workflows',
        es: 'Integración de herramientas de Inteligencia Artificial para la mejora de funcionalidades del producto',
      },
      {
        en: 'Managed project documentation and remote collaboration via Notion under async methodologies',
        es: 'Gestión integral de proyectos y documentación técnica con Notion bajo metodologías de trabajo en remoto',
      },
    ],
    tags: ['PHP', 'Symfony', 'AI Integration', 'Notion', 'Remote', 'REST API'],
  },
  {
    id: 'sdweb-2023',
    company: 'SDWEB Innovative Digital Solutions',
    role: {
      en: 'Full-Stack Developer',
      es: 'Desarrollador Full Stack',
    },
    type: 'internship',
    start: '2023-04',
    end: '2023-06',
    location: 'Santiago de Compostela, Galicia, España',
    summary: {
      en: 'Full-stack development internship building production web applications with Symfony, PHP, and MySQL.',
      es: 'Prácticas de desarrollo full-stack construyendo aplicaciones web en producción con Symfony, PHP y MySQL.',
    },
    highlights: [
      {
        en: 'Developed full-stack features with Symfony and PHP for production web applications',
        es: 'Desarrollo de funcionalidades Full Stack con Symfony y PHP para aplicaciones web',
      },
      {
        en: 'Managed and optimised relational databases (MySQL), ensuring data integrity',
        es: 'Gestión y optimización de bases de datos relacionales (MySQL) garantizando la integridad de los datos',
      },
      {
        en: 'Built and refined user interfaces with Twig, CSS3, and JavaScript to improve UX',
        es: 'Maquetación y ajuste de interfaces de usuario con Twig, CSS3 y JavaScript para mejorar la experiencia de usuario',
      },
    ],
    tags: ['PHP', 'Symfony', 'MySQL', 'Twig', 'CSS3', 'JavaScript'],
  },
]
