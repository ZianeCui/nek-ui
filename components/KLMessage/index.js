import KLMessage from './src/message.vue';

KLMessage.install = function(Vue) {
  Vue.component(KLMessage.name, KLMessage);
};

export default KLMessage;