const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
};
