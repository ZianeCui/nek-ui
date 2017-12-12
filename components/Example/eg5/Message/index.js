import Message from './src/Message.vue';

Message.install = function(Vue) {
  Vue.component(Message.name, Message);
};

export default Message;