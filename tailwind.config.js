/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs:"300px",
      sm: "520px",
      md: "850px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        backgroundGif: "url('./assets/confetti.gif')",
        backgroundContact: "url('./assets/contact.png')",
        backgroundSchool:"url('./assets/school.jpg')",
        backgroundCollege:"url('./assets/college.jpg')"
        
      },
      animation: {
        myAnim:"myAnimation 0.7s ease 0s 1 normal forwards",
        preloader: "preloader 4s normal forwards",
      },
      spacing: {
        128: "3rem",
        256: "4rem",
        512:"6rem",
        1024:"30rem",
      },
      boxShadow: {
        customShadow: "0 3px 8px rgba(33, 33, 33, 0.2)",
      },
      keyframes: {
        myAnimation: {
          "0%, 100%":{ transform: "translateX(0)" },
         "20%, 60%": { transform: "translateX(-8px)" },
          "40%, 80%": { transform: "translateX(8px)" },
        },
        preloader: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },

      },
    },
    fontFamily: {
      sans: ["arial", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      display: ["Oswald"],
      google: ["GOOGLE"],
      sanskrit: ["Sanskrit"]
    },
  },
  plugins: [],
};
