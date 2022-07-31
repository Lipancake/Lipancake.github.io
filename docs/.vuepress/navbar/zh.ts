import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "随笔", icon: "creative", link: "/people/" },
  // { text: "论著", icon: "creative", link: "/paper/" },
  // { text: "应用", icon: "creative", link: "/application/" },
  // { text: "研讨会", icon: "creative", link: "/seminar/" },
  // { text: "引导", icon: "creative", link: "/guide/" },
  { text: "博文", 
    icon: "edit", 
    prefix: "/posts/",
    children:[
      {text: "cs61a", icon: "edit", link: ""}
    ] 
  },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-8",
  //       icon: "edit",
  //       // prefix: "article/", 子文件夹
  //       prefix: "",
  //       children: [
  //         { text: "cs61a", icon: "edit", link: "article1" },
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
