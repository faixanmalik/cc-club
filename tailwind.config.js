
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          925: "#0b0b0b"
        }
      },
      boxShadow: {
        'glow': '0 8px 30px rgba(234, 179, 8, 0.2)'
      }
    },
  },
  plugins: [],
};
