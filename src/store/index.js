import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)



//2.创建插件
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        //数量
        addCount(state, payload) {
            payload.count++
        },
        //新商品
        addCart(state, payload) {
            payload.checked = true
            state.cartList.push(payload)
        }
    },
    getters: {
        cartlength(state) {
            return state.cartList.length
        },
        cartList(state) {
            return state.cartList
        }
    },
    actions: {
        addCart(context, payload) {
            return new Promise((resolve, reject) => {
                let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

                if (oldProduct) {
                    // oldProduct.count++
                    context.commit('addCount', oldProduct)
                    resolve('当前商品+1')
                } else {
                    payload.count = 1;
                    // context.state.cartList.push(payload)
                    context.commit('addCart', payload)
                    reject('添加了商品')
                }
                console.log(context.state.cartList)

            })
        }
    },
    modules: {

    }
})

//3.导出
export default store