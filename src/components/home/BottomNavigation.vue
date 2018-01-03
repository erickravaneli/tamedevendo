<template>
<v-bottom-nav absolute :value="true" :active.sync="active" color="transparent">
  <v-btn flat color="teal" to="contacts" value="contacts">
    <span>Contatos</span>
    <v-icon>people</v-icon>
  </v-btn>
  <v-btn flat color="teal" to="details" value="details">
    <span>Detalhes</span>
    <v-icon>description</v-icon>
  </v-btn>
  <v-btn flat color="teal" to="user" value="user">
    <span>Usuário</span>
    <v-icon>person</v-icon>
  </v-btn>
</v-bottom-nav>
</template>

<script>
export default {
  data: () => ({
    active: 'contacts'
  })
}
</script>
