/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      light: {
        "primary": "#1e3a8a", // Navy Blue
        "secondary": "#0d9488", // Deep Teal
        "accent": "#fbbf24", // Vibrant Yellow
        "neutral": "#2a323c",
        "base-100": "#ffffff",
        "base-200": "#f3f4f6",
        "base-300": "#d1d5db",
        "info": "#93c5fd", // Light Blue Pastel
        "success": "#86efac", // Mint Green Pastel
        "warning": "#fcd34d",
        "error": "#f87171",
      }
    }],
  },
};