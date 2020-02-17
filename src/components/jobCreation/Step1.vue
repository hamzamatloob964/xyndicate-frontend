<template>
  <v-layout wrap justify-center>
    <!-- LEFT -->
    <v-flex xs12 sm8 class="pr-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title>
          <div style="flex: 1">
            <h3 class="weight5">STEP 1: Preliminary Details</h3>
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
                  :append-icon="syndicateErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="syndicateErrors"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Title"
                  v-model="form.title"
                  :append-icon="titleErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="titleErrors"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Address"
                  v-model="form.address"
                  :append-icon="addressErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="addressErrors"
                />
                <v-select
                  class="grey lighten-4"
                  dense solo 
                  :items="roles"
                  label="Role"
                  v-model="form.role"
                  :append-icon="roleErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="roleErrors"
                />
                <v-select
                  class="grey lighten-4"
                  dense solo 
                  :items="types"
                  label="Type"
                  v-model="form.type"
                  :append-icon="typeErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="typeErrors"
                />
                <!-- <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Position Level"
                  v-model="form.position"
                  :append-icon="positionErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="positionErrors"
                /> -->
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
import { required } from 'vuelidate/lib/validators';
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
      "Full-time",
      "Internship",
      "Part-time",
      "Free lance",
      "Contract",
      "Volunteer"
    ]
  }),
  validations: {
    form : {
      syndicate: { required },
      title: { required },
      address: { required },
      role: { required },
      type: { required },
    }
  },
  computed: {
    syndicateErrors() {
      var field = this.$v.form.syndicate;
      return this.checkRequired(field, 'syndicate');
    },
    titleErrors() {
      var field = this.$v.form.title;
      return this.checkRequired(field, 'title');
    },
    addressErrors() {
      var field = this.$v.form.address;
      return this.checkRequired(field, 'address');
    },
    roleErrors() {
      var field = this.$v.form.role;
      return this.checkRequired(field, 'role');
    },
    typeErrors() {
      var field = this.$v.form.type;
      return this.checkRequired(field, 'type');
    },
    companies: function() {
      return this.$store.state.syndicateStore.syndicates || []
    }
  },
  mounted() {
    this.form = {...this.$store.state.jobStore.postJob};
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      
      if(this.$v.form.$invalid) {
        console.log("error submit func **********")
        this.errors = this.getError();
        return;
      }

      let payload = {...this.form};
      this.$emit('onComplete', payload);
      this.$emit('changeStep', 2);
    },
    getError() {
      return (
      this.typeErrors[0] ||
      this.roleErrors[0] ||
      this.addressErrors[0] ||
      this.titleErrors[0] ||
      this.syndicateErrors[0]);
    },
    checkRequired(field, name) {
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`${name} required`);

      return errors;
    },  
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