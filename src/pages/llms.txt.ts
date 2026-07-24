import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  const projects = await getCollection('projects');
  const body = [`# ${site.title}`, '', `> ${site.description}`, '', '## 主要页面', `- [作品集](${site.url}/projects/)`, `- [文章](${site.url}/articles/)`, `- [关于](${site.url}/about/)`, '', '## 文章', ...posts.map((p) => `- [${p.data.title}](${site.url}/articles/${p.id}/): ${p.data.description}`), '', '## 作品', ...projects.map((p) => `- [${p.data.title}](${site.url}/projects/${p.id}/): ${p.data.summary}`), ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
