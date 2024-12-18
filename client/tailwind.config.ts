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
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-disabled": "var(--primary-disabled)",
        secondary: "var(--secondary)",
        light: "var(--light)",
        dark: "var(--dark)",
        "dark-hover": "var(--dark-hover)",
        grey: "var(--grey)",
        error: "var(--error)",
        success: "var(--success)"
      },
    },
  },
  plugins: [],
};
export default config;
