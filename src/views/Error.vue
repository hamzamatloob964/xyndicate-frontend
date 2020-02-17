<template>
  <div class="error-container col-flex">
    <Header />
    <v-layout class="error-content container" column justify-center align-center>
      <div>
        <img style="width: 120px" src="@/assets/images/face.png" />
      </div>
      <div class="my-10 size-20" style="text-align: center; font-weight: bold; color: black">
        Sorry, we are still building out this part of our site!<br/>
        Alternatively, please sign up for an account and we will notify you as soon as things are done!<br/>
        Thank you for your patience.
      </div>
      <div class="row-flex mt-5 flex-wrap justify-center">
        <!-- <img style="width: 60px" src="@/assets/images/hammer.png" /> -->
        <img style="height: 70px" class="mx-5 mb-2 mb-sm-0" src="@/assets/images/hammer.png" />
        <img style="height: 70px" class="mx-5 mb-2 mb-sm-0" src="@/assets/images/nails.png" />
        <img style="height: 70px" class="mx-5 mb-2 mb-sm-0" src="@/assets/images/wrench.png" />
        <img style="height: 70px" class="mx-5 mb-2 mb-sm-0" src="@/assets/images/screw.png" />
        <img style="height: 70px" class="mx-5 mb-2 mb-sm-0" src="@/assets/images/gear.png" />
      </div>
    </v-layout>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'error-page',
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
.error-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .error-content {
    flex: 1;
  }
}

</style>