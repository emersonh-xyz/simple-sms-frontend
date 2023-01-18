/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#03C988",

          "secondary": "#1C82AD",

          "accent": "#00337C",

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
