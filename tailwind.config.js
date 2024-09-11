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
        'sea': "url('./images/sea-house.png')",
        'explore-banner': "url('./images/hero-house3.jpg')",
        'hotel': "url('./images/hotel-house.png')",
      },
      // COLORS
      colors: {
        'regal-blue': '#123763',
        'blue': '#001190',
        'sky': '#15a9fc',
      },
    },
  },
  plugins: [],
}