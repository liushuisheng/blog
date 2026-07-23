const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteOrigin = (import.meta.env.PUBLIC_SITE_ORIGIN ?? 'https://lss.is-a.dev').replace(/\/$/, '');

export const site = {
  name: '刘水生',
  brand: 'AI进化日记',
  title: '刘水生的技术博客',
  description: '一个 AI 全栈开发者的技术博客，记录 AI 应用、全栈工程、产品实践与持续思考。',
  url: `${siteOrigin}${basePath}`,
  github: 'https://github.com/liushuisheng',
  email: '',
  nav: [
    { href: '/', label: '首页' },
    { href: '/projects/', label: '作品' },
    { href: '/blog/', label: '文章' },
    { href: '/archive/', label: '归档' },
    { href: '/about/', label: '关于' }
  ]
};

export const withBase = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}` || '/';
};
