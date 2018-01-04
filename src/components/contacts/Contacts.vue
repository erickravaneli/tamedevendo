<template>
<v-container fill-heigth>
  <add-contact-dialog></add-contact-dialog>
  {{ contacts }}
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
