import { docsCatalog } from '../lib/docs-catalog';

export const prerender = true;

export function GET() {
  const index = docsCatalog.map(({ title, description, href, section, headings, body }) => ({
    title, description, href, section, headings, body,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
