import Vue from 'vue'
import NEKUI from '../src/index'

Vue.use(NEKUI)

new Vue({
    el: '#app',
    components: {
      'kl-button': NEKUI.KLButton,
      'kl-icon': NEKUI.KLIcon,
    },
    methods: {
      test() {
        console.log(1)
      }
    }
})