import KLButton from './src/button';

KLButton.install = function(Vue) {
  Vue.component(KLButton.name, KLButton);
};

export default KLButton;