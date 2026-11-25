type MarkdownModule = {
  frontmatter: Record<string, unknown>;
  url?: string;
  rawContent?: () => string;
};

export interface DocEntry {
  title: string;
  description: string;
  href: string;
  section: string;
  locale: 'en' | 'es';
  owner?: string;
  reviewBy?: string;
  updated?: string;
  headings: string[];
  body: string;
}

const modules = import.meta.glob<MarkdownModule>('../pages/**/*.md', { eager: true });

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function sectionFromPath(href: string, locale: string): string {
  const clean = href.replace(/^\/(es\/)?/, '');
  const parts = clean.split('/').filter(Boolean);
  if (parts[0] === 'troubleshooting') return locale === 'es' ? 'Resolución de problemas' : 'Troubleshooting';
  if (parts[0] !== 'guides') return locale === 'es' ? 'Guías' : 'Guides';
  const key = parts[1] || '';
  const labels: Record<string, [string, string]> = {
    'agent-system': ['Your AI Assistant', 'Tu asistente de IA'],
    ai: ['AI & Automation', 'IA y automatización'],
    'client-setup': ['Client Setup', 'Configuración del cliente'],
    village: ['Village Guides', 'Guías de Village'],
    wordpress: ['WordPress Guides', 'Guías de WordPress'],
    services: ['Services', 'Servicios'],
    'web-excellence': ['Resources', 'Recursos'],
  };
  if (labels[key]) return locale === 'es' ? labels[key][1] : labels[key][0];
  if (key.includes('compliance') || key.includes('scanner')) return locale === 'es' ? 'Cumplimiento' : 'Compliance';
  return locale === 'es' ? 'Guías' : 'Guides';
}

function routeFromFile(file: string): string {
  let route = file.replace(/^\.\.\/pages/, '').replace(/\.md$/, '');
  route = route.replace(/\/index$/, '/');
  return route || '/';
}

function plainText(markdown: string): string {
  return markdown
    .replace(/^---[\s\S]*?---\s*/m, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|~-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const docsCatalog: DocEntry[] = Object.entries(modules)
  .map(([file, mod]) => {
    const fm = mod.frontmatter || {};
    const href = mod.url || routeFromFile(file);
    const locale = href.startsWith('/es/') || asString(fm.lang) === 'es' ? 'es' : 'en';
    const raw = typeof mod.rawContent === 'function' ? mod.rawContent() : '';
    const headings = [...raw.matchAll(/^#{2,3}\s+(.+)$/gm)].map((m) => m[1].replace(/[#*_`]/g, '').trim());
    return {
      title: asString(fm.title) || href,
      description: asString(fm.description) || '',
      href,
      section: sectionFromPath(href, locale),
      locale,
      owner: asString(fm.owner),
      reviewBy: asString(fm.reviewBy),
      updated: asString(fm.updated),
      headings,
      body: plainText(raw).slice(0, 30000),
    } satisfies DocEntry;
  })
  .sort((a, b) => a.href.localeCompare(b.href));

export function relatedDocs(entry: DocEntry, limit = 3): DocEntry[] {
  const words = (text: string) => new Set(text.toLowerCase().split(/[^a-z0-9áéíóúñü]+/i).filter((w) => w.length > 3));
  const sourceWords = words(`${entry.title} ${entry.description} ${entry.headings.join(' ')}`);
  return docsCatalog
    .filter((candidate) => candidate.href !== entry.href && candidate.locale === entry.locale)
    .map((candidate) => {
      const candidateWords = words(`${candidate.title} ${candidate.description} ${candidate.headings.join(' ')}`);
      let score = candidate.section === entry.section ? 12 : 0;
      if (candidate.href.split('/').slice(0, 4).join('/') === entry.href.split('/').slice(0, 4).join('/')) score += 8;
      for (const word of candidateWords) if (sourceWords.has(word)) score += 1;
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function docByPath(path: string): DocEntry | undefined {
  const normalized = path.length > 1 ? path.replace(/\/$/, '') : path;
  return docsCatalog.find((entry) => entry.href.replace(/\/$/, '') === normalized || entry.href === path);
}
