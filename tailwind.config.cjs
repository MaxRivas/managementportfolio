/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        light: "#FFFFFF",
        blue: "#0066cc",
        green: "#28a745",
        gold: "#ffd700",
        gray: "#C4C4C4",
        "dark-gray": "#1A1A1A",
        "management-blue": "#1e3a8a",
        "management-green": "#059669",
        accent: "#f59e0b",
        /* CSS variable-backed tokens for runtime theming and Tailwind utility mapping */
        "mp-bg": "var(--mp-bg)",
        "mp-text": "var(--mp-text)",
        "mp-muted": "var(--mp-muted)",
        "mp-accent": "var(--mp-accent)",
        "mp-accent-2": "var(--mp-accent-2)",
        "mp-accent-3": "var(--mp-accent-3)",
        "mp-card-border": "var(--mp-card-border)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};