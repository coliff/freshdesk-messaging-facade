import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    ignores: ["**/*.min.js"],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: "module",
      globals: {
        ...globals.browser,
        myCustomGlobal: "readonly",
        fcWidget: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "no-alert": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-empty": "error",
      "no-eval": "error",
      "no-implicit-coercion": "error",
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "no-undef": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "object-curly-spacing": ["error", "always"],
      "prefer-const": "error",
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      "space-before-blocks": ["error", "always"],
      strict: ["error", "global"],
    },
  },
  eslintConfigPrettier,
];
