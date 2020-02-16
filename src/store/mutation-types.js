/*
包含n个mutation的type名称常量
*/
export default RECEIVE_ADDRESS = 'receive-address'//接收地址
export default RECEIVE_CATEGORYS = 'receive-categorys'//接收食品分类数组
export default RECEIVE_SHOPS = 'receive-shops'//接收商家数组

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS] (state,{address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state,{categorys}) {
        state.categorys = categorys
    },
    
    [RECEIVE_SHOPS] (state,{shops}) {
        state.shops = shops
    },
}


// const Address = RECEIVE_ADDRESS({
//     [RECEIVE_ADDRESS] (state,{address}) {
//         state.address = address
//     },
// })

// const Categorys = RECEIVE_CATEGORYS({
//     [RECEIVE_CATEGORYS] (state,{categorys}) {
//         state.categorys = categorys
//     },
// })

// const Shops = RECEIVE_SHOPS({
//     [RECEIVE_SHOPS] (state,{shops}) {
//         state.shops = shops
//     },
// })
// export default {
//     render(){
//         return <Address/>;
//     }
// }
