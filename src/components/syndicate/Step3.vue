<template>
  <v-layout wrap>
    <!-- LEFT -->
    <v-flex xs12 class="px-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title>
          <div style="flex: 1">
            <h3 class="weight5">STEP 3: Contact Details</h3>
            <v-divider class="my-5"></v-divider>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap class="px-2 px-sm-4">
            <v-flex xs12 sm7>
              <v-label>Company Email</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-at"
                :append-icon="emailErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                :error-messages="emailErrors"
                label="email"
                solo
                v-model="form.email"
              />
              
              <v-label>Office Number</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-phone"
                label="phone"
                solo
                v-model="form.phone"
              />
              
              <v-label>Company Website</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-web"
                label="website"
                solo
                v-model="form.website"
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
            <span class="color-white">{{values._id ? 'Update Syndicate' : 'Create Syndicate'}}</span>
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { required,email } from 'vuelidate/lib/validators';
export default {
  name: 'step-3',
  data: () => ({
    form: {}
  }),
  validations: {
    form : {
      email: { required }
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      
      if(this.$v.form.$invalid) {
        this.errors = this.getError();
        return;
      }

      let payload = {...this.form};
      this.$emit('onComplete', payload);
    },
    getError() {
      return (
      this.emailErrors[0]);
    },
  },
  computed: {
    emailErrors() {
      var field = this.$v.form.email;
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`This field is required, please fill it in to proceed`);
      !field.email && errors.push('please enter valid email')

      return errors;
    },
  },
  props: ['values'],
  mounted() {
    for(let prop in this.values)
      this.$set(this.form, prop, this.values[prop])
  },
  watch: {
    'values': {
      deep: true,
      handler: function() {
        for(let prop in this.values)
          this.$set(this.form, prop, this.values[prop])
      }
    }
  }
}
</script>

<style>

</style>