// =============================================================
//  REGISTRY — Add new projects and services here
//  Index pages read this automatically.
//  Detail pages import their own entry for the meta section.
// =============================================================

// ---- TYPES --------------------------------------------------

export type Status = 'live' | 'upcoming' | 'active' | 'wip'

export interface ProjectEntry {
  slug: string          // must match the filename: en/projects/{slug}.astro
  status: Status
  cover?: string        // path to image in /public/images/
  tags: string[]
  en: { title: string; excerpt: string; area: string; role: string }
  de: { title: string; excerpt: string; area: string; role: string }
}

export interface ServiceEntry {
  slug: string          // must match the filename: en/services/{slug}.astro
  en: { title: string; excerpt: string; features: string[] }
  de: { title: string; excerpt: string; features: string[] }
}

// ---- PROJECTS -----------------------------------------------
//  To add a new project:
//  1. Add an entry below
//  2. Create en/projects/{slug}.astro and de/projects/{slug}.astro

export const projects: ProjectEntry[] = [
  {
    slug:   'pt-one',
    status: 'upcoming',
    tags:   ['Next.js', 'Supabase', 'TypeScript', 'SaaS'],
    en: {
      title:   'PTOne',
      excerpt: 'An all-in-one platform for personal trainers — plans, journals, invoicing and a full client portal.',
      area:    'Web Design / Development',
      role:    'Concept, Design, Development',
    },
    de: {
      title:   'PTOne',
      excerpt: 'Eine All-in-One-Plattform für Personal Trainer — Pläne, Journals, Rechnungen und ein Kundenportal.',
      area:    'Webdesign / Webentwicklung',
      role:    'Konzept, Design, Umsetzung',
    },
  },
  {
    slug:   'va',
    status: 'upcoming',
    cover: '/images/va_1.jpeg',
    tags:   [],
    en: {
      title:   'VA',
      excerpt: 'A new project currently in active development.',
      area:    'Web Development',
      role:    'Design, Development',
    },
    de: {
      title:   'VA',
      excerpt: 'Ein neues Projekt in aktiver Entwicklung.',
      area:    'Webentwicklung',
      role:    'Design, Entwicklung',
    },
  },
  {
    slug:   'ys-workout-trainer',
    status: 'wip',
    cover:  '/images/ys-workout_5.png',
    tags:   ['Next.js', 'Supabase', 'TypeScript', 'UI / UX'],
    en: {
      title:   'YS.Workout — Trainer Module',
      excerpt: 'A full trainer–client extension for YS.Workout: plan management, sharing, live session tracking and a client portal.',
      area:    'Web Design / Development',
      role:    'Concept, Design, Development',
    },
    de: {
      title:   'YS.Workout — Trainer Module',
      excerpt: 'Eine vollständige Trainer–Kunden-Erweiterung für YS.Workout: Planverwaltung, Teilen, Live-Tracking und Kundenportal.',
      area:    'Webdesign / Webentwicklung',
      role:    'Konzept, Design, Umsetzung',
    },
  },
  {
    slug:   'ys-workout',
    status: 'wip',
    cover:  '/images/ys-workout_5.png',
    tags:   ['HTML / CSS', 'JavaScript', 'UI / UX'],
    en: {
      title:   'YS.Workout',
      excerpt: "A personal workout tracking app — built because the existing ones didn't cut it.",
      area:    'Web Design / Development',
      role:    'Concept, Design, Development',
    },
    de: {
      title:   'YS.Workout',
      excerpt: 'Eine Workout-Tracking-App — gebaut, weil die bestehenden nicht gepasst haben.',
      area:    'Webdesign / Webentwicklung',
      role:    'Konzept, Design, Umsetzung',
    },
  },
  {
    slug:   'frauenverein-sarmenstorf',
    status: 'live',
    cover:  '/images/website-frauenverein-sarmenstorf.png',
    tags:   ['HTML / CSS', 'UI / UX', 'Astro'],
    en: {
      title:   'Frauenverein Sarmenstorf',
      excerpt: "Complete website redesign for a local women's association — concept to launch.",
      area:    'Web Design / Development',
      role:    'Concept, Design, Development',
    },
    de: {
      title:   'Frauenverein Sarmenstorf',
      excerpt: 'Komplettes Redesign der Vereinswebseite — von der Idee bis zum Launch.',
      area:    'Webdesign / Webentwicklung',
      role:    'Konzept, Design, Umsetzung',
    },
  },
  {
    slug:   'home-server',
    status: 'active',
    cover:  '/images/proxmox_2.png',
    tags:   ['Proxmox', 'Linux', 'Infrastructure'],
    en: {
      title:   'Home Server',
      excerpt: 'Self-hosted Proxmox setup running custom VMs and services from home.',
      area:    'Infrastructure / System Engineering',
      role:    'Setup, Configuration',
    },
    de: {
      title:   'Home Server',
      excerpt: 'Selbst gehostetes Proxmox-Setup mit eigenen VMs und Diensten.',
      area:    'Infrastruktur / System Engineering',
      role:    'Einrichtung, Konfiguration',
    },
  },
]

// ---- SERVICES -----------------------------------------------
//  To add a new service:
//  1. Add an entry below
//  2. Create en/services/{slug}.astro and de/services/{slug}.astro

export const services: ServiceEntry[] = [
  {
    slug: 'websites',
    en: {
      title:    'Website Create & Host',
      excerpt:  'Custom, responsive websites — designed, developed and hosted.',
      features: ['Custom responsive design', 'Mobile-first development', 'Hosting & domain setup'],
    },
    de: {
      title:    'Website Erstellen & Hosten',
      excerpt:  'Individuelle, responsive Websites — gestaltet, entwickelt und gehostet.',
      features: ['Individuelles Responsive Design', 'Mobile-first Entwicklung', 'Hosting & Domain-Einrichtung'],
    },
  },
  {
    slug: 'mail-office',
    en: {
      title:    'Mail & Office',
      excerpt:  'Microsoft 365 setup, domain-linked email and cloud storage.',
      features: ['Custom domain email', 'Microsoft 365 configuration', 'OneDrive / SharePoint'],
    },
    de: {
      title:    'Mail & Office',
      excerpt:  'Microsoft 365 Einrichtung, eigene E-Mail-Domain und Cloud-Speicher.',
      features: ['E-Mail mit eigener Domain', 'Microsoft 365 Konfiguration', 'OneDrive / SharePoint'],
    },
  },
  {
    slug: 'ys-workout',
    en: {
      title:    'YS.Workout',
      excerpt:  'A clean workout tracker — built by an athlete, for athletes.',
      features: ['Custom training plans', 'Exercise & set tracking', 'Mobile & desktop'],
    },
    de: {
      title:    'YS.Workout',
      excerpt:  'Ein übersichtlicher Workout-Tracker — von einem Sportler, für Sportler.',
      features: ['Individuelle Trainingspläne', 'Übungs- & Satz-Tracking', 'Mobile & Desktop'],
    },
  },
]

// ---- HELPERS ------------------------------------------------

export function getProject(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getService(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug)
}