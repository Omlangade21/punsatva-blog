import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        cream: "#F9F8F3",
        sand: "#F4F3ED",
        forest: {
          DEFAULT: "#3D6234",
          dark: "#2F4D28",
        },
        line: "#E5E3D8",
      },
    },
  },
  plugins: [],
};

export default config;
