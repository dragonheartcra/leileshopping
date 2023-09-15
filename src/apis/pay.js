/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-15 06:13:11
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 06:14:47
 * @Description:
 */
import httpInstance from '@/utils/http'

export const getOrderAPI = id => {
  return httpInstance({
    url: `/member/order/${id}`,
  })
}
