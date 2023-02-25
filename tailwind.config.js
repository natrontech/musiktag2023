module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      colors: {
        transparent: "transparent",
        'black': '#1A1A1A',
        'white': '#FFFFFF',
      },
      fontSize: {
        '4b5': ['2.9rem', '1'],
        'xxl': ['9rem', '1'],
        'xxxl': ['16rem', '1.2'],
      },
      height: {
        '128': '32rem',
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
