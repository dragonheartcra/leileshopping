//封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, getCartListAPI, deleteCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    //获取 最新购物车列表action
    const updateNewList = async () => {
      const res = await getCartListAPI()
      cartList.value = res.result
    }
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    //1.定义state -cartList
    const cartList = ref([])
    //2.定义action addCart
    const addCart = async goods => {
      const { skuId, count } = goods
      if (isLogin.value) {
        //登录之后的加入购物车逻辑
        await insertCartAPI({ skuId, count })
        updateNewList()
      } else {
        //未登录的加入购物车逻辑
        const item = cartList.value.find(item => goods.skuId === item.skuId)
        if (item) {
          //找到了
          item.count++
        } else {
          //没找到
          cartList.value.push(goods)
        }
      }
      //添加购物车操作
      //已添加过 count+1
      //添加过 - 直接push
      //思路 :通过skuId能不能再cartList中找到,找到了就是 添加过
    }

    //删除购物车
    const delCart = async skuId => {
      if (isLogin.value) {
        //登录之后的删除逻辑

        //3.调用删除接口
        await deleteCartAPI([skuId])
        updateNewList()
      } else {
        cartList.value = cartList.value.filter(item => item.skuId !== skuId)
      }
      //在数组中删除这一项
    }

    //退出登录后清空购物车
    const clearCart = () => {
      cartList.value = []
    }

    //单选功能
    const singleCheck = (skuId, selected) => {
      //1.通过skuId找到这一项
      const item = cartList.value.find(item => item.skuId === skuId)
      //2.修改selected
      item.selected = selected
    }

    //全选功能
    //change传入selected,根据全选框的selected改变数组的selected
    const checkAll = selected => {
      //1.遍历
      cartList.value.forEach(item => {
        //2.修改selected
        item.selected = selected
      })
    }

    //计算属性
    //1.总的数量 所有项的count之和
    const allCount = computed(() => {
      return cartList.value.reduce((pre, item) => pre + item.count, 0)
    })
    //2.总价 所有项的count*price之和
    const allPrice = computed(() => {
      return cartList.value.reduce((pre, item) => pre + item.count * item.price, 0)
    })

    //3已选择数量
    const selectedCount = computed(() => {
      return cartList.value.filter(item => item.selected).reduce((pre, item) => pre + item.count, 0)
    })

    //已选择商品价钱合计
    const selectedPrice = computed(() => {
      return cartList.value
        .filter(item => item.selected)
        .reduce((pre, item) => pre + item.count * item.price, 0)
    })

    //是否全选
    const isAll = computed(() => {
      return cartList.value.every(item => item.selected)
    })
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      checkAll,
      selectedCount,
      selectedPrice,
      clearCart,
      updateNewList,
    }
  },
  {
    persist: true,
  }
)
