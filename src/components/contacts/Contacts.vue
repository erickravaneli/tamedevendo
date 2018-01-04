<template>
<v-container fill-heigth>
  <add-contact-dialog></add-contact-dialog>

</v-container>
</template>

<script>
import AddContactDialog from '@/components/contacts/AddContactDialog.vue'

export default {
  components: {
    'add-contact-dialog': AddContactDialog
  }
}
</script>
