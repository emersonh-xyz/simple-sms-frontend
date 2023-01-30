/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fbbf24",

          "secondary": "#fb249a",

          "accent": "#8524fb",

          "neutral": "#414558",

          "base-100": "#272935",

          "info": "#67e8f9",

          "success": "#52FA7C",

          "warning": "#facc15",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}
