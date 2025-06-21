import js from "@eslint/js";
import * as importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        React: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslintPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // Import rules
      "import/no-unresolved": "error",
      "import/named": "warn",
      "import/default": "warn",
      "import/export": "error",
      "import/no-duplicates": "warn",

      // React Refresh
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // TypeScript
      "@typescript-eslint/no-unused-vars": "off",

      // JSX spécifiques à Tailwind ou shaders
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "class",
            "css",
            "tw",
            "args",
            "position",
            "intensity",
            "rotation",
            "vertexShader",
            "fragmentShader",
            "uniforms",
            "side",
            "cmdk-input-wrapper",
          ],
        },
      ],

      // Moins de bruit sur les règles TS strictes
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/require-await": "warn",

      // React JSX divers
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
      "react/no-unescaped-entities": "off",
    },
  },
];
