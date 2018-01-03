<template>
<div>
  <router-view></router-view>
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
