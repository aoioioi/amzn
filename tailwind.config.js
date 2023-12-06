module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          lighter: '#37475A',
          light: '#232F3E',
          DEFAULT: '#131921'
        },
      },
      outline: {
        white: '1px solid white'
      },
      keyframes: {
        slide_right: {
          '0%': { left: '-500px' },
          '100%': { left: '0' }
        },
        slide_left: {
          from: { left: '0' },
          to: { left: '-500px' }
        }
      },
      animation: {
        slide_right: 'slide_right .3s ease-in forwards',
        slide_left: 'slide_left 1.5s ease-in forwards'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
