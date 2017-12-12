import MessageList from './src/MessageList.vue';

MessageList.install = function(Vue) {
  Vue.component(MessageList.name, MessageList);
};

export default MessageList;