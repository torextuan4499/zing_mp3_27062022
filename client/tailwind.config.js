module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        theme: {
          primary: 'var(--primary-text-color)',
          secondary: 'var(--secondary-text-color)',
          navigation: 'var(--navigation-text-color)',
        },
      },
      backgroundColor: {
        theme: {
          layout: 'var(--layout-color)',
          primary: 'var(--primary-bg-color)',
          sidebar: 'var(--sidebar-bg-color)',
          alpha: 'var(--alpha-bg-color)',
          active: 'var(--active-bg-color)',
        },
      },
      colors: {
        theme: {
          active: 'var(--active-border-color)',
        },
      },
    },
  },
  plugins: [],
}
