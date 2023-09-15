<!--
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 15:52:02
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-11 18:59:54
 * @Description: 
-->
<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>