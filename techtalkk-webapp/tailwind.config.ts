import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "9px 9px 9px rgba(0, 0, 0, 0.4)",
        "card": "0px 4px 4px #00000040",
        "aboutCard": "1px 4px 4px rgba(127, 71, 240, 0.2)",
        "navigation": "0 1.35px 1.25px 2px rgba(191, 191, 191, 0.35)",
        "navigation-psuedo": "0 -1.35px 1.25px 1px rgba(191, 191, 191, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
