import next from "@next/eslint-plugin-next";
import typescriptESLint from "@typescript-eslint/eslint-plugin";

export default [
  {
    plugins: {
      "@next/next": next,
      "@typescript-eslint": typescriptESLint,
    },
    extends: [
      "plugin:@next/next/recommended",
      "plugin:@typescript-eslint/recommended",
      "next/core-web-vitals",
    ],
    rules: {
      "react-hooks/exhaustive-deps": "error",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
    settings: {
      next: {
        rootDir: __dirname,
      },
    },
  },
];
