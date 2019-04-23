module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxty',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700' },
    ],
    script : [
      { href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js' },
      { href: '/velocity.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/assets/css/main.scss',
  ],
  /*
  ** Build configuration
  */
  // mode : 'spa',
  build: {
    extractCSS: true,
    transpile: ['velocity-animate'],
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
      'postcss-responsive-type': {},
      'postcss-nested': {}
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/vuetify',
    // '~/plugins/velocity',
    '~/plugins/scroll',
  ],
  modules: [
    "@nuxtjs/axios",
  ],

  // loading: '~/components/misc/loading.vue'
}
