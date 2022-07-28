import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  { text: "Home", icon: "home", link: "/en/" },
  { text: "People", icon: "creative", link: "/en/people/" },
  { text: "Publication", icon: "creative", link: "/en/paper/" },
  { text: "Applications", icon: "creative", link: "/en/application/" },
  { text: "Seminar", icon: "creative", link: "/en/seminar/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/en/posts/",
    children: [
      {
        text: "Articles 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "Article 1", icon: "edit", link: "article1" },
          { text: "Article 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
          "article5",
          "article6",
          "article7",
          "article8",
        ],
      },
      // {
      //   text: "Articles 5-12",
      //   icon: "edit",
      //   children: [
      //     {
      //       text: "Article 5",
      //       icon: "edit",
      //       link: "article/article5",
      //     },
      //     {
      //       text: "Article 6",
      //       icon: "edit",
      //       link: "article/article6",
      //     },
      //     "article/article7",
      //     "article/article8",
      //   ],
      // },
      // { text: "Article 9", icon: "edit", link: "article9" },
      // { text: "Article 10", icon: "edit", link: "article10" },
      // "article11",
      // "article12",
    ],
  },
  // {
  //   text: "Theme Docs",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/",
  // },
]);
