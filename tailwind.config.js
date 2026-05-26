/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d8653',
          50: '#f0faf4',
          100: '#dcf3e4',
          500: '#2d8653',
          600: '#246c43',
          700: '#1a5c38',
        },
        secondary: {
          DEFAULT: '#1a5c38',
        },
        accent: {
          DEFAULT: '#f0faf4',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        bn: ['SolaimanLipi', 'Kalpurush', 'system-ui', 'sans-serif'],
        ar: ['"Noto Nastaliq Urdu"', 'Amiri', 'serif'],
        en: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        modal: '20px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
      },
      maxWidth: {
        app: '428px',
      },
      minHeight: {
        tap: '44px',
      },
      minWidth: {
        tap: '44px',
      },
    },
  },
  plugins: [],
};
