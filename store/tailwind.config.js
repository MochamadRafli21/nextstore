/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
  themes: [
        {
          mytheme: {
          
 "primary": "#fde047",
          
 "secondary": "#fde68a",
          
 "accent": "#f59e0b",
          
 "neutral": "#191D24",
          
 "base-100": "#f3f4f6",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
}
