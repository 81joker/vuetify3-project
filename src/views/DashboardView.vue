<template>
  <div class="dashbord">
    <!-- <div class="home hidden-md-and-up"> -->
    <h1 class="subheading text-grey">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="my-3 mx-0">
        <v-tooltip text="Sort projects by Project name" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              flat
              small
              class="bg-grey-lighten-3 text-grey"
              @click="sortBy('title')"
              v-bind="props"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project name</span>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Sort projects by person" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              flat
              small
              class="bg-grey-lighten-3 text-grey"
              @click="sortBy('person')"
              v-bind="props"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
        </v-tooltip>
      </v-row>

      <v-card
        flat
        class="rounded-0"
        v-for="project in projects"
        :key="project.title"
        :class="`pa-3 project ${project.status}`"
      >
        <v-row>
          <v-col cols="12" md="6" xs="12">
            <div class="caption text-grey">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="12" md="2" sm="4" xs="6">
            <div class="caption text-grey">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" md="2" sm="4" xs="6">
            <div class="caption text-grey">Due By</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" md="2" sm="4" xs="2">
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text my-2 caption`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
          <v-divider></v-divider>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// Components
// import NavBar from '../components/NavBar.vue';
import colRef from "@/fb";
import { getDocs } from "firebase/firestore";
export default {
  name: "DashboardView",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.projects.push({ ...doc.data(), id: doc.id });
      });
      console.log(this.projects);
    })
    .catch(err =>{
      console.log(err.message);
    })
  },
};
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>