<template>
<v-bottom-nav absolute :value="true" :active.sync="active" color="transparent">
  <v-btn flat color="teal" value="contacts">
    <span>Contatos</span>
    <v-icon>people</v-icon>
  </v-btn>
  <v-btn flat color="teal" value="dashboard">
    <span>Detalhes</span>
    <v-icon>description</v-icon>
  </v-btn>
  <v-btn flat color="teal" value="user">
    <span>Usuário</span>
    <v-icon>person</v-icon>
  </v-btn>
</v-bottom-nav>
</template>

<script>
export default {
  props: ['selectedTab'],
  computed: {
    active: {
      get() {
        return this.selectedTab
      },
      set(value) {
        this.$emit('update:selectedTab', value)
      }
    }
  }
}
</script>
