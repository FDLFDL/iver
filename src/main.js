import Vue from 'vue'
import App from './App'


// 路由
import router from './router/'

import resource from 'vue-resource'

//图片懒加载
import VueLazyload from 'vue-lazyload'

import iver from './plugin/all/'
import loading from './packages/loading'

import './scss/index.scss'

// 兼容ios active 效果
document.body.addEventListener('touchstart', function () {});  


Vue.use(resource)
Vue.use(iver)

      
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})

router.beforeEach((to, from, next) => {
  loading.show()
  document.title = to.meta.title;
  next();
})

router.afterEach((to)=>{
	loading.hide()
})


export { app, router }
