import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        graffiti: {
          900: "#111111",
          800: "#222222",
          700: "#333333",
          100: "#e0e0e0",
          50: "#f5f5f5",
        },
        cloud: {
          primary: "#ffffff",
          secondary: "#a3a3a3",
          accent: "#262626"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        graffiti: ["var(--font-graffiti)", "cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;
