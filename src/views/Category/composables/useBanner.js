//!轮播图相关的业务代码
//导入一下相关的
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
//导出
export function useBanner() {
  const bannerList = ref([]) //空数组

  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: '2' })
    console.log(res)
    bannerList.value = res.result
  }

  onMounted(() => {
    getBanner() //获取轮播图
  })

  return{
    bannerList,
  }
}
