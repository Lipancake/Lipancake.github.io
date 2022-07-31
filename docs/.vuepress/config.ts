import { defineUserConfig } from "@vuepress/cli";
import { webpackBundler } from '@vuepress/bundler-webpack'
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { path } from "@vuepress/utils";



export default defineUserConfig({
  // webpack打包，在使用element-plus插件的时候加的，但
  bundler: webpackBundler({
      chainWebpack : (config, isServer, isBuild) => {
      config.resolve.extensions.add('.')
      // https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
      config.module
        .rule('esm')
        .test(/\.m?jsx?$/)
        .resolve.set('fullySpecified', false)
        .end()
        .type('javascript/auto')
    }
  }),

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    // "@theme-hope/components/HomePage": path.resolve(__dirname, "./components/HomePage.vue"),
    // "@theme-hope/module/blog/components/BlogHome": path.resolve(__dirname, "./components/HomePage.vue"),
  },


  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "一个普通的网站",
      description: "一个普通的网站",
    },
  },

  plugins: [
    searchPlugin({
      // 你的选项
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/en/": {
          placeholder: "search",
        },
      },
    }),
  ],

  theme
  
});


