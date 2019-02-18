//second step 注册组件
import lazyLoad from '../plugin/lazy-load'

let lazy = {};

lazy.install = function(Vue){
	Vue.component('lazy-load',lazyLoad);
}

export default lazy;