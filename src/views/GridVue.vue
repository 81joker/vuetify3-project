<template>
    <v-container class="bg-surface-variant ">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-btn class="hidden-lg-and-up">Hideen Small only </v-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>