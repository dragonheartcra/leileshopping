/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-12 09:29:49
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 10:03:46
 * @Description: 商品详情获取接口
 */
//封装所有和用户相关的接口函数
import request from '@/utils/http'

//登录
export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password,
    },
  })
}

//猜你喜欢模块

export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
}
