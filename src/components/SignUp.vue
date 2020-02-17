<template>
  <v-card  class="pa-5" style="overflow-hidden">
    <v-card-title class="mt-0 mb-0">
      <h1 v-if="$vuetify.breakpoint.smAndUp" class="weight5">Create an Account</h1>
      <h2 v-else class="weight5">Create an Account</h2>
    </v-card-title>
    <v-card-text>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
      <!-- form -->
      <v-layout class="sign-form mb-8" column>
        <!-- full name -->
        <div class="grey px-2 lighten-4" style="borderTopLeftRadius: 10px; borderTopRightRadius: 10px">
          <!-- <v-text-field
            color="grey" text solo depressed hide-details
            prepend-icon="mdi-account-outline"
            label="Full Name"
            :append-icon="fullNameErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
            v-model="form.fullName"            
            :error-messages="fullNameErrors"
          /> -->
          <v-text-field
            color="grey" text solo depressed hide-details
            prepend-icon="mdi-account-outline"
            label="First Name"
            :append-icon="firstNameErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
            v-model="form.firstName"            
            :error-messages="firstNameErrors"
          />
          <v-text-field
            color="grey" text solo depressed hide-details
            prepend-icon="mdi-account-outline"
            label="Last Name"
            :append-icon="lastNameErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
            v-model="form.lastName"            
            :error-messages="lastNameErrors"
          />
        </div>
        <!-- gender -->
        <div class="grey px-2 lighten-2">
          <v-select
            color="grey"
            prepend-icon="mdi-gender-non-binary"
            label="Gender"
            text
            solo
            depressed
            hide-details
            :items="['male', 'female']"
            v-model="form.gender"            
            :append-icon="genderErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
            :error-messages="genderErrors"
          />
        </div>
        <!-- email -->
        <div class="grey px-2 lighten-2">
          <v-text-field
            color="grey"
            prepend-icon="mdi-email"
            label="Email Address"
            text
            solo
            depressed
            hide-details
            v-model="form.email"
            :error-messages="emailErrors"
            :append-icon="emailErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
          />
        </div>
        <!-- password -->
        <div class="grey px-2 lighten-1">
          <v-text-field
            color="grey"
            prepend-icon="mdi-lock"
            label="Password"
            type="password"
            solo
            depressed
            hide-details
            v-model="form.password"
            :error-messages="passwordErrors"
            :append-icon="passwordErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
          />
        </div>
        <!-- confirm password -->
        <div class="grey px-2 lighten-1" style="borderBottomLeftRadius: 10px; borderBottomRightRadius: 10px">
          <v-text-field
            color="grey"
            prepend-icon="mdi-lock"
            label="Confirm Password"
            type="password"
            solo
            depressed
            hide-details
            v-model="form.confirmPassword"
            @keypress.enter="createAccount"
            :error-messages="confirmPasswordErrors"
            @blur="$v.form.confirmPassword.$touch"
            :append-icon="confirmPasswordErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
          />
        </div>
      </v-layout>

      <v-expand-transition>
        <template>
          <div v-if="errors" class="red--text mb-5 mt-n4">
            {{errors}}
          </div>
        </template>
      </v-expand-transition>

      <!-- actions -->
      <v-layout>
        <v-btn
          :loading="loading"
          @click="createAccount"
          color="grey"
          class="lighten-2"
          rounded>
          <span class="size-13">Create Account</span>
        </v-btn>
        <v-spacer />
        <v-btn @click="$emit('modeChange', 0)" rounded><span class="size-13">Login</span></v-btn>
      </v-layout>
      <!-- social -->
      <div class="mt-4">
        <p>Or you can join</p>
        <v-layout>
          <v-btn icon class="grey mr-2 lighten-1"></v-btn>
          <v-btn icon class="grey mr-2 "></v-btn>
          <v-btn icon class="grey mr-2 lighten-1"></v-btn>
        </v-layout>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, numeric, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'sign-up',
  data: () => ({
    form: {
    },
    loading: false,
    errors: null
  }),
  validations: {
    form : {
      // fullName: { required },
      firstName: { required },
      lastName: { required },
      gender: { required },
      email: { required, email },
      password: { required },
      confirmPassword: { required, sameAs: function() {
        return this.form.password == this.form.confirmPassword
      }}
    }
  },
  computed: {
    // fullNameErrors() {
    //   var field = this.$v.form.fullName;
    //   return this.checkRequired(field, 'full name');
    // },
    firstNameErrors() {
      var field = this.$v.form.firstName;
      return this.checkRequired(field, 'first name');
    },
    lastNameErrors() {
      var field = this.$v.form.lastName;
      return this.checkRequired(field, 'last name');
    },
    genderErrors() {
      var field = this.$v.form.gender;
      return this.checkRequired(field, 'gender');
    },
    emailErrors() {
      var field = this.$v.form.email;
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`email required`);
      !field.email && errors.push('please enter valid email')

      return errors;
    },
    passwordErrors() {
      var field = this.$v.form.password;
      return this.checkRequired(field, 'password');
    },
    confirmPasswordErrors() {
      var field = this.$v.form.confirmPassword;
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`confirm password please`);
      !field.sameAs && errors.push(`password does not match`);

      return errors;
    },
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      signUp: 'userStore/signUp'
    }),
    createAccount() {
      this.$v.form.$touch();
      
      if(this.$v.form.$invalid) {
        this.errors = this.getError();
        return;
      }
      
      this.loading = true;
      this.signUp({...this.form})
        .then(res => {
          this.loading = false;
          this.$router.push('/profile');
        })
        .catch(err => {
          this.loading = false;
        });
    },
    checkRequired(field, name) {
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`${name} required`);

      return errors;
    },  
    getError() {
      return (
      // this.fullNameErrors[0] ||
      this.firstNameErrors[0] ||
      this.lastNameErrors[0] ||
      this.genderErrors[0] ||
      this.emailErrors[0] ||
      this.passwordErrors[0] ||
      this.confirmPasswordErrors[0]);
    }
  },
  watch: {
    'form': {
      deep: true,
      handler: function() {
        this.errors = null;
      }
    }
  }
}
</script>

<style>
.v-input__icon--prepend .v-icon.error--text {
  text-decoration-color: grey !important;
  color: rgb(116, 116, 116) !important;
}
</style>