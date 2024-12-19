/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Scans all relevant files in the src folder
    './public/index.html',             // Includes your main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
