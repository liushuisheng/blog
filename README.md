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

工作流在 `master` 分支有新提交时执行两套生产构建：

- 使用 `https://lss.is-a.dev/blog` 和 `/blog` 基础路径部署到 GitHub Pages。
- 使用 `https://www.jidehub.top` 和 `/` 基础路径，通过 SSH 同步部署到当前腾讯云 CVM。

首次启用 GitHub Pages 时，需要在仓库 Settings → Pages 中将 Source 设为 GitHub Actions。

### 腾讯云 CVM

1. 确保部署账号可以通过 SSH 登录服务器，并对 `/var/www/jidehub.top` 有创建目录、写入和切换符号链接的权限。
2. 将 `deploy/nginx/jidehub.top.conf` 安装为 Nginx 站点配置，签发证书后检查并重载 Nginx。
3. 在 GitHub 仓库 Settings → Secrets and variables → Actions 中添加 Secrets：
   - `TENCENT_CVM_HOST`：服务器地址，当前解析地址为 `42.194.169.35`。
   - `TENCENT_CVM_USER`：SSH 部署账号。
   - `TENCENT_CVM_SSH_PRIVATE_KEY`：该账号的 SSH 私钥。
   - `TENCENT_CVM_SSH_KNOWN_HOSTS`：使用可信网络执行 `ssh-keyscan -H 42.194.169.35` 后确认指纹所得的完整记录。
4. 可选 Actions Variable `TENCENT_CVM_PORT` 指定 SSH 端口，未设置时使用 `22`。
5. 手动运行一次 Actions 中的 “Deploy Astro site”，访问 `https://www.jidehub.top/` 验证首页、文章页、`sitemap-index.xml` 和 `robots.txt`。

每次发布会写入 `/var/www/jidehub.top/releases/<commit>`，再原子切换 `/var/www/jidehub.top/current`，并清理七天前的旧版本。

### ICP 备案号

站点页脚固定展示备案号 `粤ICP备2025440187号`，并链接至工信部备案管理系统。两个域名直接指向同一网站时，腾讯云说明应悬挂主体备案号。

仓库根目录中的旧 HTML、CSS 和 JavaScript 是迁移前的 Hexo 发布产物，只用于历史对照；新站构建不会读取这些文件。
