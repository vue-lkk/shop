import Toast from '../Toast/toast'

const obj = {};
//安装好toast插件就会执行install函数同时默认会将Vue传递过来
obj.install = function(Vue) {
    console.log(Vue);
    // 因为toast组件存在template模板，没办识别
    // 所以1.创建组件构造器
    const toastContrustor = Vue.extend(Toast);
    // 2.根据new的方式，可以创建出一个组件对象
    const toast = new toastContrustor();
    // 3.手动挂载到一个div上
    toast.$mount(document.createElement('div'));
    // 4.toast.$el对应就是div,将div添加到body中
    document.body.appendChild(toast.$el);
    // 5.放在原型上
    Vue.prototype.$toast = toast;
}

export default obj