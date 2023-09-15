/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-12 00:02:15
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-13 18:15:33
 * @Description:
 */
//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el:指令绑定的那个元素 img
        //binding:binding.value  指令的等于号后面绑定的表达式的值  图片url
        //console.log(el, binding.value)
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
            //图片进入了视图区域
            el.src = binding.value
            stop()
          }
        })
      },
    })
  },
}
