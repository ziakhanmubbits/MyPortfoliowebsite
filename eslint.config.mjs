import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use an array to extend multiple configurations
  ...compat.extends([
    "next/core-web-vitals",
    "next/typescript",
  ]),
  {
    rules: {
      // Custom rule configuration
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
