import VueIconfont from './vue-iconfont-component.vue';
export default VueIconfont;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VueIconfont', VueIconfont);
}
