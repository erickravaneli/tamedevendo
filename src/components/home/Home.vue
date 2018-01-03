<template>
<div>
  <!-- <transition name="slide-x-transition"> -->
  <router-view></router-view>
  <!-- </transition> -->
  <tmd-bottom-navigation></tmd-bottom-navigation>
</div>
</template>

<script>
import BottomNavigation from '@/components/home/BottomNavigation.vue'
export default {
  name: 'home',
  components: {
    'tmd-bottom-navigation': BottomNavigation
  }
}
</script>
