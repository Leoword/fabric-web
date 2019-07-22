import '@or-change/fabric-ui-font';
import FabricUI from '@or-change/fabric-ui';
import UIPlugin from "../index";
import Vue from 'vue/dist/vue.esm.js';

import App from './App.vue';

Vue.use(FabricUI);
Vue.use(UIPlugin);

const app = new Vue(App);

window.addEventListener('load', () => app.$mount('#app'));