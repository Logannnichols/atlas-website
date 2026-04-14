import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "atlas-blue": "#4BC8E8",
        "atlas-dark": "#0A0A0A",
        "atlas-surface": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
