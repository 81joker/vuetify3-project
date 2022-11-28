<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Add a new Project </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h2>Add a new Project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="pt-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
              color="primary"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-comment"
              :rules="inputRules"
              color="primary"
            ></v-textarea>

            <!-- Datapicker Start -->
            <!-- <v-menu min-width="auto">
          <template v-slot:activator="{ on,attrs }">
            <v-text-field
              label="Picker in menu"
              prepend-icon="mdi-calendar"
              v-bind="attrs" v-on="on" ></v-text-field>
          <v-date-picker
            v-model="date">
          </v-date-picker>
          </template>
        </v-menu> -->
            <!-- 
          <v-menu>
     <v-text-field color="primary" dark slot="activator" label="Due date" prepend-icon="mdi-calendar">text</v-text-field>
     <v-date-picker v-model="due" :landscape="true" :reactive="true"></v-date-picker>
            </v-menu> -->

            <v-btn color="indigo mx-0 mt-5" @click="onSubmit" :loading="loading"
              >Add project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import colRef from '@/fb'
import { addDoc } from "firebase/firestore";

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      dialog: false,
      loading:false,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],


    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const project = {
          title: this.title,
          content: this.content,
          person: 'Ich bin nehad altimimi',
          status: 'goooood'
        }
          addDoc(colRef,project).then(()=>{
            this.loading = false
          this.dialog = false
          this.$emit('projectAdedd')
        })
      }
    },
  },
};
</script>
<style>
.v-input--is-focused .v-input__slot {
  border: 2px solid #005fcc !important;
  border-bottom-color: red !important;
}
</style>