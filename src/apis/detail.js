/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-12 09:29:49
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-14 00:04:15
 * @Description: 商品详情获取接口
 */
import request from '@/utils/http'

export const getDetail = id => {
  return request({
    url: '/goods',
    params: {
      id,
    },
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit,
    },
  })
}
