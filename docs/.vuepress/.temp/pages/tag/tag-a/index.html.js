export const data = JSON.parse("{\"key\":\"v-06bbb262\",\"path\":\"/tag/tag-a/\",\"title\":\"tag A 标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"tag A 标签\",\"blog\":{\"type\":\"category\",\"name\":\"tag A\",\"key\":\"tag\"},\"layout\":\"Blog\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/tag-a/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"一个普通的网站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"tag A 标签\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
