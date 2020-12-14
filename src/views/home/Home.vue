<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  components:{
    NavBar,
    Swiper,
    SwiperItem
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res =>{
      this.banners = res.data.banner;
      this.recommends = res.data.recommend
      // console.log(res);
    })
  }
}
</script>

<style>
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 500;
    color: #fff;
  }


</style>