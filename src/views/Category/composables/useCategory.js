/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-12 04:10:20
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-12 04:29:10
 * @Description: 封装分类数据业务相关代码
 */
//导入相关
import { ref, onMounted } from 'vue'
import { getCategory } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  //当前路由的对象,可得到当前路由的信息
  const route = useRoute()
  const getCategoryData = async (id = route.params.id) => {
    const res = await getCategory(id)
    categoryData.value = res.result
  }

  onMounted(() => {
    getCategoryData()
  })

  //目标,路由参数变化的时候,可以把分类数据接口重新发送
  onBeforeRouteUpdate(to => {
    console.log('路由变化了')
    getCategoryData(to.params.id)
  })

  return {
    categoryData
  }
}
