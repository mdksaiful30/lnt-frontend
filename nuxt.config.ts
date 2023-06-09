// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }, 
    
      /* modules: ['@nuxtjs/google-fonts'],

    googleFonts: {
      families: {
        Roboto: true,
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      },
      display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
      subsets: 'greek'
    }
    */
  
      
})




