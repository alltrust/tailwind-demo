import type { Config } from 'tailwindcss'

//when you add custom colors, it overrides tailwind
//therefore you can extend the custom colours as oppose to overriding
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom_blue:{
          "000": "#5accdb",
          "001": "#1f3c40"
        }
      },
    },
  },
  plugins: [],
}
export default config
