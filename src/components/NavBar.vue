<template>
    <!-- <v-app> -->
 <nav>

<v-snackbar
  v-model="snackbar" :timeout="4000"  color="primary" >
  Awesome! You addded a new project
  <v-btn flat color="white"  @click="snackbar = false" >Close</v-btn>
</v-snackbar>




  <v-toolbar  flat app > 
    <v-app-bar-nav-icon class="text-grey"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

<v-toolbar-title color="text-grey text-uppercase">
  <span class="font-weight-light text-uppercase">Todo</span>
  <span>Nehad</span>
</v-toolbar-title> 
<v-spacer></v-spacer> 

<!-- ST Mennue -->
<v-menu open-on-click open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            color="grey"
            v-bind="props" >
            Menue
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
          v-for="link in links" :key="link.text" router :to="link.route" >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
<!-- En Mennue -->

<v-btn color="grey">
  <span>Sign Out</span>
  <v-icon>mdi-export</v-icon>
  <!-- <v-icon>mdi-exit-to-app</v-icon> -->
  </v-btn>  
</v-toolbar>

<v-navigation-drawer   
v-model="drawer"
      class="bg-primary"
      temporary>
      
<v-list>

    <!-- Avtar Nav -->
    <v-container >
   <v-col align="center" class="mt-5">
      <v-avatar size="100">
         <img src="/avatar-1.png" />
      </v-avatar>
      <v-subheader class="text-white d-flex justify-center">The Vuetify 3</v-subheader>
   </v-col>
   <v-col class="mt-3 mb-3">
   <PopupView @projectAdedd="snackbar = true"/>
   </v-col>
</v-container>
        <v-divider></v-divider>
        
  <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
    <v-list-tile-action> 
      <v-icon class="text-white">{{ link.icon }}</v-icon>
    </v-list-tile-action>

    <v-list-tile-content> 
      <v-list-tile-title class="text-white">{{ link.text}}</v-list-tile-title>
    </v-list-tile-content>

  </v-list-item>
</v-list>

</v-navigation-drawer>
 </nav>
    <!-- </v-app> -->
</template>

<script>
import PopupView from './PopupView'
export default {
  components:{PopupView},
data() {
  return {
    drawer: false,
    links:[
      {icon: 'mdi-view-dashboard', text:'Dashboard', route:'/'},
      {icon: 'mdi-folder', text:'My Projects', route:'/projects'},
      {icon: 'mdi-account', text:'Team', route:'/team'},
    ],
    snackbar:true
  }
},
}
</script>

<style>
/* .v-overlay__content{
  top:0 !important;
} */
</style>