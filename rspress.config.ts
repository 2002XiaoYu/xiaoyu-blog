import * as path from 'path';
import { defineConfig } from 'rspress/config';


export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Code learning',
  description: '小余知识库',
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
    outlineTitle: '章节索引',
    lastUpdated: true,
    lastUpdatedText: '修订时',
    prevPageText: '静夜思前章已过，独坐思乡情更多',
    nextPageText: '回首往事下篇来，梦里花开不觉哀',
  }
});
