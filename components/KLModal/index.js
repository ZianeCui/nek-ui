import KLModal from './src/modal.vue';

KLModal.install = function(Vue) {
  Vue.component(KLModal.name, KLModal);
};

export default KLModal;