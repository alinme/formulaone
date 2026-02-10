import type { Config } from "tailwindcss";

import baseConfig from "@saasfly/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
    "../../packages/ui/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        f1: ["Formula1", "Formula One Display", "system-ui", "sans-serif"],
        titillium: ['"Titillium Web"', "system-ui", "sans-serif"],
      },
      colors: {
        "f1-red": "#e10600",
        "f1-red-hover": "#ca0500",
      },
      keyframes: {
        "button-press": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.97)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "button-press": "button-press 0.15s ease-out",
      },
    },
  },
} satisfies Config;
