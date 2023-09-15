/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 20:26:34
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-12 03:13:14
 * @Description:
 */
import httpInstance from '@/utils/http'

//获取banner

export function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite,
    },
  })
}

/**
 * @description:获取新鲜好物
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new',
  })
}

//获取人气推荐
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot',
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods',
  })
}
