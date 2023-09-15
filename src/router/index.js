/*
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 13:55:12
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 11:15:33
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
//!createRouter:创建router实例对象
//!createWebHistory:创建history模式的 路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置import { Layout } from '@/views/Login/index.vue';

  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'category/:id',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          component: Detail,
        },
        {
          path: 'cartlist',
          component: CartList,
        },
        {
          path: 'checkout',
          component: Checkout,
        },
        {
          path: 'pay',
          component: Pay,
        },
        {
          path: 'paycallback',
          component: PayBack,
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo,
            },
            {
              path: 'order',
              component: UserOrder,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
