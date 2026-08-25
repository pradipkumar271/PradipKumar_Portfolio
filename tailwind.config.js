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
        background: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        'card-hover': 'var(--bg-card-hover)',
        border: 'var(--border-color)',
        'border-hover': 'var(--border-hover)',
        foreground: 'var(--text-primary)',
        muted: 'var(--text-muted)',
        subtle: 'var(--text-subtle)',
        accent: {
          DEFAULT: '#3b82f6',
          glow: '#60a5fa',
          dark: '#1d4ed8',
        },
        emerald: {
          DEFAULT: '#10b981',
          glow: '#34d399',
        },
        indigo: {
          DEFAULT: '#6366f1',
          glow: '#818cf8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'glow-line': 'glowLine 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowLine: {
          '0%, 100%': { opacity: '0.4', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.8', transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
