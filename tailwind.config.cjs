/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'green': '#00875F',
        'green-light': '#00B37E',
        'green-dark': '#015F43',
        'red': '#F03847',
        'red-dark': '#AB222E',
        'gray1': '#121214',
        'gray2': '#202024',
        'gray3': '#323238',
        'gray4': '#7C7C8A',
        'gray5': '#8D8D99',
        'gray6': '#C4C4CC',
        'gray7': '#E1E1E6',
        'white': '#FEFEFE',
        'gray-700': '#29292E',
      },
    },
  },
  plugins: [],
}
