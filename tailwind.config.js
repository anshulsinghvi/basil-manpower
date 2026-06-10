
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#020617',
        brand: '#2563eb',
        accent: '#06b6d4',
        glass: 'rgba(255,255,255,0.08)',
      },

      boxShadow: {
        glow: '0 0 40px rgba(37,99,235,0.35)',
        glass: '0 8px 32px rgba(15,23,42,0.15)',
        premium: '0 25px 60px rgba(15,23,42,0.18)',
      },

      backdropBlur: {
        xs: '2px',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      backgroundImage: {
        aurora:
          'linear-gradient(135deg,#0ea5e9 0%,#2563eb 25%,#7c3aed 60%,#06b6d4 100%)',

        mesh:
          'radial-gradient(circle at top left,#2563eb33,transparent 40%), radial-gradient(circle at bottom right,#06b6d433,transparent 40%)',
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
        gradient: 'gradient 12s ease infinite',
      },

      keyframes: {
        float: {
          '0%,100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-12px)',
          },
        },

        glow: {
          from: {
            boxShadow:
              '0 0 20px rgba(37,99,235,0.2)',
          },
          to: {
            boxShadow:
              '0 0 50px rgba(37,99,235,0.45)',
          },
        },

        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
