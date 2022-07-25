module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--primary-text-color)',
          secondary: 'var(--secondary-text-color)',
          navigation: 'var(--navigation-text-color)',
        },
      },
      backgroundColor: {
        skin: {
          layout: 'var(--layout-color)',
          primary: 'var(--primary-bg-color)',
          sidebar: 'var(--sidebar-bg-color)',
        },
      },
    },
  },
  plugins: [],
}
