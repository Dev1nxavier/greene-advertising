/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#629080',
        'custom-green-2': '#62a080',
        'custom-green-dark': '#253d31',
      }
    },
  },
  plugins: [],
}

