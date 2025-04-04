// .eslintrc.config.js
import next from "@next/eslint-plugin-next";
import typescriptESLint from "@typescript-eslint/eslint-plugin";

export default [
  {
    // Configuración principal para Next.js
    plugins: {
      "@next/next": next,
      "@typescript-eslint": typescriptESLint,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      // Reglas personalizadas adicionales
      "react-hooks/exhaustive-deps": "error",
    },
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      next: {
        rootDir: import.meta.dirname,
      },
    },
  },
];