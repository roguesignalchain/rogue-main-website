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
        void: '#000000',
        obsidian: {
          950: '#000000',
          900: '#050505',
          850: '#0a0a0c',
          800: '#0f0f13',
          700: '#141419',
          600: '#1c1c24',
        },
        surface: {
          DEFAULT: '#0a0a0c',
          card: '#0d0d11',
          elevated: '#121217',
          overlay: '#181820',
          hover: '#1e1e28',
        },
        tactical: {
          white: '#ffffff',
          zinc: {
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
          },
        },
        // High-Contrast Monochrome Rogue palette
        rogue: {
          50: '#ffffff',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#ffffff', // High-contrast pure white
          600: '#e4e4e7',
          700: '#a1a1aa',
          800: '#3f3f46',
          900: '#18181b',
          glow: 'rgba(255, 255, 255, 0.20)',
        },
        amber: {
          tech: '#d4d4d8', // Muted metallic zinc
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.10)',
          medium: 'rgba(255, 255, 255, 0.25)',
          glow: 'rgba(255, 255, 255, 0.35)',
          hairline: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'technical-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        'tactical-border': '0 0 0 1px rgba(255, 255, 255, 0.12)',
        'tactical-hover': '0 0 0 1px rgba(255, 255, 255, 0.35), 0 10px 30px -5px rgba(0, 0, 0, 0.9)',
        'tactical-glow': '0 0 25px rgba(255, 255, 255, 0.15)',
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
