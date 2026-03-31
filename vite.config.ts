import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
// 核心变更：使用官方内置的 vite 插件
import VueRouter from "vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // 默认监听 src/pages 目录
      routesFolder: "src/pages",
      dts: "src/route-map.d.ts",
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
