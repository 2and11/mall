<template>
  <div id="main-tab-bar">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path='/home'>
        <template #item-icon><img src="~assets/img/tabbar/home.png" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/home_active.png" alt=""></template>
        <template #item-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <template #item-icon><img src="~assets/img/tabbar/category.png" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/category_active.png" alt=""></template>
        <template #item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
        <template #item-icon><img src="~assets/img/tabbar/shopcart.png" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/shopcart_active.png" alt=""></template>
        <template #item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template #item-icon><img src="~assets/img/tabbar/profile.png" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/profile_active.png" alt=""></template>
        <template #item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>