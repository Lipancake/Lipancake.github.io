export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-06f03345","v-76d125eb","v-635594d7","v-1eadca4b","v-184f4da6","v-e1e3da16","v-41699267","v-fa697746","v-c6d0f7fc","v-227b47fe","v-36b0095a"]},"/en/":{"path":"/en/article/","keys":["v-3e9371aa","v-50a4c495","v-45af1cf1","v-0c393394","v-0d98534a","v-e6412400","v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/en/":{"path":"/en/encrypted/","keys":["v-0c393394"]}},"slide":{"/":{"path":"/slide/","keys":[]},"/en/":{"path":"/en/slide/","keys":["v-50a4c495"]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":["v-3e9371aa","v-d3a8842a","v-65363dd2","v-72dd02ca"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-06f03345","v-76d125eb","v-635594d7","v-1eadca4b","v-184f4da6","v-e1e3da16","v-41699267","v-fa697746","v-c6d0f7fc","v-227b47fe","v-36b0095a"]},"/en/":{"path":"/en/timeline/","keys":["v-50a4c495","v-45af1cf1","v-0c393394","v-0d98534a","v-e6412400","v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408","v-3e9371aa"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
