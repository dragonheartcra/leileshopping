/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-15 04:21:04
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 04:23:30
 * @Description:
 */
import httpInstance from '@/utils/http'

// 获取详情接口
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: '/member/order/pre',
  })
}

//创建 订单
export const createOrderAPI = data => {
  return httpInstance({
    url: '/member/order',
    method: 'post',
    data,
  })
}
