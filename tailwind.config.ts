import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#ffffff',
        primary: '#2a85ff',
        primaryDeep: '#0069f6',
        primaryMild: '#4996ff',
        primarySubtle: '#2a85ff1a',
        error: '#ff6a55',
        errorSubtle: '#ff6a551a',
        success: '#10b981',
        successSubtle: '#05eb7624',
        info: '#2a85ff',
        infoSubtle: '#2a85ff1a',
        warning: '#f59e0b',
        warningSubtle: '#ffd40045',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
