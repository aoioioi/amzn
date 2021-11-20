module.exports = {
  mode: 'jit',
  purge: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
