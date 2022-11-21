<template>
  <div class="projects">
    <h1 class="subheading text-grey">Projects</h1>
    <v-container grid-list-xs class="my-5">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel v-for="project in myProjects" :key="project.name">
          <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
          <v-expansion-panel-text class="text-grey">
            <div class="font-weight-bold">{{ project.person }}</div>
            <p>
              <!-- <p class="font-weight-thin"> -->
              {{ project.due }}
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import colRef from "@/fb";
import { getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      text: "Halooo Vuetify 3",
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Nehad Altimimi";
      });
    },
  },
  created() {
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.projects.push({ ...doc.data(), id: doc.id });
        });
        console.log(this.projects);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>