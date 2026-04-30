/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        devdark: {
          primary: '#22d3ee',
          secondary: '#818cf8',
          accent: '#f472b6',
          neutral: '#0f172a',
          'base-100': '#080b14',
          'base-200': '#0d1117',
          'base-300': '#0f172a',
          info: '#22d3ee',
          success: '#4ade80',
          warning: '#facc15',
          error: '#f87171',
        },
      },
    ],
    darkTheme: 'devdark',
  },
}
