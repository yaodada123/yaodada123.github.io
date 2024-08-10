import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "工具使用",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "IDEA下载教程",
            icon: "edit",
            link: "1",
          },
          {
            text: "Java代码实现对称加密",
            icon: "edit",
            link: "2",
          },
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
