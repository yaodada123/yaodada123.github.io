import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "摇一摇的博客",
      description: "摇一摇的个人站点吧",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  // theme: hopeTheme({
  //   // 默认为 GitHub. 同时也可以是一个完整的 URL
  //   repo: "vuepress-theme-hope/vuepress-theme-hope",
  //   // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  //   // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  //   repoLabel: "GitHub",
  //   // 是否在导航栏内显示仓库链接，默认为 `true`
  //   repoDisplay: true,
  // }),
  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
