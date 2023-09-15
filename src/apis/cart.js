/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-15 02:45:56
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 03:45:39
 * @Description:
 */
//封装购物车相关接口
import httpInstance from '@/utils/http'

//登录状态下加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count,
    },
  })
}

//获取购物车列表
export const getCartListAPI = () => {
  return httpInstance({
    url: '/member/cart',
    method: 'get',
  })
}

//删除购物车商品

/**
 * @description:
 * @param {*} ids:skuid的 数组
 * @return {*}
 */
export const deleteCartAPI = ids => {
  return httpInstance({
    url: '/member/cart',
    method: 'delete',
    data: {
      ids,
    },
  })
}

//合并购物车
export const mergeCartAPI = data => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'post',
    data,
  })
}
