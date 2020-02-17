<template>
  <v-layout wrap justify-center>
    <!-- LEFT -->
    <v-flex xs12 sm8 class="pr-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title>
          <div style="flex: 1">
            <h3 class="weight5">STEP 1: Preliminary Information</h3>
            <v-divider class="my-5"></v-divider>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout>
            <v-flex sm8 xs12>
              <v-form class="my-form">
                <v-select
                  class="grey lighten-4"
                  dense solo 
                  :items="companies"
                  item-text="name"
                  item-value="_id"
                  label="Syndicate"
                  v-model="form.syndicate"
                />
                <v-select
                  class="grey lighten-4"
                  dense solo 
                  :items="types"
                  label="Event Type"
                  v-model="form.type"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Title"
                  v-model="form.title"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Date"
                  v-model="form.date"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Time"
                  v-model="form.time"
                />
              </v-form>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            color="grey"
            class="darken-2"
            @click="submit"
          >
            <span class="color-white">Continue</span>
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- RIGHT -->
    <!-- <v-flex xs12 sm4 class="pl-2">
      <v-card
        class="mb-12 br-15"
        color="grey lighten-3"
      >
        <v-card-text>
          <h2 class="weight5">Who to follow</h2>
          <v-divider class="my-4"></v-divider>
          <div v-for="n of 3" :key="n" class="row-flex align-center justify-space-between mb-2">
            <v-avatar class="grey"></v-avatar>
            <p>lorem ipsum lorem ipsum</p>
            <v-btn small rounded>action</v-btn>
          </div>
          <v-divider class="my-4"></v-divider>
          <p>Show more</p>
        </v-card-text>
      </v-card>
    </v-flex> -->
  </v-layout>
</template>

<script>
export default {
  name: 'step-1',
  data: () => ({
    form: {},
    roles: [
      'Software development',
      'Sales',
      'Marketing',
      'Operations',
      'Business development',
      'Finance and accountancy',
      'General',
      'Managerial',
      'Administrative',
      'Customer service',
      'Others: please specify'
    ],
    types: [
      "Networking Event",
      "Speaking event",
      "Workshop and lessons",
      "Hackathon",
      "Competition"
    ]
  }),
  computed: {
    companies: function() {
      return this.$store.state.syndicateStore.syndicates || []
    }
  },
  mounted() {
    this.form = {...this.$store.state.jobStore.postJob};
  },
  methods: {
    submit() {
      let payload = {...this.form};
      this.$emit('onComplete', payload);
      this.$emit('changeStep', 2);
    }
  },
}
</script>

<style>
.my-form .grey.lighten-4.v-input{
  background-color: unset !important;
}
.my-form .v-input__slot{
  background-color: white !important;
}
</style>