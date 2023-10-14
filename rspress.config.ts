import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Code learning',
  description: '小余的学习库',
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  mediumZoom: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/2002XiaoYu' },
    ],
    outlineTitle: '文章目录',
    lastUpdated: true,
    lastUpdatedText: '最后更新的文章',
    prevPageText: '上一篇',
    nextPageText: '下一篇',
  },
});
