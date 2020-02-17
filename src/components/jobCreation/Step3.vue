<template>
  <v-layout wrap>
    <!-- LEFT -->
    <v-flex xs12 sm8 class="pr-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title>
          <div style="flex: 1">
            <h3 class="weight5">STEP 3: Set your budget, pay when candidates view your job</h3>
            <v-divider class="my-5"></v-divider>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout>
            <v-flex xs9 class="px-3">
              <h3 class="mb-10">Daily Budget</h3>
              <v-slider
                min="5"
                max="1000"
                thumb-label="always"
                thumb-color="grey"
                track-color="grey lighten-1"
                track-fill-color="grey darken-4"
              ></v-slider>
            </v-flex>
            <v-flex xs3>
              <div class="size-13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.
              </div>
            </v-flex>
          </v-layout>
          <div class="grey mt-4" style="height: 200px"></div>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            color="grey"
            class="darken-2"
            @click="showDialog = true"
          >
            <span class="color-white">Finish</span>
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- RIGHT -->
    <v-flex xs12 sm4 class="pl-2">
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
    </v-flex>
    <v-dialog v-model="showDialog" max-width="400px">
      <v-card class="br-15">
        <v-card-title class="mb-0 pa-2 pb-0">
          <v-icon @click="showDialog = false" class="ml-auto pointer">mdi-close</v-icon>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-layout column align-center justify-center>
            <v-icon color="grey darken-3" class="mb-4" size="150">mdi-checkbox-marked-circle</v-icon>
            <p>Great! job created successfully</p>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'step-3',
  data: () => ({
    showDialog: false
  })
}
</script>

<style>

</style>