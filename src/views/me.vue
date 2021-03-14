<template>
    <div>个人</div>
</template>

<script>
export default {
    name:'me'
    
};

new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve()
    }, 1000);
}).then(() => {
    console.log('第一次请求结果')

    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('第一次请求结果')
        }, 1000);
    }).then((data) => {
    console.log(data + ',第二次请求结果')

    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('第二次请求结果')
        }, 1000);
    }).then((data) => {
        console.log(data + ',第三次请求结果')
    })
  })
})


new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('111')
    }, 4000);
}).then(res => {
     console.log(res)
    return res + '222';   
}).then(res => {
     console.log(res)
    return res + '333'
}).then(res => {
    console.log(res)
})

//当某个地方要发送两个请求
Promise.all([
   new Promise((resolve,reject) => {
       setTimeout(() => {
           resolve({name:'kk'})
       }, 1000);
   }),
   new Promise((resolve,reject) => {
       setTimeout(() => {
           resolve({name:'gg'})
       }, 1000);
   })
]).then((resolve) =>{
       console.log(resolve)
})
</script>