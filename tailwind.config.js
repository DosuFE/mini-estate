/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // ROBOTO FLEX
    fontFamily: {
      'roboto': ["Roboto Flex", 'sans-serif'],
      'anek': ["Anek Devanagari", 'sans-serif'],
    },
    extend: {
      // BACKGROUND IMAGE
      backgroundImage: {
        'house': "url('./images/hero-house.jpg')",
        'property': "url('./images/Property-Listing-19.jpg')",
      },
      // COLORS
      colors: {
        'regal-blue': '#243c5a',
        'blue': '#001190',
        'sky': '#15a9fc',
      },
    },
  },
  plugins: [],
}