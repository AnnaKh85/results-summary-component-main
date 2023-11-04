/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
    colors: {
      'Light-red-80': 'hsla(0, 100%, 67%, 80%)',
      'Light-red-15': 'hsla(0, 100%, 67%, 15%)',
      'Orangey-yellow-80': 'hsla(39, 100%, 56%, 80%)',
      'Orangey-yellow-15': 'hsla(39, 100%, 56%, 15%)',
      'Green-teal-80': 'hsla(166, 100%, 37%, 80%)',
      'Green-teal-15': 'hsla(166, 100%, 37%, 15%)',
      'Cobalt-blue-80': 'hsla(234, 85%, 45%, 80%)',
      'Cobalt-blue-15': 'hsla(234, 85%, 45%, 15%)',
      'bg-Light-slate-blue': 'hsl(252, 100%, 67%)',
      'bg-Light-royal-blue': 'hsl(241, 81%, 54%)',
      'circle-Violet-blue': 'hsla(256, 72%, 46%, 1)',
      'circle-Persian-blue': 'hsla(241, 72%, 46%, 0)',
      'Pale-blue': 'hsl(221, 100%, 96%)',
      'Light-lavender': 'hsl(241, 100%, 89%)',
      'Dark-gray-blue': 'hsl(224, 30%, 27%)',
      'Dark-gray-blue-90': 'hsla(224, 30%, 27%, 90%)',
      'Dark-gray-blue-40': 'hsla(224, 30%, 27%, 40%)',
      'white-100' : 'hsla(0, 0%, 100%, 100%)',
      'white-90' : 'hsla(0, 0%, 100%, 90%)',
      'white-80' : 'hsla(0, 0%, 100%, 80%)',
      'white-70' : 'hsla(0, 0%, 100%, 70%)',
      'white-60' : 'hsla(0, 0%, 100%, 60%)',
      'white-50' : 'hsla(0, 0%, 100%, 50%)',
    },
    fontFamily: {
      'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif'],
      'Outfit': ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

