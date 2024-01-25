
import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": '1440px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        10: "10px"
      },
      google: {
        'text-gray': '#3c4043',
        'button-blue': '#1a73e8',
        'button-blue-hover': '#5195ee',
        'button-dark': '#202124',
        'button-dark-hover': '#555658',
        'button-border-light': '#dadce0',
        'logo-blue': '#4285f4',
        'logo-green': '#34a853',
        'logo-yellow': '#fbbc05',
        'logo-red': '#ea4335',
      },
    },
  },
  plugins: [
  ],
}
export default config
