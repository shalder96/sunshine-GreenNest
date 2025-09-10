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
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.25)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.35)',
        lg: '3px 3px 6px rgba(0,0,0,0.5)',
        glow: '0 0 10px rgba(34,197,94,0.8)', // cool neon glow effect
      },
    },
  },
  plugins: [
    require('tailwindcss-text-stroke'),
    
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const textShadow = theme('textShadow');
      Object.keys(textShadow).forEach((key) => {
        const className = key === 'DEFAULT' ? 'text-shadow' : `text-shadow-${key}`;
        newUtilities[`.${className}`] = { textShadow: textShadow[key] };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}