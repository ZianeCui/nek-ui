import List from './src/List.vue';

List.install = function(Vue) {
  Vue.component(List.name, List);
};

export default List;