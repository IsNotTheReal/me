import type { Education } from '@/types'

export const education: Education[] = [
  {
    id: 'daw-2025',
    institution: 'IES San Clemente',
    degree: {
      en: 'Higher Technician Certificate',
      es: 'Técnico Superior',
    },
    field: {
      en: 'Web Application Development (DAW)',
      es: 'Desarrollo de Aplicaciones Web (DAW)',
    },
    start: '2024-09',
    end: '2025-06',
    location: 'Santiago de Compostela',
    highlights: [
      {
        en: 'Full-stack web development: HTML5, CSS3, JavaScript, PHP, SQL, deployment',
        es: 'Desarrollo web full-stack: HTML5, CSS3, JavaScript, PHP, SQL, despliegue',
      },
    ],
  },
  {
    id: 'cybersec-2024',
    institution: 'IES San Clemente',
    degree: {
      en: 'Specialist Certificate',
      es: 'Curso de Especialización',
    },
    field: {
      en: 'Cybersecurity in IT Environments',
      es: 'Ciberseguridad en Entornos de las Tecnologías de la Información',
    },
    start: '2023-09',
    end: '2024-06',
    location: 'Santiago de Compostela',
    highlights: [
      {
        en: 'Network & systems security, vulnerability analysis, environment hardening',
        es: 'Seguridad en redes y sistemas, análisis de vulnerabilidades, hardening de entornos',
      },
    ],
  },
  {
    id: 'dam-2023',
    institution: 'Academia TESDAI',
    degree: {
      en: 'Higher Technician Certificate',
      es: 'Técnico Superior',
    },
    field: {
      en: 'Multiplatform Application Development (DAM)',
      es: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
    },
    start: '2021-09',
    end: '2023-06',
    location: 'Santiago de Compostela',
    highlights: [
      {
        en: 'Java, Python, Dart/Flutter, cross-platform architecture, database design',
        es: 'Java, Python, Dart/Flutter, arquitectura multiplataforma, diseño de bases de datos',
      },
    ],
  },
]
