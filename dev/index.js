import Vue from 'vue'
import NEKUI from '../src/index'

Vue.use(NEKUI)

new Vue({
    el: '#app',
    components: {
      'kl-button': NEKUI.KLButton,
      'kl-icon': NEKUI.KLIcon,
      'kl-input': NEKUI.KLInput,
      'kl-dropdown': NEKUI.KLDropdown,
      'kl-dropdown-menu': NEKUI.KLDropdownMenu,
      'kl-dropdown-item': NEKUI.KLDropdownItem,
      'kl-message': NEKUI.KLMessage,
      'kl-table': NEKUI.KLTable,
    },
    methods: {
      test() {
        console.log(1)
      }
    }
})