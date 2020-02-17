<template>
  <div class="pj-container col-flex">
    <Header />
    <div class="pj-content col-flex justify-center align-center grey lighten-4 pa-4">
      <h3 class="weight5 mb-8">Post your job on the #1 site for finding quality hires.</h3>
      <v-card class="bg-white">
        <v-card-text class="bg-white px-8" style="width: 400px">
          <v-form ref="myForm" class="ma-5 mx-10" align="center">
            <v-select
              prepend-inner-icon="mdi-domain"
              label="Company"
              solo
              :items="companies"
              item-text="name"
              item-value="_id"
              v-model="form.syndicate"
              :rules="[v => !!v || 'required']"
            />
            <v-text-field
              prepend-inner-icon="mdi-briefcase-outline"
              label="Job Title"
              solo
              v-model="form.title"
              @keypress.enter="submit"
              :rules="[v => !!v || 'required']"
            />
            <v-text-field
              prepend-inner-icon="mdi-map-marker-outline"
              label="Job Address or City"
              solo
              v-model="form.address"
              @keypress.enter="submit"
              :rules="[v => !!v || 'required']"
            />
            <v-btn @click="submit">Start Job Post</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
    <Footer />
  </div>
</template>

<script>  
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'post-job',
  components: {
    Header,
    Footer
  },
  data: () => ({
    form: {}
  }),
  computed: {
    companies: function() {
      return this.$store.state.syndicateStore.syndicates || []
    }
  },
  methods: {
    submit() {
      if(!this.$refs.myForm.validate())
        return;
      this.$store.commit('jobStore/POST_JOB', {...this.form});
      this.$router.push('/job-creation')
    }
  }
}
</script>

<style lang="scss">
.pj-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .pj-content {
    flex: 1
  }
}
</style>