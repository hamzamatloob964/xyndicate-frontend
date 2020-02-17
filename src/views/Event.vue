<template>
  <div class="event-container col-flex">
    <Header />
    <div class="event-detail-content">
      <!-- IMG BANNER -->
      <v-img
        v-if="false"
        src="@/assets/images/oppurtunity.jpg"
        max-height="400px"
      ></v-img>
      <!-- BANNER -->
      <div class="bg-mgray col-flex pb-10" v-else style="height: 400px; width: 100%">
        <div class="container my-auto">
          <v-layout class="border-left-gray pl-4 mb-10" column>
            <span>Event</span> 
            <span>Details</span> 
          </v-layout>
          <span class="size-12" style="margin-left: 2px">Speakers</span>
          <h1 class="weight5 color-gray" style="margin-top: -4px; margin-bottom: -4px">
            {{event.syndicate && event.syndicate.name}}
          </h1>
          <span class="size-12 d-block" style="margin-left: 2px">Berlin, Germany, CEO of XYZ inc. / Director of some tech startup</span>
          <span class="size-12" style="margin-left: -1px"><v-icon size="16">mdi-office-building</v-icon> 15 investments</span>
          <!-- <p class="weight5">Job<br/>Details</p> -->
        </div>
      </div>
      <!-- MAIN CONTENT -->
      <v-layout class="container py-10">
        <!-- LEFT -->
        <v-flex class="panel1 pr-5" xs8>
          <!-- FIRST SECTION -->
          <div class="bg-mgray pa-5 py-10 br-x elevation-1 mb-12 pb-5" align="left">
            <v-layout justify-space-around class="mb-5">
              <div class="row-flex mb-3">
                <h1>3 </h1><span class="weight5 nm-x size-16" >Days</span>
              </div>
              <div style="border-left: 1px solid grey"></div>
              <div class="row-flex mb-3">
                <h1>10 </h1><span class="weight5 nm-x size-16" >Workshops</span>
              </div>
              <div style="border-left: 1px solid grey"></div>
              <div class="row-flex mb-3">
                <h1>20 </h1><span class="weight5 nm-x size-16" >Speakers</span>
              </div>
            </v-layout>
            <div align="center">
              <span class="size-12">(20 December, 2019)</span>
            </div>
              
          </div>
          <!-- SECOND SECTION -->
          <div class="row-flex mb-12 wrap-it" align="left">
            <v-flex class="col-flex mb-xs-5" justify-center xs12 sm6>
              <div class="pr-5">
                <h2 class="weight5 mb-5">{{event.title}}</h2>
                <p class="size-14 mb-10">
                  {{event.description}}
                </p>
                <v-btn class="mb-5" rounded style="width: 150px">action</v-btn>
              </div>
            </v-flex>
            <v-flex xs12 sm6 class="">
              <div class="pl-5 br-x bg-mgray" style="height: 350px; width: 100%">

              </div>
            </v-flex>
          </div>
          <!-- THIRD SECTION -->
          <div class="bg-mgray pa-12 py-5 br-x elevation-1 mb-12" align="left">
            <v-layout align-center wrap>
              <v-flex xs12>
                <h2 class="mr-12">Countdown</h2>
              </v-flex>
              <v-layout justify-space-between align-center>
                <div class="col-flex align-center color-gray">
                  <h1 style="font-size: 45px">12</h1>
                  [Days]
                </div>
                <span style="font-size: 45px">:</span>
                <div class="col-flex align-center color-gray">
                  <h1 style="font-size: 45px">08</h1>
                  [Hours]
                </div>
                <span style="font-size: 45px">:</span>
                <div class="col-flex align-center color-gray">
                  <h1 style="font-size: 45px">60</h1>
                  [Minutes]
                </div>
                <span style="font-size: 45px">:</span>
                <div class="col-flex align-center color-gray">
                  <h1 style="font-size: 45px">15</h1>
                  [Seconds]
                </div>
              </v-layout>
            </v-layout>
          </div>
          <!-- SPEAKERS SECTION -->
          <div>
            <h2 class="weight5 mb-10">Speakers</h2>
            <v-layout :wrap="$vuetify.breakpoint.xs">
              <v-layout column v-for="n in 4" :key="n">
                <v-avatar size="130" class="elevation-3 bg-mgray"></v-avatar>
                <h3 class="mt-5 weight5">Design Princess</h3>
                <p class="size-14">
                  We are the leading full-service
                  law firm on the African continent.
                  We combine the collective
                  knowledge and
                </p>
              </v-layout>
            </v-layout>
          </div>
        </v-flex>
        <!-- RIGHT -->
        <v-flex class="pl-5 col-flex align-center" xs4>
          <div class="pl-5 col-flex justify-center align-center" style="margin-top: 50%">
            <div
              class="mb-5"
              style="height: 120px; width: 120px; background-size: contain; background-position: center"
              :style="{ backgroundImage: `url(${require('../assets/images/logo100.png')})` }">
            </div>
            <h2 class="weight5 mb-5">{{event.syndicate && event.syndicate.name}}</h2>
            <div class="mb-5">
              <span>
                <v-icon size="18">mdi-map-marker</v-icon>
                <span>Hanol, Germany</span>
              </span>
              <span class="mx-4">.</span>
              <span class="size-16">Full Time</span>
            </div>
            <span class="size-14 mb-10">Web services, Design services</span>
            <v-btn color="grey darken-2" style="width: 100%; max-width: 256px" class="mb-5 lighten-3 white--text" full-width rounded>Action</v-btn>
            <!-- <v-btn style="width: 100%; max-width: 256px" full-width rounded class="color-gray">save job</v-btn> -->
          </div>
        </v-flex>
      </v-layout>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'event',
  components: {
    Header,
    Footer
  },
  computed: {
    event: function() {
      return this.$store.state.eventStore.activeEvent || {syndicate: {}}
    }
  },
  mounted() {
    if(this.$route.params.id)
      this.$store.dispatch('eventStore/getEvent', this.$route.params.id);
  }

}
</script>

<style lang="scss">
.event-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .event-detail-content {
    flex: 1;
    // max-width: 900px;

    .border-left-gray {
      border-left: 4px solid rgb(99, 99, 99);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    .br-x {
      border-radius: 15px;
    }

    .nm-x {
      transform: translateY(-10px)
    }

    .panel1 {
      position: relative;
    }

    .panel1::after {
      position: absolute;
      top: 10%;
      right: 0;
      height: 80%;
      content: '';
      border-left: 2px solid rgb(216, 216, 216);
    }
  }
  
}
</style>