/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Primary styling palette
      'neutral100': '#2C3436',
      'neutral200': '#B3AEB9',
      'neutral300': '#F5F3F6',
      'primary100': '#1E142A',
      'primary200': '#351A53',
      'primary300': '#998BA8',
      'primary400': '#E3E0E7',
      'accent100': '#8F4465',
      'accent200': '#E96D77',
      'accent300': '#E6A7AF',
      // Semantic state colors
      'good': '#91BE9E',
      'warning': '#E89D63',
      'error': '#D25041',
      'info': '#748B97',
    },
    fontFamily: {
      sans: ["Josefin Sans", "Arial", "sans"],
    },
    extend: {
      fontFamily: {
        heading: ["Yeseva One", "Helvetica", "serif"],
      },
      backgroundImage: {
        "rainy": "url('https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80')",
        "foggy": "url('https://media.discordapp.net/attachments/1113169937222074480/1121822922726723624/foggy.jpg?width=799&height=584')",
        "sunny": "url('https://media.discordapp.net/attachments/1113169937222074480/1121822923364249600/sunny.jpg?width=810&height=540')",
        "stormy": "url('https://media.discordapp.net/attachments/1113169937222074480/1121822924077285417/thunderstorm.jpg?width=810&height=540')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

