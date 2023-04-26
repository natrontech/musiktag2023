module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4b5': ['2.9rem', '1'],
        'xxl': ['9rem', '1'],
        'xxxl': ['16rem', '1.2'],
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      }
    },
    daisyui: {
      themes: false,
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("daisyui"),
  ],
  corePlugins: {
    fontFamily: true,
  },
}
