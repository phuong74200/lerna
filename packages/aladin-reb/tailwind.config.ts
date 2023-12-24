import openColor from "tw-oc";

import { breakpoints } from "./src/configs/theme";
import { toTailwindBreakpoint } from "./src/utils/breakpoint-converter";

export default {
  darkMode: "class",

  corePlugins: { preflight: false },

  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    screens: toTailwindBreakpoint(breakpoints),
    colors: openColor,
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
  },

  plugins: [],
};
