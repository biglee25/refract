module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: theme => ({
      //   'hero-bg': "url('/images/video.mp4')",
      //  }),
       colors: {
        white: '#fff',
        black: '#000',
        orange: '#f39200',
      },  
    },
  },
  
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
