/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 13:55:12
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-12 00:06:14
 * @Description:
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'

//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
//引入全局组件插件
import { componentPlugin } from '@/components'
const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

//定义全局指令
