/*
包含n个接口请求函数的模块
函数的返回值：Promise对象
*/
import ajax from './ajax'
const BASE_URL = 'http://localhost:4000'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('${BASE_URL}/position/${geohash}')
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE_URL+'/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqShopskey = (geohash ,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})
// 5、获取一次性验证码
export const reqOnetimecode = () => ajax(BASE_URL+'/captcha')
// 6、用户名密码登录
export const reqUserPass = (name,pwd,captcha) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha})
// 7、发送短信验证码
export const reqNotecode = (phone) => ajax('${BASE_URL}/sendcode/${phone}')
// 8、手机号验证码登录
export const reqPhonecode = (phone ,code) => ajax('/login_sms',{phone,code})
// 9、根据会话获取用户信息
export const reqUserinfo = () => ajax('/userinfo')
// 10、用户登出
export const reqUser = () => ajax('/logout')
// export function(){

// }