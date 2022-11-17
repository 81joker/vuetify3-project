<template>
  <NavBar />
  <div class="home">
    <h1>Homepage</h1>
    <p class="bg-red text-white my-2">
      Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Architecto cumque iure dolo
      r libero ex, quis temporibus reprehenderit 
      autem rerum eligendi?</p>

      <p class="bg-pink my-2 lighten-6">
      Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Architecto cumque iure dolo
      r libero ex, quis temporibus reprehenderit 
      autem rerum eligendi?</p>
      <h1 class="text-h1">Masseve Desplay</h1>
      <h1 class="text-h4">Smaller Desplay</h1>
      <p class="headline">This is a headline</p>
      <p class="subheading">This is a subheading</p>
      <p class="caption mb-10">This is a caption</p>

      <v-btn class="bg-pink text-white">Click Me</v-btn>
      <v-btn depressed color="pink ml-2">Click Me</v-btn>
      <v-btn flat color="pink ml-2">Click Me</v-btn>
      <v-btn depressed class="bg-pink text-white ml-2">
        <v-icon  >  mdi-facebook</v-icon>
        </v-btn>
        <v-icon
      color="blue-darken-2"
    >
      mdi-message-text
    </v-icon>
    
    <v-btn size="small" class="bg-pink text-white">
    <v-icon left > mdi-email</v-icon>
    <span>Email </span>
    </v-btn>
  
    <v-btn fab   size="large"
 class="bg-pink text-white">
    <v-icon left > mdi-email</v-icon>
    <span>Email </span>
    </v-btn>


    
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
  },
});
</script>
