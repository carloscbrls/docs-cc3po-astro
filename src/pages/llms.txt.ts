import { docsCatalog } from '../lib/docs-catalog';

export const prerender = true;

export function GET() {
  const sections = new Map<string, typeof docsCatalog>();
  for (const doc of docsCatalog) {
    const list = sections.get(doc.section) || [];
    list.push(doc);
    sections.set(doc.section, list);
  }

  const lines = [
    '# CC3PO Docs',
    '',
    '> Client knowledge base for CC3PO AI assistants, websites, security, billing, WordPress, compliance, and troubleshooting. Written in plain language. Internal Village records remain in Google Drive and are not mirrored here.',
    '',
    '## Start here',
    '',
    '- [Knowledge Base](https://docs.cc3po.com/): Find answers, fix fast.',
    '- [Getting Started](https://docs.cc3po.com/guides/agent-system/client-guide): Set up an AI assistant in five minutes.',
    '- [Guías en español](https://docs.cc3po.com/es/guides/agent-system/client-guide): Primeros pasos en español.',
    '- [Technical documentation — reserved](https://docs.cc3po.com/technical/): Reserved for future template and product documentation.',
    '',
    '## Support',
    '',
    '- Email: support@cc3po.com',
    '- Phone: (209) 701-1137, business hours Monday–Friday 9am–5pm PT',
    '',
  ];

  for (const [section, docs] of [...sections.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`## ${section}`, '');
    for (const doc of docs) {
      const url = new URL(doc.href, 'https://docs.cc3po.com').toString();
      lines.push(`- [${doc.title}](${url}): ${doc.description}`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
