<template>
<div class="projects">
  <h1 class="subheading text-grey">Projects</h1>
  <v-container grid-list-xs class="my-5">

    <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="project in myProjects"
          :key="project.name">
          <v-expansion-panel-title>{{project.title}}</v-expansion-panel-title>
          <v-expansion-panel-text class="text-grey">
            <div class="font-weight-bold">{{project.person}}</div>
            <p>
            <!-- <p class="font-weight-thin"> -->
              {{project.due}}</p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

  </v-container>
</div>
</template>

<script>
export default {
  data(){
    return{
      text:'Halooo Vuetify 3',
      projects: [
        {
          title: "Design a new website",
          person: "Nehad Altimimi",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    }
  },
  computed:{
    myProjects(){
return this.projects.filter((project) =>{
return project.person === 'Nehad Altimimi'
})
      }
  }
}
</script>

<style>

</style>