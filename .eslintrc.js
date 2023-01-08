module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    commonjs: true,
    "jest/globals": true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        semi: false,
        printWidth: 140,
      },
    ],
  },
  ignorePatterns: ["node_modules", "lib"],
}
