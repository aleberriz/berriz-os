/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111418',
          muted: '#5c6370',
          dark: '#E9ECF1',
        },
        midnight: '#0B1E3F',
        silver: '#B8C4D1',
        canvas: {
          DEFAULT: '#F7F8FA',
          dark: '#0A0D12',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
