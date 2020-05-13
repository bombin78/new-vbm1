
module.exports = {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/plugins/css/bootstrap.min.css',
    '~/plugins/vendors/animate/animate.css',
    '~/plugins/vendors/font-awesome/css/font-awesome.min.css',
    //'~/plugins/vendors/camera-slider/camera.css',
    //'~/plugins/vendors/owl_carousel/owl.carousel.css',
    '~/plugins/css/style.css',
  ],

  plugins: [
    { src: '~/plugins/js/jquery-1.12.0.min.js', mode: 'client'},
    //{ src: '~/plugins/js/bootstrap.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/animate/wow.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/camera-slider/jquery.easing.1.3.js', mode: 'client'},
    //{ src: '~/plugins/vendors/camera-slider/camera.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/isotope/imagesloaded.pkgd.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/isotope/isotope.pkgd.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/Counter-Up/jquery.counterup.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/Counter-Up/waypoints.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/owl_carousel/owl.carousel.min.js', mode: 'client'},
    //{ src: '~/plugins/vendors/stellar/jquery.stellar.js', mode: 'client'},
    //{ src: '~/plugins/js/theme.js', mode: 'client'},
    //'@/plugins/globals'
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
}
