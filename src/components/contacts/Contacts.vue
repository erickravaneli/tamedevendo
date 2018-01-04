<template>
<v-container class="pa-0" fill-heigth>
  <v-list class="list">
    <v-list-tile v-for="(contact, index) in contacts" :key="index" @click="">
      <v-list-tile-content>{{ contact.name }}</v-list-tile-content>
    </v-list-tile>
  </v-list>
  <add-contact-dialog></add-contact-dialog>
</v-container>
</template>

<script>
import AddContactDialog from '@/components/contacts/AddContactDialog.vue'
import {
  mapState
} from 'vuex'
export default {
  components: {
    'add-contact-dialog': AddContactDialog
  },
  computed: {
    ...mapState(['contacts'])
  }
}
</script>
<style>
.application .theme--light.list,
.theme--light .list {
  background: transparent;
}
</style>
