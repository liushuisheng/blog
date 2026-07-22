# 刘水生的个人博客与作品集

这是一个使用 Astro 构建的静态个人网站，包含作品集、技术文章、归档、RSS、sitemap 和面向机器读取的 `llms.txt`。

## 本地开发

```bash
npm install
npm run dev
```

生产验证：

```bash
npm run build
npm run preview
```

## 添加文章

在 `src/content/blog/` 新增 Markdown 文件。文章字段由 `src/content.config.ts` 校验，可参考现有文章。

## 添加作品

在 `src/content/projects/` 新增 Markdown 文件。作品支持年份、状态、职责、技术栈、项目亮点、源码和演示链接。

## 部署

工作流在 `master` 分支有新提交时构建 `dist/` 并部署到 GitHub Pages。首次启用时，需要在仓库 Settings → Pages 中将 Source 设为 GitHub Actions。

仓库根目录中的旧 HTML、CSS 和 JavaScript 是迁移前的 Hexo 发布产物，只用于历史对照；新站构建不会读取这些文件。
