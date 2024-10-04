import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#181C31",
        primary: "#302ED0",
        secondary: "#863EF2",
        stroke: "#EBEFF4",
        dark: "#15182B",
        body: "#79808A",
        gray: "#F8F9FF",
        "stroke-dark": "#34374A",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(55.15deg, #863EF2 -7.09%, #302ED0 51.72%, #EBEFF4 101.48%)",
        "gradient-2": "linear-gradient(120.12deg, #FF8FE8 0%, #302ED0 100%)",
        "gradient-3":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)",
        texture: "url('/images/graphics/texture.svg')",
      },
      screens: {
        xs: "450px",
        "3xl": "1500px",
      },
      boxShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
        input: "0px 10px 30px rgba(74, 108, 247, 0.08)",
      },
      dropShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
