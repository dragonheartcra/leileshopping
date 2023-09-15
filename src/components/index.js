//把components中的所有组件都进行全局注册
//通过插件的方式
import ImageView from '@/components/ImageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('XtxImageView', ImageView)
    app.component('XtxXtxSku', XtxSku)
  },
}
