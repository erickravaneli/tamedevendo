<template>
<div>
  <p>{{ selectedTab }}</p>
  <tmd-bottom-navigation :selectedTab.sync="selectedTab"></tmd-bottom-navigation>
</div>
</template>

<script>
import BottomNavigation from '@/components/home/BottomNavigation.vue'
export default {
  name: 'home',
  components: {
    'tmd-bottom-navigation': BottomNavigation
  },
  data() {
    return {
      selectedTab: 'contacts'
    }
  }
}
</script>
