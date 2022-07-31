export const categoryMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","keys":["v-41699267","v-c6d0f7fc","v-227b47fe","v-36b0095a"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-41699267"]},"CS61a":{"path":"/category/cs61a/","keys":["v-fa697746"]}}},"/en/":{"path":"/en/category/","map":{"Guide":{"path":"/en/category/guide/","keys":["v-3e9371aa","v-45af1cf1","v-0c393394","v-0d98534a","v-e6412400"]},"CategoryA":{"path":"/en/category/categorya/","keys":["v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408"]},"CategoryB":{"path":"/en/category/categoryb/","keys":["v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-41699267","v-c6d0f7fc","v-227b47fe","v-36b0095a"]},"tag B":{"path":"/tag/tag-b/","keys":["v-41699267","v-c6d0f7fc","v-227b47fe","v-36b0095a"]},"Disc":{"path":"/tag/disc/","keys":["v-fa697746"]}}},"/en/":{"path":"/en/tag/","map":{"disable":{"path":"/en/tag/disable/","keys":["v-45af1cf1"]},"encryption":{"path":"/en/tag/encryption/","keys":["v-0c393394"]},"Markdown":{"path":"/en/tag/markdown/","keys":["v-0d98534a"]},"Page config":{"path":"/en/tag/page-config/","keys":["v-3e9371aa"]},"Guide":{"path":"/en/tag/guide/","keys":["v-3e9371aa"]},"tag A":{"path":"/en/tag/tag-a/","keys":["v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408"]},"tag B":{"path":"/en/tag/tag-b/","keys":["v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
