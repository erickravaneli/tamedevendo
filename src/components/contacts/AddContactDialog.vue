<template>
<v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
  <transition name="fade" appear slot="activator">
    <v-btn id="fab" fixed dark fab bottom right color="teal">
      <v-icon>add</v-icon>
    </v-btn>
  </transition>
  <v-card>
    <v-toolbar dark color="teal">
      <v-btn icon @click="dialog = false" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Adicionar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click="dialog = false">Salvar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container fill-heigth>
      <v-text-field color="teal" label="Nome"></v-text-field>
      <v-text-field color="teal" mask="(##) ##### - ####" label="Celular" type="tel"></v-text-field>
      <v-text-field color="teal" label="Observações"></v-text-field>
    </v-container>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
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
