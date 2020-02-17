<template>
  <div class="home col-flex">
    <Header />
    <!-- CAROUSEL -->
    <v-carousel class="bg-lgray" hide-delimiters height="400px">
      <v-carousel-item class="col-flex" v-for="item in images" :key="item">
        <div class="pas-12 bg-img" :style="{ backgroundImage: 'url(' + item + ')' }">
          <div class="pa-10">
            <!-- <h2 class="weight5 mb-4 color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p class="color-white">Lorem ipsum dolor sit amet, consectetur</p> -->
          </div>
          <!-- <div class="pa-10" align="right">
            <v-btn class="ma-2 ml-auto" outlined color="white">Get Started</v-btn>
            <v-btn class="ma-2" text color="white">lorem ipsum?</v-btn>
          </div> -->
        </div>
      </v-carousel-item>
    </v-carousel>
    <div class="content container pt-0">
      <!-- OPPORTUNITIES -->
      <v-layout class="my-10" wrap>
        <v-flex xs12 sm6>
          <img style="width: 100%" src="@/assets/images/3.png" />
        </v-flex>
        <v-flex xs12 sm6 class="px-8 col-flex justify-center">
          <h1 class="mb-3 weight5">
            Discover new oppurtunities
          </h1>
          <p>
            Join the ranks of many in an exciting early stage company, be it as a developer, growth hacker or an efficient operator. A new horizon awaits; sign up and begin applying.
          </p>
          <v-btn class="ml-auto grey darken-2 white--text">Join Now</v-btn>
        </v-flex>
      </v-layout>
      <!-- INVESTORS -->
      <v-layout class="my-10 flex-row-reverse flex-sm-row" wrap>
        <v-flex xs12 sm6 class="px-8 col-flex justify-center">
          <h1 class="mb-3 weight5">
            Meet Investors
          </h1>
          <p>
            Searching for your next investor to fund your crazy new idea? Sign up and begin connecting with angels, applying for incubation or doubling down at an accelerator. Make your dreams a reality. 
          </p>
          <v-btn class="mr-auto grey darken-2 white--text">Join Now</v-btn>
        </v-flex>
        <v-flex xs12 sm6>
          <img style="width: 100%" src="@/assets/images/1.png" />
        </v-flex>
      </v-layout>
      <!-- OPPORTUNITIES -->
      <v-layout class="my-10" wrap>
        <v-flex xs12 sm6>
          <img style="width: 100%" src="@/assets/images/2.png" />
        </v-flex>
        <v-flex xs12 sm6 class="px-8 col-flex justify-center">
          <h1 class="mb-3 weight5">
            Discover new networks
          </h1>
          <p>
            Build up your network at networking events to collaborate on new ideas or for future correspondence.
            Attend talks and classes to gain a fresh perspective on issues. No person is an island, sign up and begin.
          </p>
          <v-btn class="ml-auto grey darken-2 white--text">Join Now</v-btn>
        </v-flex>
      </v-layout>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      images: [
        require('@/assets/images/x1.png'),
        require('@/assets/images/x2.png'),
        require('@/assets/images/x3.png'),
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;

  .my-header {
    flex: unset;
  }

  .content {
    flex: 1;
    // height: 200vh;
  }
  
  .my-footer {
    flex: unset;
  }

  .bg-img {
    background-size: cover;
    background-position: center;
    height: 400px;
  }
}
</style>
