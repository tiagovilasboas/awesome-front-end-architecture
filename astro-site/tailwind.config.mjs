import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ea580c', // orange-600
          light: '#ffedd5',
          dark: '#ffb25c'
        }
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [typography],
};