<template>
  <div class="newsfeed-container col-flex">
    <Header />
    <div class="newsfeed-content my-10 row-flex justify-center">
      <!-- DRAWER -->
      <v-flex xs3 sm3 md2>
        <v-card class="pa-5 bx-r">
          <v-card-text>
            <!-- <div class="menu-item" v-for="item of menuItems" :key="item">
              <v-avatar size="35" class="bg-gray"></v-avatar>
              <span class="ml-10 size-20">{{item}}</span>
            </div> -->
            <div class="py-5 pt-0">
              <h3 class="weight5 mb-5">Apply Filters</h3>
              <br/>
              <div>
                <v-label>
                  <v-icon class="mr-2">mdi-sort-variant</v-icon> Sort By
                </v-label>
                <v-select
                  placeholder="sort"
                  v-model="filter.sort"
                  :items="['Most Recent', 'Popular']"
                  offseet
                />
              </div>
              <div>
                <v-label>
                  <v-icon class="mr-2">mdi-filter-outline</v-icon> Category
                </v-label>
                <v-select
                  placeholder="category"
                  v-model="filter.category"
                  :items="['Jobs only', 'Event only']"
                  offseet
                />
              </div>
              <template v-for="(item, key) in filter">
                <v-chip class="mb-2" :key="item" label v-if="filter[key]">
                  {{item}} <v-icon @click="$set(filter, key, null)" class="ml-3" size="18">mdi-close</v-icon>
                </v-chip>
              </template>
            </div>
            <v-btn @click="$router.push('/post-job')" style="width: 100%"  class="mb-2 mt-5 grey lighten-1">post jobs</v-btn>
            <v-btn style="width: 100%" >post events</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- TIMELINE -->
      <v-flex class="px-5" xs6>
        <div class="bg-mgray br-x pa-8 mb-8">
          <v-layout align-center>
            <v-avatar class="elevation-3 bg-gray mr-5"></v-avatar>
            <h2 class="weight5">News Feed</h2>
          </v-layout>
          <br/>
          <br/>
          <br/>
        </div>
        <div class="bg-mgray br-x pa-8 mb-2" v-for="n in 4" :key="n">
          <v-layout class="no-wrap" row align-center>
            <v-avatar class="elevation-3 bg-gray mr-5"></v-avatar>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </v-layout>
          <div align="right">
            <v-icon class="pointer">mdi-thumb-up-outline</v-icon>
            <v-icon class="ml-4 pointer">mdi-thumb-down-outline</v-icon>
          </div>
        </div>
      </v-flex>
      <!-- TRENDS -->
      <v-flex xs3 md3>
        <div class="bg-mgray br-x pa-8 mb-8">
          <v-layout>
            <h2 class="weight5">Trends to follow</h2>
            <v-spacer></v-spacer>
            <v-icon class="pointer">mdi-settings</v-icon>
          </v-layout>
          <div class="my-5" style="border-bottom: 1px solid gray" v-for="n in 3" :key="n">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
          <h3 class="pointer">Show More</h3>
        </div>
        <div class="bg-mgray br-x pa-8 mb-8">
          <v-layout>
            <h2 class="weight5">Who to follow</h2>
            <v-spacer></v-spacer>
            <v-icon class="pointer">mdi-settings</v-icon>
          </v-layout>
          <div class="my-5" style="border-bottom: 1px solid gray" v-for="n in 3" :key="n">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
          <h3 class="pointer">Show More</h3>
        </div>
      </v-flex>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'newsfeed',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      menuItems: ["News Feed", "Profile", "Alerts", "Messages", "Bookmarks", "Lists", "More"],
      filter: {}
    }
  }

}
</script>

<style lang="scss">
.newsfeed-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .newsfeed-content {
    flex: 1;
    // max-width: 900px;

    .br-x {
      border-radius: 15px;
    }

    .nm-x {
      transform: translateY(-10px)
    }

    .menu-item {
      margin-bottom: 35px;
    }
  }


  
}
</style>