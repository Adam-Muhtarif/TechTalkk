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
            "card":"0px 4px 4px #00000040"
        },
    },
  },
  plugins: [],
};

export default config;
