<template>
  <div class="job-container col-flex">
    <Header />
    <div class="job-detail-content">
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
            <span>Job</span> 
            <span>Details</span> 
          </v-layout>
          <span class="size-12" style="margin-left: 2px">Employers</span>
          <h1 class="weight5 color-gray" style="margin-top: -4px; margin-bottom: -4px">
            {{job.syndicate && job.syndicate.name}}
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
          <!-- HEADING -->
          <h2 class="mb-3">{{job.title}}</h2>
          <!-- META -->
          <v-layout class="size-16 mb-3" style="margin-left: -4px">
            <span>
              <v-icon size="18">mdi-map-marker</v-icon>
              <span>{{job.address}}</span>
            </span>
            <span class="mx-4">.</span>
            <span class="size-16">{{job.type}}</span>
            <span class="mx-4">.</span>
            <span class="size-16">Monthly Salary: {{job.renumeration}}</span>
          </v-layout>
          <!-- ROLES / REVIEWS -->
          <v-layout class="mb-10" align-center>
            <h4 class="">Roles: {{job.role}}</h4>
            <v-spacer></v-spacer>
            <v-rating color="black" small :value="3"></v-rating>
            15 reviews
          </v-layout>
          <!-- JOB DESCRIPTION -->
          <h2 class="font-weight-regular">Job Description</h2>
          <p style="text-align: justify">
            {{job.scope}}
          </p>
          <!-- BACKEND REQUIREMENTS -->
          <!-- <h3 class="font-weight-regular mb-2">Backend Requirements</h3>
          <p>
            {{job.additionalInfo}}
          </p> -->
          <!-- SKILLS REQUIRED -->
          <h2 class="font-weight-regular">Skills Required</h2>
          <div v-for="(item, i) in job.skills" :key="i">* {{item}}</div>
          <!-- PROFILE BUTTON -->
          <v-btn
            @click="$router.push(`/company/${job.syndicate._id}`)"
            class="mt-5 grey darken-2 white--text"
            text
          > 
            View company profile
          </v-btn>
        </v-flex>
        <!-- RIGHT -->
        <v-flex class="pl-5 col-flex justify-center align-center" xs4>

          <div
            class="mb-5"
            style="height: 120px; width: 120px; background-size: contain; background-position: center"
            :style="{ backgroundImage: `url(${require('../assets/images/logo100.png')})` }">
          </div>
          <!-- <v-avatar class="elevation-3 mb-5" size="150">
          </v-avatar> -->
          <h2 class="weight5 mb-5">{{job.syndicate && job.syndicate.name}}</h2>
          <div class="mb-5">
            <span>
              <v-icon size="18">mdi-map-marker</v-icon>
              <span>{{job.address}}</span>
            </span>
            <span class="mx-4">.</span>
            <span class="size-16">{{job.type}}</span>
          </div>
          <span class="size-14 mb-10">{{job.role}}</span>
          <v-btn style="width: 100%; max-width: 256px" class="mb-5 grey darken-2 white--text" 
            full-width rounded @click.stop="dialog=true">apply now</v-btn>
          <v-btn style="width: 100%; max-width: 256px" class="mb-5 grey darken-2 white--text" 
            full-width rounded>edit job</v-btn>
          <v-btn style="width: 100%; max-width: 256px" class="mb-5 grey darken-2 white--text" 
            full-width rounded>delete job</v-btn>
          <v-btn style="width: 100%; max-width: 256px" full-width rounded class="color-gray">
            save job</v-btn>
        </v-flex>
      </v-layout>
      <v-dialog
      v-model="dialog"
      width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Candidate Information
          </v-card-title>

          <v-card-text>
            <v-layout class="mt-5">
            <v-flex >
              <v-form class="my-form">
                <v-textarea
                  class="grey lighten-4"
                  dense solo 
                  label="Short Introduction"
                  v-model="form.introduction"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Number"
                  v-model="form.number"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Contact email"
                  v-model="form.email"
                />
                <input type="file"/>
              </v-form>
            </v-flex>
          </v-layout>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'job',
  data() {
    return {
      form: {},
      dialog: false
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    job: function() {
      return this.$store.state.jobStore.activeJob || {syndicate: {}}
    }
  },
  mounted() {
    if(this.$route.params.id)
      this.$store.dispatch('jobStore/getJob', this.$route.params.id);
  }

}
</script>

<style lang="scss">
.job-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .job-detail-content {
    flex: 1;

    .border-left-gray {
      border-left: 4px solid rgb(99, 99, 99);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
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