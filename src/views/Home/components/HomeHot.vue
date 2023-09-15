<!--
 * @Author: 唔系打球就系饮茶
 * @Date: 2023-09-11 18:57:30
 * @LastEditors: 唔系打球就系饮茶
 * @LastEditTime: 2023-09-13 18:15:51
 * @Description: 
-->
<script setup>
import { onMounted, ref } from 'vue'
import HomePanel from './HomePanel.vue'
import { findHotAPI } from '@/apis/home'

//获取数据
const newList = ref([])

const getHotList = async () => {
  const res = await findHotAPI()
  //console.log(res.result)
  newList.value = res.result
}

onMounted(() => {
  getHotList()
})
</script>

<template>
  <home-panel
    title="人气推荐"
    sub-title="最多人喜欢的人气商品">
    <ul class="goods-list">
      <li
        v-for="item in newList"
        :key="item.id">
        <RouterLink to="/">
          <img
            v-img-lazy="item.picture"
            alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </home-panel>
  <!-- 下面是插槽主体内容模版
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  -->
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
