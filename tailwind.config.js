module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    namedGroups: ['a', 'b', 'c', 'd'],
    extend: {
      spacing: {
        header: 'var(--header-height)',
        'container-offset': '1rem',
      },
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
  plugins: [
    require('./styles/plugins/nestedGroup'),
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
