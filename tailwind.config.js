/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090C',
          light: '#11141A',
          lighter: '#1A1E26',
          card: 'rgba(20, 24, 33, 0.75)',
        },
        electric: {
          DEFAULT: '#0084FF',
          glow: 'rgba(0, 132, 255, 0.4)',
          light: '#38A2FF',
        },
        liquidGold: {
          DEFAULT: '#FFD700',
          glow: 'rgba(255, 215, 0, 0.35)',
          metallic: '#F59E0B',
        },
        aurora: {
          DEFAULT: '#00F5A0',
          glow: 'rgba(0, 245, 160, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0, 132, 255, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(0, 132, 255, 0.65))' },
        }
      }
    },
  },
  plugins: [],
}
