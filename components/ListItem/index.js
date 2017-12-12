import ListItem from './src/list-item.vue';

ListItem.install = function(Vue) {
  Vue.component(ListItem.name, ListItem);
};

export default ListItem;