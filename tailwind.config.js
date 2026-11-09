/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rogue: {
          50: '#fff5eb',
          100: '#ffe8d6',
          200: '#ffceab',
          300: '#ffad75',
          400: '#ff803b',
          500: '#ff5500', // Primary Rogue Signal Orange
          600: '#e04800',
          700: '#b83500',
          800: '#8a2600',
          900: '#521700',
          glow: 'rgba(255, 85, 0, 0.45)',
        },
        obsidian: {
          950: '#060608',
          900: '#0a0a0c',
          850: '#0f0f13',
          800: '#14141a',
          700: '#1c1c24',
          600: '#262633',
        },
        amber: {
          tech: '#ffb300',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(255, 85, 0, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.08) 0%, transparent 60%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal-glow': 'signalGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        signalGlow: {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

