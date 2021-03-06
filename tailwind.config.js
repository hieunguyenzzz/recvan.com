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
        'view-height-fit': 'calc(100vh-var(--header-height))',
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
        number: ['"gunplay_rg"', 'monospace'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('./styles/plugins/nestedGroup'),
    require('@tailwindcss/typography'),
  ],
}
