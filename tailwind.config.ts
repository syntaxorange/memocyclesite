import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          'from, 50%, to': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        }
      },
      animation: {
        flash: 'flash 1s both 2',
      }
    },
  },
  plugins: [],
}
export default config
