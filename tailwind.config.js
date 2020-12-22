module.exports = {
  purge: [
    './public/index.html',
    './src/components/About.js',
    './src/components/Home.js',
    './src/components/NavBar.js',
    './src/components/Post.js',
    './src/components/SinglePost.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
