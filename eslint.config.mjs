import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        callees: ["classnames", "twClassNames"],
      },
    },
    rules: {
      "object-curly-spacing": ["error", "always"],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
          "pathGroups": [
            {
              "pattern": "react",
              "group": "builtin",
            },
            {
              "pattern": "~/**",
              "group": "internal",
              "position": "after",
            },
            {
              "pattern": "shared/**",
              "group": "internal",
              "position": "before",
            },
          ],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          "pathGroupsExcludedImportTypes": [],
        }
      ],
    },
  },
];

export default eslintConfig;
