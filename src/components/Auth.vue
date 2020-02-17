<template>
  <span>
    <v-btn @click="showDialog = true; mode = 1" class="grey darken-2 white--text mr-3 px-5" small text>Sign Up</v-btn>
    <v-btn @click="showDialog = true; mode = 0" class="grey white--text px-5" small text>Sign In</v-btn>
    <v-dialog v-model="showDialog" max-width="450px">
      <div class="white" style="transition: all 0.25s; overflow: hidden">
        <v-scroll-x-transition  hide-on-leave absolute>
          <template>
            <SignIn @modeChange="mode = $event" v-if="mode == 0" />
          </template>
        </v-scroll-x-transition>
        <v-scroll-x-reverse-transition hide-on-leave absolute>
          <template>
            <SignUp @modeChange="mode = $event" v-if="mode == 1" />
          </template>
        </v-scroll-x-reverse-transition>
      </div>
    </v-dialog>
  </span>
</template>

<script>
import SignIn from  './SignIn'
import SignUp from  './SignUp'

export default {
  name: 'sign-in',
  components: {
    SignIn,
    SignUp
  },
  data: () => ({
    showDialog: false,
    mode: 0
  })
}
</script>

<style>
  .sign-form .v-input__slot {
    box-shadow: none !important;
    /* padding: 0 !important; */
  }
</style>