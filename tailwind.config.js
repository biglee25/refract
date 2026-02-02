module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  Media: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/jack-profile.png')",
        'jack-bg': "url('/images/jack-about.png')",
        'adidas-bg': "url('/images/adidas.png')",
        'nike-bg': "url('/images/nike.png')",
        'refract-bg': "url('/images/refract.png')",
        'ffp-bg': "url('/images/ffp.png')",
        'stay-bg': "url('/images/stay.png')",
        'sissi-bg': "url('/images/sissi.png')",
        'edgar-bg': "url('/images/edgar.png')",
        'humanitas-bg': "url('/images/humanitas.png')",
        'staycod-bg': "url('/images/staycod.png')",
        'valorant-bg': "url('/images/valorant.png')",
        'client-bg': "url('/images/client.png')",
        'luckystrike-bg': "url('/images/luckystrike.png')",
        'nightmovers-bg': "url('/images/nightmovers.png')",}),
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
