/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: '1px',
        sm: '0.5px',
        lg: '2px',
      },
      textStrokeColor: {
        green: '#2E7D32',
        white: '#FFFFFF',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-stroke')
  ],
}