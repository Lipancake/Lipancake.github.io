export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4eaf9f84","v-184f4da6","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-e1e3da16","v-5deafbd7","v-5c362338","v-5b9dea58","v-e3719748","v-283a44cc","v-41699267","v-5a814a99","v-1fa0cd57","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"/en/":{"path":"/en/article/","keys":["v-3e9371aa","v-50a4c495","v-45af1cf1","v-0c393394","v-0d98534a","v-e6412400","v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]},"/en/":{"path":"/en/encrypted/","keys":["v-0c393394"]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]},"/en/":{"path":"/en/slide/","keys":["v-50a4c495"]}},"star":{"/":{"path":"/star/","keys":["v-4eaf9f84","v-5deafbd7","v-0c0c61ab","v-0538ff2f"]},"/en/":{"path":"/en/star/","keys":["v-3e9371aa","v-d3a8842a","v-65363dd2","v-72dd02ca"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-184f4da6","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-e1e3da16","v-5deafbd7","v-5c362338","v-5b9dea58","v-e3719748","v-283a44cc","v-41699267","v-5a814a99","v-1fa0cd57","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690","v-4eaf9f84"]},"/en/":{"path":"/en/timeline/","keys":["v-50a4c495","v-45af1cf1","v-0c393394","v-0d98534a","v-e6412400","v-d3a8842a","v-d7123568","v-da7be6a6","v-e37ff166","v-5e62db56","v-61cc8c94","v-65363dd2","v-689fef10","v-6c09a04e","v-6f73518c","v-72dd02ca","v-7646b408","v-3e9371aa"]}}}

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
