module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  Media: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/profile.png')",
        'jack-bg': "url('/images/jack.jpg')",
        'adidas-bg': "url('/images/adidas.jpg')",
        'nike-bg': "url('/images/nike.jpg')",
        'ffp-bg': "url('/images/ffp.jpg')",
        'stay-bg': "url('/images/stay.jpg')",
       }),
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
