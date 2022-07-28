import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "C:/Users/lyb/Desktop/html/Lipancake.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import Presentation from "C:/Users/lyb/Desktop/html/Lipancake.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "C:/Users/lyb/Desktop/html/Lipancake.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Presentation", Presentation);
    
  }
});