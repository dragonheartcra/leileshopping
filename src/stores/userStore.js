/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-14 06:06:34
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 03:49:41
 * @Description:
 */
//管理用户数据相关

import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { ref } from 'vue'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    //1.定义管理用户数据的state
    const userInfo = ref({})
    //定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result

      //?合并购物车的操作
      await mergeCartAPI(
        cartStore.cartList.map(item => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          }
        })
      )
      cartStore.updateNewList()
    }

    //退出时清除用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
      //执行清除购物车的action
      cartStore.clearCart()
    }
    //以对象的形式把state和action return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true, //持久化
  }
)
