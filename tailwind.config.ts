import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        alumni: ['"Alumni Sans Pinstripe"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        ysabeau: ['"Ysabeau SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
