<script setup>
import { getBannerAPI } from '@/apis/home'
import { ref } from 'vue'
import { onMounted } from 'vue'

const bannerList = ref([]) //空数组

const getBanner = async () => {
  const res = await getBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

onMounted(() => {
  getBanner() //获取轮播图
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item
        v-for="item in bannerList"
        :key="item.id">
        <img
          :src=item.imgUrl
          alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
