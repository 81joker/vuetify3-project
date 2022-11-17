<template>
    <!-- <v-app> -->
 <nav>
  <v-toolbar  flat app > 
    <!-- <v-toolbar-side-icon ></v-toolbar-side-icon> -->
    <v-app-bar-nav-icon class="text-grey"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

<v-toolbar-title color="text-grey text-uppercase">
  <span class="font-weight-light text-uppercase">Todo</span>
  <span>Nehad</span>
</v-toolbar-title> 
<v-spacer></v-spacer> 
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

  <v-layout column>
      <v-avatar>
        <img src="/avatar-1.png" alt="Avatar" />
      </v-avatar>
    </v-layout>

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
export default {
data() {
  return {
    drawer: false,
    links:[
      {icon: 'mdi-view-dashboard', text:'Dashboard', route:'/'},
      {icon: 'mdi-folder', text:'My Projects', route:'/projects'},
      {icon: 'mdi-account', text:'Team', route:'/team'},
    ]
  }
},
}
</script>

<style>

</style>