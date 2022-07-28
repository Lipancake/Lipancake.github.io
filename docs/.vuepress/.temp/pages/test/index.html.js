export const data = JSON.parse("{\"key\":\"v-15554e84\",\"path\":\"/test/\",\"title\":\"安装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"安装 npm安装 推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。 npm i element-ui -S CDN 目前可以通过 unpkg.com/element-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/test/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"江南大学\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"安装\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"npm安装\",\"slug\":\"npm安装\",\"children\":[]},{\"level\":2,\"title\":\"CDN\",\"slug\":\"cdn\",\"children\":[]}],\"readingTime\":{\"minutes\":0.24,\"words\":72},\"filePathRelative\":\"test/README.md\"}")

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
