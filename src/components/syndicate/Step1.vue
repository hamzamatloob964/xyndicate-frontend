<template>
  <v-layout wrap>
    <!-- LEFT -->
    <v-flex xs12 class="px-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title class="justify-center">
          <div style="flex: 1; text-align: center">
            <h3 class="weight5">STEP 1: Preliminary Information</h3>
            <v-divider class="my-5"></v-divider>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout align-center row wrap class="px-2 px-sm-4 layout">
            <v-flex xs12 sm7 >
              <v-label>Name of Syndicate</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-briefcase-outline"
                :append-icon="nameErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                :error-messages="nameErrors"
                label="Name"
                solo
                v-model="form.name"
              />
              
              <v-label>Slogan</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-message"
                label="Slogan"
                solo
                v-model="form.slogan"
              />

              <v-label>Type of Syndicate</v-label>
              <v-select
                class="mt-3"
                prepend-inner-icon="mdi-briefcase-outline"
                :append-icon="typeErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                :error-messages="typeErrors"
                label="Syndicate type"
                solo
                :items="types"
                v-model="form.type"
              />
              <v-text-field
                v-if="form.type == 'other'"
                class="mt-n5"
                placeholder="please specify"
                solo
                v-model="form.type2"
              />

              <v-label>Industry</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-office-building"
                :append-icon="industryErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                :error-messages="industryErrors"
                label="Industry"
                solo
                v-model="form.industry"
              />

              <v-label>Country</v-label>
              <v-select
                class="mt-3"
                prepend-inner-icon="mdi-map"
                :append-icon="countryErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                :error-messages="countryErrors"
                label="Country"
                :items="countries"
                solo
                v-model="form.country"
              />
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
  </v-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'step-1',
  data: () => ({
    types: [
      'Private Company',
      'Public Company',
      'Societies & Clubs',
      'Casual Group',
      'Government Organization',
      'Non profit',
      'other',
    ],
    countries: [
      'Singapore',
      'Malaysia',
      'China',
      'Pakistan'
    ],
    form: {

    }
  }),
  validations: {
    form : {
      name: { required },
      type: { required },
      industry: { required },
      country: { required }
    }
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
      payload.type = this.form.type2 || this.form.type;
      console.log("submit func **********")
      this.$emit('onComplete', payload);
      this.$emit('changeStep', 2);
    },
    getError() {
      return (
      this.nameErrors[0] ||
      this.typeErrors[0] ||
      this.industryErrors[0] ||
      this.countryErrors[0]);
    },
    checkRequired(field, name) {
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`${name} required`);

      return errors;
    },  
  },
  computed: {
    nameErrors() {
      var field = this.$v.form.name;
      return this.checkRequired(field, 'name');
    },
    typeErrors() {
      var field = this.$v.form.type;
      return this.checkRequired(field, 'type');
    },
    industryErrors() {
      var field = this.$v.form.industry;
      return this.checkRequired(field, 'industry');
    },
    countryErrors() {
      var field = this.$v.form.country;
      return this.checkRequired(field, 'country');
    },
  },
  props: ['values'],
  mounted() {
    for(let prop in this.values)
      this.$set(this.form, prop, this.values[prop])
  },
  watch: {
    'values': function() {
      for(let prop in this.values)
        this.$set(this.form, prop, this.values[prop])
    }
  }
}
</script>

<style>
.layout{
  margin: auto;
}
</style>