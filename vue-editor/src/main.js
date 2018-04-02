// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.config.productionTip = false
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// import * as Quill from 'quill/dist/quill.js';
// const Font = Quill.import('formats/font');
// // We do not add Aref Ruqaa since it is the default
// Font.whitelist =['Arial', 'serif', 'sans-serif', '宋体', '黑体', 'Microsoft YaHei', 'monospace', 'cursive'];
// Quill.register(Font, true);
// const globalOption = {
//   modules:{
//     toolbar:[
//       [{
//         'font': ['Arial', '宋体', '黑体', '微软雅黑']
//       }]
//     ]
//   }
// }
// Vue.use(VueQuillEditor, globalOption)
Vue.use(VueQuillEditor)
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
