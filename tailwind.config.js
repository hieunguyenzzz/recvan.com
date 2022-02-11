module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    namedGroups: ['a', 'b', 'c'],
    extend: {
      fontFamily: {
        body: [
          'sofia_pro_soft_md',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        heading: ['good_times_rg', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui'), require('./styles/plugins/nestedGroup')],
}
