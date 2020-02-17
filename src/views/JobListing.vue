<template>
  <div class="job-container col-flex">
    <Header />
    <div class="job-content my-10 row-flex justify-center">
      <!-- DRAWER -->
      <v-flex xs3 sm3 md2>
        <v-card class="pa-5 bx-r">
          <v-card-text>
            <div class="py-5 pt-0">
              <h3 class="weight5 mb-5">Apply Filters</h3>
              <v-divider></v-divider>
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
            <v-btn @click="$router.push('/post-job')" style="width: 100%"  class="mb-2 mt-5 grey darken-2 white--text">post jobs</v-btn>
            <v-btn @click="$router.push('/event-creation')" style="width: 100%" >post events</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- TIMELINE -->
      <v-flex class="px-5" xs6>
        <div class="bg-mgray pa-4 mb-8 br-x2" style="borderBottom: 5px solid #433f3f;">
          <v-layout align-center>
            <v-icon class="mr-3" style="fontSize: 30px">mdi-briefcase</v-icon>
            <h1 class="weight5">Jobs</h1>
          </v-layout>
        </div>
        <div
          @click="$router.push(`/job/${item._id}`)"
          class=" main-job-div bg-mgray br-x pa-3 mb-2 pointer"
          v-for="(item,i) of jobs" :key="i"
        >
          <div class="no-wrap row-flex" row >
            <div class="col-flex align-center mt-10 mr-5">
              <div
                style="height: 80px; width: 80px; background-size: contain; background-position: center"
                :style="{ backgroundImage: 'url(' + logos[(i % 5)] + ')' }">
              </div>
            </div>
            <div class="job-details" style="flex: 1"> 
              <div class="synd-name weight5 size-18 mb-1">{{item.syndicate.name}} 
                <span style="margin-left: auto;">
                  <v-icon class="blue--text text--darken-3">mdi-calendar</v-icon> 
                  {{new Date().toDateString()}}
                </span>
              </div>
              <div class="weight5 size-18 mb-1">{{item.title}}</div>
              <div class="weight5 size-18 mb-5">{{item.type}} |
                <!-- <v-divider
                  class="mx-2"
                  width="20"
                  inset
                  vertical
                ></v-divider> -->
                <span>
                  <v-icon class="green--text">mdi-cash-usd</v-icon>  
                  Salary ${{item.renumeration}}
                </span>
              </div>
              <div class="weight5 size-18 mb-1">Skills:</div>
              <div style="display: flex;" class="weight5 size-14 ">
                {{item.scope}} | {{item.scope}} | {{item.scope}}
                <span style="margin-left: auto;" class="weight5 size-18 ">
                  <a href="#">view details</a>
                </span>
              </div>
        
              <!-- <v-layout align-start justify-space-between>
                <div>
                  <div class="weight5 size-18 mb-3">{{item.syndicate.name}}</div>
                  <div>{{item.title}}</div>
                </div>
                <div class="grey lighten-2 px-2 py-1 size-14" style="border-radius: 2px">{{item.type}}</div>
              </v-layout> -->
              <!-- <div class="size-14 line-clamp-3">{{item.scope}}</div> -->
              <v-layout class="mt-5" justify-space-between>
                <!-- <span>
                  <v-icon class="green--text">mdi-cash-usd</v-icon>  
                  Salary ${{item.renumeration}}
                </span> -->
                <!-- <span>
                  <v-icon class="blue--text text--darken-3">mdi-calendar</v-icon> 
                  {{new Date().toDateString()}}
                </span> -->
              </v-layout>
            </div>
          </div>
          <!-- <div align="right">
            <v-icon class="pointer">mdi-thumb-up-outline</v-icon>
            <v-icon class="ml-4 pointer">mdi-thumb-down-outline</v-icon>
          </div> -->
        </div>
      </v-flex>
      <!-- TRENDS -->
      <v-flex xs3 md3 align="center">
        <div class="bg-mgray br-x pa-8 mb-8 px-12 col-flex" align="center">
          <div>
            <v-avatar size="150" class="elevation-5 mr-4 bg-white" >
              <div style="height: 150px; width: 150px; background-size: cover; background-position: center" :style="{ backgroundImage: 'url(' + require('@/assets/images/profile.jpg') + ')' }"></div>
            </v-avatar>
          </div>
          <v-layout justify-center>
            <div align="left">
              <div class="mt-4">John Doe Marshel</div>
              <div class="mb-4">
                <v-icon>mdi-map-marker</v-icon>
                london, UK
              </div>
            </div>
          </v-layout>
          <v-btn @click="$router.push('profile')" small class="grey darken-2 mb-4">
            <span style="color: white">update profile</span>
          </v-btn>
          <v-btn @click="$router.push('create-syndicate')" small>create syndicate</v-btn>
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
  name: 'job-listing',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      filter: {},
      logos: [
        require('../assets/images/logo100.png'),
        require('../assets/images/logo200.png'),
        require('../assets/images/logo300.png'),
        require('../assets/images/logo400.png'),
        require('../assets/images/logo500.jpg'),
      ]
    }
  },
  computed: {
    jobs: function() {
      return this.$store.state.jobStore.jobs || []
    }
  },
  mounted() {
    this.$store.dispatch('jobStore/getAllJobs');
  }

}
</script>

<style lang="scss">
.job-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .job-content {
    flex: 1;

    .border-left-gray {
      border-left: 4px solid rgb(99, 99, 99);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    .panel1 {
      position: relative;
    }

    .panel1::after {
      position: absolute;
      top: 10%;
      right: 0;
      height: 80%;
      content: '';
      border-left: 2px solid rgb(216, 216, 216);
    }

    .br-x {
      border-radius: 5px;
    }
    
    .br-x2 {
      border-radius: 5px;
    }

    .nm-x {
      transform: translateY(-10px)
    }

    .menu-item {
      margin-bottom: 35px;
    }
  }
  
}
.job-details{
  display: flex;
  flex-direction: column;
}
.synd-name{
  display: flex;
}
.main-job-div{
  
}
</style>