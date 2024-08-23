import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'Jakarta':["Plus Jakarta Sans", "sans-serif"],
      'Poppins':["Poppins", "sans-serif"]
    },
    extend: {
      extend: {
        zIndex: {
          'navbar': '50', // Custom z-index value for navbar
          'card': '10', // Custom z-index value for card
        }
      },
      backgroundImage:{
        'hero': "url('/hero.png')",
      },
      colors: {
        'primary': '#ecfdfb',
        'secoundaty': '#14324d',
        'tertiary':'#69dade',
        'quaternary':'#217065',
      },
    },
  },
  plugins: [],
};
export default config;
