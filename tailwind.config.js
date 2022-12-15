/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "850px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        backgroundGif: "url('./assets/confetti.gif')",
        backgroundContact: "url('./assets/contact.png')",
        backgroundSchool:"url('./assets/school.jpg')",
        backgroundCollege:"url('./assets/college.jpg')",
        backgroundEduGif:"url('./assets/edu.gif')",
        backgroundEdu1Gif:"url('./assets/edu1.gif')",        
        backgroundEdu2Gif:"url('./assets/edu2.gif')",
        backgroundSkill:"url('./assets/skill.gif')"
      },
      animation: {
        preloader: "preloader 4s normal forwards",
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      spacing: {
        1024:"30rem",
        128: "17rem",
        256: "3rem",
        480:"4rem",
        512:"6rem"
      },
      boxShadow: {
        customShadow: "0 0 7px rgba(33, 33, 33, 0.2)",
        customShadow2: "0 3px 8px rgba(33, 33, 33, 0.2)",
      },
      keyframes: {
        preloader: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
          "65%, 70%": { transform: "translateX(7ch)" },
          "75%, 80%": { transform: "translateX(8ch)" },
          "85%, 90%": { transform: "translateX(9ch)" },
          "95%, 100%": { transform: "translateX(11ch)" },
        },
      },
    },
    fontFamily: {
      sans: ["arial", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      google: ["GOOGLE"],
      sanskrit: ["Sanskrit"]
    },
  },
  plugins: [],
};
