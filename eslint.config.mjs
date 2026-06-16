import next from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...next,
  {
    rules: {
      // These fire on idiomatic patterns we use intentionally: the next-themes
      // mounted-guard (hydration safety), Embla's init sync, and a scroll-listener
      // priming call. All are valid external-synchronization effects.
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
