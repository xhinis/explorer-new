/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      },
      fontSize: {
        base: '1.1rem',
        sm: '1.02rem',
        lg: '1.3rem',
        xl: '1.5rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
        },
        '.custom-scrollbar:hover': {
          '&::-webkit-scrollbar-thumb': {
            background: 'rgb(131, 131, 131)',
            backgroundImage:
              'linear-gradient(0deg, rgba(131, 131, 131, 0.45) 0%, rgba(131, 131, 131, 0.6) 100%)',
            borderRadius: '10px',
            maxHeight: '40px',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#666cff',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#666cff',
          'base-100': '#222B45',
          'base-200': '#252d37',
        },
      },
    ],
  },
};
