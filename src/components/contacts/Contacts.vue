<template>
<v-container fill-heigth>
  <transition name="fade" appear>
    <v-btn id="fab" fixed dark fab bottom right color="teal">
      <v-icon>add</v-icon>
    </v-btn>
  </transition>
</v-container>
</template>

<script>
export default {}
</script>
<style>
#fab {
  bottom: 75px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 400 linear;
}

.fade-leave-active {
  transition: opacity 400 linear;
  opacity: 0
}
</style>
