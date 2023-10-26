import type { Config } from 'tailwindcss'

//when you add custom colors, it overrides tailwind
//therefore you can extend the custom colours as oppose to overriding

//here we can modify and add the fontFamily

//spacing refers to the margin, padding, etc. 

//plugins
const config: Config = {
  darkMode: 'class', 
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '100px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      // fontSize: {
      //   base: '18px',
      // },
      margin:{
        2: "16px",
        3: "18px",
        4: "20px"
      },
      colors: {
        custom_blue: {
          "000": "#5accdb",
          "001": "#1f3c40"
        }
      },
    },
  },
  plugins: [],
}
export default config
