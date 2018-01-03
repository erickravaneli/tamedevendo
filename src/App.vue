<template>
<v-app id="app">
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container class="pa-0">
      <router-view></router-view>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>
