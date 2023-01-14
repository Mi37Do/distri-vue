/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#073f5c",
          secondary: "#60a5fa",
          accent: "#475569",
          neutral: "#2563eb",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
