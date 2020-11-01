
const webpack = require('webpack');

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,700|Roboto:300,300i,400,400i,500,500i,700,700i'
      },
    ]
  },

  loading: { color: '#fff' },

  css: [
    // 'bootstrap/dist/css/bootstrap.css',
    // '@/static/animate/animate.css',
    // '@/static/font-awesome/css/font-awesome.min.css',
    // '@/plugins/gallery-master/css/blueimp-gallery.css',
    // '@/plugins/nivo-slider/nivo-slider.css',
    // '@/plugins/nivo-slider/themes/bar/bar.css',
    // '@/assets/scss/style.scss',
  ],

  plugins: [
    //{ src: '~/plugins/gallery-master/js/jquery.blueimp-gallery.min.js', mode: 'client'},
    // { src: '~/plugins/nivo-slider/jquery.nivo.slider.js', mode: 'client'},
    // { src: '~/plugins/globals.js', mode: 'client'},
  ],

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
    plugins: [],
    extend (config, ctx) {
    }
  }
}
