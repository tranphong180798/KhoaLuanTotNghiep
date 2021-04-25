import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - frontEndFoody',
    title: 'Home Version One ',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet' ,href:'/MDB/css/mdb.css'},
      { rel:'stylesheet' ,href:'/MDB/css/style.css'},
      { rel:'shortcut icon',type:'image/x-icon' ,href:'/images/favicon.png'},
      { rel:'stylesheet' ,href:'/css/material-design-iconic-font.min.css'},
      { rel:'stylesheet' ,href:'/css/font-awesome.min.css'},
      { rel:'stylesheet' ,href:'/css/fontawesome-stars.css'},
      { rel:'stylesheet' ,href:'/css/meanmenu.css'},
      { rel:'stylesheet' ,href:'/css/owl.carousel.min.css'},
      { rel:'stylesheet' ,href:'/css/slick.css'},
      { rel:'stylesheet' ,href:'/css/animate.css'},
      { rel:'stylesheet' ,href:'/css/jquery-ui.min.css'},
      { rel:'stylesheet' ,href:'/css/venobox.css'},
      { rel:'stylesheet' ,href:'/css/nice-select.css'},
      { rel:'stylesheet' ,href:'/css/magnific-popup.css'},
      { rel:'stylesheet' ,href:'/css/bootstrap.min.css'},
      { rel:'stylesheet' ,href:'/css/helper.css'},
      { rel:'stylesheet' ,href:'/style.css'},
      { rel:'stylesheet' ,href:'/my-style.css'},
      { rel:'stylesheet' ,href:'/css/responsive.css'},


    ]
  },
  script:[
    {src:'/js/vendor/modernizr-2.8.3.min.js'},
    {src:'/js/vendor/modernizr-2.8.3.min.js'},
    {src:'/js/jquery.min.js'},
    {src:'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'},
    {src:'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'},
    {src:'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'},
    {src:'/js/myjs/helper.js'},


  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [



     // '~/assets/css/animate.css',
     // '~/assets/css/jquery-ui.min.css',
     // '~/assets/css/venobox.css',
     // '~/assets/css/nice-select.css',
     // '~/assets/css/magnific-popup.css',
     // '~/assets/css/bootstrap.min.css',
     // '~/assets/css/helper.css',
     // '~/assets/MDB/css/style.css',
     // '~/assets/images/favicon.png',
     // '~/assets/css/material-design-iconic-font.min.css',
     // '~/assets/css/font-awesome.min.css',
     // '~/assets/css/fontawesome-stars.css',
     // '~/assets/css/meanmenu.css',
     // '~/assets/css/owl.carousel.min.css',
     // '~/assets/css/slick.css',
     // '~/assets/css/responsive.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/icon.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/auth-next',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
