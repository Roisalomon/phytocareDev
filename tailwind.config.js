/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#2563EB",      // Bleu éducatif
        secondary: "#14B8A6",    // Turquoise moderne
        accent: "#FACC15",       // Jaune vif pour attirer l'attention
        background: "#F8FAFC",   // Gris très clair
        dark: "#0F172A",         // Bleu nuit
      },

      // moi même 
      screens: {
        'ecran': '728px',
        'zeros': '0px',
      },

      animation: {
        floating: "floating 6s ease-in-out infinite",
        // moi même
        draw_line: 'drawLine 2s linear infinite',
        crayon_move: 'crayonMove 2s linear infinite',
        spinSlow: "spinSlow 8s linear infinite",   // rotation lente
        spinSlower: "spinSlower 60s linear infinite", // rotation encore plus lente
        demiSpin: "demiSpin 500ms ease-in-out forwards",
        horizontalBounce: "horizontalBounce 3s ease-in-out infinite",
        doubleUp: "doubleUp 500ms ease-in-out ",
        zoomOutSlow: "zoomOut 5s ease-in-out infinite",
        zoomInSlow: "zoomIn 5s ease-in-out infinite",
        zoomIn: "zoomIn 5s ease-in-out infinite",
        slideDown: "slideDownSlow 3s forwards",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(25px)" },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },

        //  moi même 
        crayonMove: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(120px) rotate(5deg)' },
          '100%': { transform: 'translateX(240px) rotate(0deg)' },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinSlower: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        demiSpin: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        horizontalBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" }, // distance horizontale (ici 10px)
        },
        doubleUp: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(10px)" },  // premier petit saut
          "40%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(10px)" },  // deuxième petit saut
          "80%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },

        slideDownSlow: {
          "0%": {
            transform: "translateY(-100%)",
            // opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            // opacity: "1",
          },
        },

      },
    },
  },
  plugins: [],
}

