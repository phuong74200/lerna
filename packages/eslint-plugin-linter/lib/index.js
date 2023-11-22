module.exports.configs = {
  default: {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@tanstack/eslint-plugin-query/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: "packages/*/tsconfig.json",
        },
      },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [
      "import",
      "unused-imports",
      "simple-import-sort",
      "react",
      "@typescript-eslint",
      "jsx-a11y",
      "@tanstack/query",
      "prettier",
    ],
    rules: {
      "import/no-unresolved": "error",
      "import/no-named-as-default": "off",
      "unused-imports/no-unused-imports": "error",
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
      "@tanstack/query/exhaustive-deps": "off",
      "no-console": "error",
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react-hooks/exhaustive-deps": "warn",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages `react` related packages come first.
            ["^react", "^@?\\w"],
            // Internal packages.
            ["^(@|components)(/.*|$)"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.?(css)$"],
          ],
        },
      ],
      // Any unused variables that start with _ will not count as error.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
};
