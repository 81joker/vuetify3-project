<template>
  <div id="XX">
    <v-card flat>
      <v-card-text>
        <v-layout wrap class="text-center">
          <v-flex xs12>
            <div v-if="loading === false">
              <span>OK loaded.</span>
              <a @click.prevent="getAllowedDates">Try again?</a>
            </div>
            <span v-else>Loading dates...</span>
          </v-flex>
          <v-flex xs12>
            <v-date-picker
              v-model="date"
              :allowed-dates="allowedDates"
              class="mt-3"
            />
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
    date: '2022-01-11',
    allowedDatesArray: [],
    loading: true,
  }),
  mounted() {
    this.getAllowedDates();
  },
  methods: {
    allowedDates(val) {
      return this.allowedDatesArray.includes(val);
    },
    async getAllowedDates() {
      this.allowedDatesArray = [];
      this.loading = true;
      let randomTimeout = 2000 + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, randomTimeout)).then(() => {
        this.allowedDatesArray.push('2022-01-12');
        this.allowedDatesArray.push('2022-01-14');
        this.allowedDatesArray.push('2022-01-15');
        this.allowedDatesArray.push('2022-01-20');
        this.allowedDatesArray.push('2022-02-10');
        this.loading = false;
      });
    },
  },
}
</script>

<style>

</style>