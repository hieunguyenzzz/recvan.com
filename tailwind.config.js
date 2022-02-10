module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    namedGroups: ['a', 'b', 'c'],
    extend: {},
  },
  plugins: [require('daisyui'), require('./styles/plugins/nestedGroup')],
}
