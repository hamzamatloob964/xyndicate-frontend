<template>
  <v-app>
    <template v-if="!authChecked">
      <div class="row-flex align-center justify-center" style="width: 100vw; min-height: 100vh">
        <v-progress-circular size="150" indeterminate ></v-progress-circular>
      </div>
    </template>
    <v-content v-else>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //authChecked: false
  }),
  computed: {
    ...mapState({
      'authChecked': state => state.authChecked
    })
  },
  mounted() {
    this.$store.dispatch('checkSession')
      .then(res => {
        if(res && this.$route.name === 'home')
          this.$router.push('/profile');
      })
      .catch(err => {

      })
  }
};
</script>

<style lang="scss">
@import 'src/assets/main.scss';
#app {
  background-color: white;
}
</style>