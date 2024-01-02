// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logoColor: 'rgba(254, 122, 3, 1)', // Replace with your desired RGBA values
      },
    },
  },
  plugins: [],
};
