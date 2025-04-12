import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        animation: {
          hero: "fadeIn 1s ease-out forwards",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0", transform: "scale(0.9) translateY(20px)" },
            "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
          },
        },
        colors: {
          white: '#F4F4F2',
          gray: '#E8E8E8',
          darkgray: '#BBBFCA',
          dark: '#495464',
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        width: {
          '128': '32rem',
        },
    },
  },
  plugins: [],
};

export default config;
