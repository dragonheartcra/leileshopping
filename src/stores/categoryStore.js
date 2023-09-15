/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 18:06:05
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 03:26:08
 * @Description:
 */
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  //导航列表的数据管理
  //state导航列表数据
  const categoryList = ref([])
  //action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    //console.log(res)
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory,
  }
})
