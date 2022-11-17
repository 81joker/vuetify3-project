<template>
  <h1 class="subheading text-grey">Team page</h1>

  <v-container class="my-5">
    <v-row>
      <v-col
        cols="12"
        lg="3"
        md="6"
        sm="6"
        xs="12"
        v-for="person in team"
        :key="person.name"
      >
        <!-- <v-card flat class="text-sm-center ma-2">
                  </v-card> -->
        <v-card flat class="text-sm-center ma-2">
          <v-responsive class="pt-4">
          <v-avatar size="100"  color="surface-variant">
          <!-- <v-avatar color="surface-variant" size="100"> -->
          <v-img
            class="align-end text-white"
            height="200"
            :src="person.avatar"
            alt="person.avatar"
            cover
          >
          </v-img>
        </v-avatar>
      </v-responsive>
          <!-- <v-card-subtitle class="pt-4"> -->
            <v-card-text>
              <!-- {{ project.name }} -->
              <div class="subheading">{{ person.name }}</div>
              <div class="text-grey">{{ person.role }}</div>
            </v-card-text>
          <!-- </v-card-subtitle> -->

          <v-card-actions>
            <v-btn color="grey">
              <v-icon small left>mdi-message</v-icon>
              <span class="">Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/avatar-1.png",
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar-3.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.png",
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" },
      ],
    };
  },
};
</script>

<style></style>
