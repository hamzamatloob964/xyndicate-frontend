<template>
  <div class="syndicate-container col-flex">
    <Header />
    <div class="syndicate-content grey lighten-4 pa-4">
      <div class="container">
        <v-stepper class="bg-unset elevation-0" v-model="e1" light>
          <v-stepper-header class="bg-unset elevation-0 mx-auto syndicate-step-header">
            <v-stepper-step editable :complete="e1 > 1" step="1"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable :complete="e1 > 2" step="2"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="3"></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <Step1 :values="form" @changeStep="e1 = $event" @onComplete="stepComplete" />
            </v-stepper-content>

            <v-stepper-content step="2">
              <Step2 :values="form" @changeStep="e1 = $event" @onComplete="stepComplete" />
            </v-stepper-content>

            <v-stepper-content step="3">
              <Step3 :values="form" @changeStep="e1 = $event" @onComplete="submit" />
            </v-stepper-content>
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
import Step1 from '@/components/syndicate/Step1'
import Step2 from '@/components/syndicate/Step2'
import Step3 from '@/components/syndicate/Step3'

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

      console.log(this.form.name);
    },
    submit(payload) {
      for(let prop in payload)
        this.$set(this.form, prop, payload[prop])

      console.log(this.form);

      if(this.form._id){
        this.$store.dispatch('syndicateStore/updateSyndicate', this.form)
          .then(res => {
            this.$router.push(`/company/${res._id}`);
          });
      }
      else
        this.$store.dispatch('syndicateStore/createSyndicate', this.form)
          .then(res => {
            this.$router.push(`/company/${res._id}`);
        });
    }
  },
  mounted() {
    if(this.$route.query.mode === 'edit') {
      // console.log('here');
      // this.$set(this, 'form', {...this.$store.state.syndicateStore.activeSyndicate});
      this.form = {...this.$store.state.syndicateStore.activeSyndicate}
    }
  }
}
</script>

<style lang="scss">
.syndicate-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .v-stepper__step__step.primary {
    background-color: black !important;
  }

  .syndicate-content {
    flex: 1;

    @media only screen and (min-width: 500px) {
      .v-stepper__header {
        width: 400px !important;
      }
    }
  }

  .v-input__slot {
    background-color: white !important;
  }
}
</style>