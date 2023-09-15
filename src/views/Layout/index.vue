<!--
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 15:09:39
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-15 03:29:00
 * @Description: 
-->
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  //index里面已经请求了数据,也就是pinia的list里面已经有数据,其他组件就可以使用这个数据了
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>
@/stores/categoryStore
