import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginOxlint from "eslint-plugin-oxlint";
import skipFormatting from "eslint-config-prettier/flat";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue,ts,mts,tsx}"],
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  ...pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  ...pluginOxlint.buildFromOxlintConfigFile(".oxlintrc.json"),

  skipFormatting,

  {
    name: "app/custom-rules",
    files: ["**/*.{vue,ts,mts,tsx}"],
    rules: {
      "vue/multi-word-component-names": "off",
      // 1. 必须关闭原生规则（冲突根源！）
      "no-unused-vars": "off",
      // 2. TS 专用规则（正确忽略 _ 开头变量）
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_", // 忽略所有 _ 开头的变量（_e / _res / _err）
          argsIgnorePattern: "^_", // 忽略所有 _ 开头的参数
          caughtErrorsIgnorePattern: "^_", // 🔥 关键：忽略 catch 里的 _e / _err
        },
      ],
    },
  },
);
