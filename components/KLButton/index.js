import KLButton from './src/button.vue';

KLButton.install = function(Vue) {
  Vue.component(KLButton.name, KLButton);
};

export default KLButton;