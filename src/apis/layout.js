import httpInstance from '@/utils/http'

//获取一级导航分类
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head',
  })
}
