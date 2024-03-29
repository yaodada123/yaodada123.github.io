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
        text: "苹果",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "edit", link: "1" },
          { text: "苹果2", icon: "edit", link: "2" },
          "3",
          "4",
          { text: "迫不及待", icon: "edit", link: "迫不及待" },
        ],
      },
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
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "edit", link: "cherry" },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
      "maoGaiReview",
      "tomato",
      "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
