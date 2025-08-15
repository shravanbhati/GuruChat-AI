/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust to match your file paths
  ],
  plugins: [require("@tailwindcss/typography")],
};
