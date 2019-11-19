import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import demo from './view/demo.vue';
import border from './view/border.vue';
import resize from './view/resize.vue';
import fixed from './view/fixed.vue';
import flex from  './view/flex.vue';
import customField from './view/custom-field/index.vue';
import onlySameLevelDrag from './view/only-same-level-drag.vue';
import checkbox from './view/checkbox.vue';
import formatter from './view/formatter.vue';
import align from './view/align.vue';
import hightlight from './view/hightlight.vue';
import dragEvent from './view/drag-event.vue';
import checkboxEvent from './view/checkbox-event.vue';
import disableDrag from './view/disable-drag.vue';

const routes = [
  { path: '/', component: demo },
  { path: '/demo', component: demo },
  { path: '/border', component: border },
  { path: '/fixed', component: fixed },
  { path: '/resize', component: resize },
  { path: '/flex', component: flex },
  { path: '/custom-field', component: customField },
  { path: '/only-same-level-drag', component: onlySameLevelDrag },
  { path: '/checkbox', component: checkbox },
  { path: '/formatter', component: formatter },
  { path: '/align', component: align },
  { path: '/hightlight', component: hightlight },
  { path: '/drag-event', component: dragEvent },
  { path: '/checkbox-event', component: checkboxEvent },
  { path: '/disable-drag', component: disableDrag },
]
const router = new VueRouter({
  routes
})
Vue.use(VueRouter);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
