import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chroma: {
          dark: '#0f172a',
          cyan: '#06b6d4',
          purple: '#a855f7',
          pink: '#ec4899',
        }
      }
    },
  },
  plugins: [],
} satisfies Config