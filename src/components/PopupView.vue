<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
      persistent :overlay="false"
      max-width="600px"
      transition="dialog-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
          Add a New Project
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-center">
            Add a New Project
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>