import { config as baseConfig } from "@repo/eslint-config/base";

export default [
  ...baseConfig,
  {
    files: ["**/*.ts"],
  },
  {
    rules: {
      "turbo/no-undeclared-env-vars": "off",
    },
  },
  {
    ignores: ["node_modules/**"],
  },
];
