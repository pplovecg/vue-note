//second step 注册组件
import pluginTest from '../plugin/plugin-test'

let test = {};

test.install = function(Vue){
	Vue.component('myplug',pluginTest);
}

export default test;