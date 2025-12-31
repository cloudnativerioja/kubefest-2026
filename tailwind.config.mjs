/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand tokens
        // - primary.DEFAULT se mantiene como tu azul "brand" (#0086FF)
        // - primary.700/800 se usan para botones sólidos con texto blanco y pasar AA
        primary: {
          DEFAULT: '#0086FF',
          700: '#0070E0', // AA con blanco
          800: '#0066CC', // hover / active
          900: '#00478D', // muy oscuro
        },

        secondary: '#D62293',

        'background-light': '#ffffff',
        'background-dark': '#0B1120',
        'card-dark': '#162036',

        'accent-pink': '#DE1A8D',

        // CNCF palette (mantengo tus nombres originales)
        // Ojo: cncf-blue == primary.DEFAULT
        'cncf-blue': '#0086FF',
        'cncf-dark': '#00478D',
        'cncf-light': '#76B3EE',

        // Útil para textos en dark mode (evita el contraste bajo tipo gray-600 sobre fondo oscuro)
        'muted-dark': '#D1D5DB', // ~gray-300
      },

      fontFamily: {
        display: ['var(--font-space-grotesk)'],
      },

      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
