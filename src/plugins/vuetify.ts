import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import es from '@/lang/es'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        accent: '#2196f3'
      }
    }
  },
  lang: {
    locales: { es },
    current: 'es'
  }
})
