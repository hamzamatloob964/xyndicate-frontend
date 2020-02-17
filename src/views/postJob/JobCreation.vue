<template>
  <div class="jc-container col-flex">
    <Header />
    <div class="jc-content grey lighten-4 pa-4">
      <div class="container">
        <v-stepper class="bg-unset elevation-0" v-model="e1" light>
          <v-stepper-header class="bg-unset elevation-0 mx-auto jc-step-header">
            <v-divider></v-divider>
            
            <v-stepper-step editable :complete="e1 > 1" step="1"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable :complete="e1 > 2" step="2"></v-stepper-step>

            <v-divider></v-divider>
            <!-- <v-divider></v-divider>

            <v-stepper-step editable step="3"></v-stepper-step> -->
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <Step1 @changeStep="e1 = $event" @onComplete="stepComplete" />
            </v-stepper-content>

            <v-stepper-content step="2">
              <Step2 @changeStep="e1 = $event" @onComplete="submit" />
            </v-stepper-content>

            <!-- <v-stepper-content step="3">
              <Step3 @changeStep="e1 = $event" />
            </v-stepper-content> -->
          </v-stepper-items>
        </v-stepper>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>  
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Step1 from '@/components/jobCreation/Step1'
import Step2 from '@/components/jobCreation/Step2'
import Step3 from '@/components/jobCreation/Step3'

export default {
  name: 'job-creation',
  components: {
    Header,
    Footer,
    Step1,
    Step2,
    Step3
  },
  data: () =>({
    e1: null,
    form: {}
  }),
  methods: {
    
    stepComplete(payload) {
      for(let prop in payload)
        this.$set(this.form, prop, payload[prop])

      console.log(this.form);
    },
    submit(payload) {
      for(let prop in payload)
        this.$set(this.form, prop, payload[prop])

      console.log(this.form);

      if(this.form._id){
        this.$store.dispatch('jobStore/updateJob', this.form)
          .then(res => {
            this.$router.push(`/job/${res._id}`);
          });
      }
      else
        this.$store.dispatch('jobStore/createJob', this.form)
          .then(res => {
            this.$router.push(`/Job/${res._id}`);
          });

      // if(this.form._id){
      //   this.$store.dispatch('jobStore/updateSyndicate', this.form)
      //     .then(res => {
      //       this.$router.push(`/company/${res._id}`);
      //     });
      // }
      // else
      //   this.$store.dispatch('jobStore/createSyndicate', this.form)
      //     .then(res => {
      //       this.$router.push(`/company/${res._id}`);
      //   });
    }
  }
}
</script>

<style lang="scss">
.jc-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .jc-content {
    flex: 1;

    @media only screen and (min-width: 500px) {
      .v-stepper__header {
        width: 400px !important;
      }
    }
  }
}
</style>