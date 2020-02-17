<template>
  <v-card  class="pa-5">
    <v-card-title class="mt-2 mb-5">
      <h1 class="weight5">Welcome Back :)</h1>
    </v-card-title>
    <v-card-text>
      <p class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <!-- form -->
      <v-form @keypress.native.enter="submit" class="sign-form col-flex">
        <div class="grey pa-2 lighten-4" style="borderTopLeftRadius: 10px; borderTopRightRadius: 10px">
          <v-text-field
            color="grey"
            prepend-icon="mdi-email"
            append-icon="mdi-check-circle-outline"
            label="Email Address"
            v-model="form.email"
            text
            solo
            depressed
            hide-details
          />
        </div>
        <div class="grey pa-2 lighten-1" style="borderBottomLeftRadius: 10px; borderBottomRightRadius: 10px">
          <v-text-field
            color="grey"
            prepend-icon="mdi-lock"
            append-icon="mdi-check-circle-outline"
            label="Password"
            v-model="form.password"
            type="password"
            solo
            depressed
            hide-details
          />
        </div>
      </v-form>
      <!-- remember me and password -->
      <v-layout justify-space-between align-center>
        <span class="row-flex align-center size-13 pointer">
          <v-checkbox color="grey" /> Remember me
        </span>
        <v-spacer />
        <span class="size-13 pointer">Forgot password</span>
      </v-layout>
      <!-- actions -->
      <v-layout>
        <v-btn @click="submit" color="grey" class="lighten-2" rounded><span class="size-13">Login now</span></v-btn>
        <v-spacer />
        <v-btn @click="$emit('modeChange', 1)" rounded><span class="size-13">Create Account</span></v-btn>
      </v-layout>
      <!-- social -->
      <div class="mt-10">
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
import {mapActions} from  'vuex'

export default {
  name: 'sign-in',
  data() {
    return {
      form: {}
    }
  },
  methods: {
    ...mapActions({
      signin: 'userStore/signIn' 
    }),

    submit() {
      this.isLoading = true;
      this.signin(this.form)
        .then(res => {
          this.isLoading = false;
          this.$router.push('/profile');
        })
        .catch(err => {
          this.isLoading = false;

        })
    }
  }
}
</script>

<style>

</style>