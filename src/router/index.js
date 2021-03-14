//引入
import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('../views/home')
const Profile = () =>
    import ('../views/profile')
const Cart = () =>
    import ('../views/cart')
const Me = () =>
    import ('../views/me')
const Detail = () =>
    import ('../views/detail/Detail')

//安装
Vue.use(Router)

const routes = [{
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/Profile',
        component: Profile,
        meta: {
            title: '详情'
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            title: '购物车'
        }
    },
    {
        path: '/me',
        component: Me,
        meta: {
            title: '个人'
        }
    },
    {
        path: '/detail/:iid',
        component: Detail,
        meta: {
            title: '浏览'
        }
    }
]

//new实例
const router = new Router({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    // document.title = to.meta.matched[0].title; 错误写法
    document.title = to.matched[0].meta.title;
    next()
})

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};

export default router