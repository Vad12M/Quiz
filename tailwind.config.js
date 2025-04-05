
const colors = {
  primary: '#E4229C',
  dark: '#1F002B',
  secondary: '#36173D',
  lightGray: '#C4C8CC80',
}


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        niconne: ['Niconne', 'cursive'],
        albertsans: ['Albert Sans', 'sans-serif'],
      },
      textColor: {
        ...colors,
      },
      backgroundColor: {
        ...colors,
      },
      borderColor: {
        ...colors,
      },
    },
  },
  plugins: [],
};
