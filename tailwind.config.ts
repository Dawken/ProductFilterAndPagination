import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
      colors: {
        lightGrey: {
          DEFAULT: '#e3e3e3',
        },
      },
    },
  },
  plugins: [],
}
export default config
