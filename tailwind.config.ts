import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        120: '30rem',
        125: '31.25rem'
      },
      height: {
        125: '31.25rem'
      },
      colors: {
        'gio-300': '#00ff00',
        'typescript': '#2f74c0',
        'react': '#6bddfa',
        'javascript': '#efd81d',
        'node': '#489D5F',
        'sql': '#DB7533',
        'html': '#FF6713',
        'css': '#00ade5',
        'next': '#000000'
      },
      keyframes: {
        blink: {
          '50%': {
            opacity: '0'
          },
        }
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite'
      }
    },
  },
  plugins: [],
}
export default config
