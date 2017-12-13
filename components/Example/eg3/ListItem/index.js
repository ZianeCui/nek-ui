import ListItem from './src/ListItem.vue';

ListItem.install = function(Vue) {
  Vue.component(ListItem.name, ListItem);
};

export default ListItem;