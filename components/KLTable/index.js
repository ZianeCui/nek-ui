import KLTable from './src/table.vue';

KLTable.install = function(Vue) {
  Vue.component(KLTable.name, KLTable);
};

export default KLTable;