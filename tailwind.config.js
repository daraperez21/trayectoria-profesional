/** @type:import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b0b8c8',
          400: '#8590a8',
          500: '#66718a',
          600: '#515a73',
          700: '#43495e',
          800: '#393e50',
          900: '#1a1f2e',
          950: '#0c0f1a',
        },
        teal: {
          50: '#effcf8',
          100: '#c9f7ee',
          200: '#93eddd',
          300: '#56ddc6',
          400: '#25c2aa',
          500: '#0fa890',
          600: '#088776',
          700: '#0a6c60',
          800: '#0c564e',
          900: '#0c4740',
        },
        amber: {
          50: '#fdf8ee',
          100: '#f9ecd0',
          200: '#f3d79c',
          300: '#ecbb60',
          400: '#e6a238',
          500: '#d9881c',
          600: '#bb6614',
          700: '#954c15',
          800: '#7a3d17',
          900: '#663318',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
