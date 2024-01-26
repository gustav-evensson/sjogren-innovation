import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      screens: {
        mw: '1300px'
      },
      backgroundImage: {
        'hero-image': "url('/images/hero.svg')",
      }
    },
    colors: {
      text: '#000000',
      text_secondary: '#424242',
      background: '#FFFFFF',
      primary: '#0D81E8',
      secondary: '#0A5CA4',
      third: '#06335C',
      accent_innovation: 'A66EED',
      accent_quality: '#6EEDA5',
      accent_accessibility: '#EDA56E',
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
export default config;
