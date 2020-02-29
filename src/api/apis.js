import axios from 'axios';

let req=axios.create({
    baseURL:'http://192.168.0.104:3000',
    timeout:10000,
})

// 商家信息接口
export function getseller(){
    return req.get('/api/seller')
}

// 商品接口
export function getgoods(){
    return req.get('/api/goods')
}

// 评论接口
export function evaluation(){
    return req.get('/api/ratings')
}