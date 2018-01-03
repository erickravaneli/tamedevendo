<template>
<div>
  <div class="headline text-xs-center pa-5">Active: {{ selectedTab }}</div>
  <v-bottom-nav absolute :value="true" :active.sync="selectedTab" color="transparent">
    <v-btn flat color="teal" value="contacts">
      <span>Contatos</span>
      <v-icon>people</v-icon>
    </v-btn>
    <v-btn disabled flat color="teal" value="dashboard">
      <span>Detalhes</span>
      <v-icon>description</v-icon>
    </v-btn>
    <v-btn disabled flat color="teal" value="user">
      <span>Usuário</span>
      <v-icon>person</v-icon>
    </v-btn>
  </v-bottom-nav>

</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      selectedTab: 'contacts'
    }
  }
}
</script>
