// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import HomePage from "./components/HomePage.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("HomePage", HomePage);
    app.use(ElementPlus)
  },
});
