<template>
  <div class="company-container col-flex">
    <Header />
    <div class="company-content grey lighten-5">
      <!-- BANNER -->
      <div class="row-flex align-center pb-8" style="height: 360px; background-color: #e6e6e6">
        <div class="container col-flex align-center p-relative">
          <span class='p-absolute' style='top: 10px; right: 10px'>
            <v-btn @click="onEdit">edit</v-btn>
          </span>
          <div class="elevation-5 bg-white mb-5" style="height: 140px; width: 140px; border-radius: 5px">
            <div style="height: 140px; width: 140px; background-size: cover; background-position: center" :style="{ backgroundImage: 'url(' + require('@/assets/images/logo200.png') + ')' }"></div>
          </div>
          <v-layout>
            <span class="size-14 mb-1 mr-4">
              <v-icon color="black" size="20" class="mr-2">mdi-phone</v-icon> {{syndicate.phone}}
            </span>
            <span class="size-14">
              <v-icon color="black" size="20" class="mr-2">mdi-map-marker</v-icon> {{syndicate.country}}
            </span>
          </v-layout>
          <div class="red--text" style="position: absolute; left: 0; top: 50%">
            <h1 class="grey--text">{{syndicate.name}}</h1>
            <h3 class="grey--text">{{syndicate.slogan}}</h3>
          </div>
        </div>
      </div>
      <!-- MAIN CONTENT -->
      <div class="container pt-0 mt-n8">
        <v-layout>
          <!-- panel1 -->
          <v-flex class="col-flex" xs8 >
            <!-- ABOUT -->
            <div class="white pa-8 br-x mb-5">
              <h3 class="weight5 mb-5"><v-icon>mdi-office-building</v-icon> About Xyndicate</h3>
              <v-layout class="pb-8 mb-5" style="border-bottom: 1px solid grey" justify-space-between>
                <div class="row-flex">
                  <div class="custom-fab">
                    <v-icon>mdi-account-multiple</v-icon>
                  </div>
                  <div class="pl-5">
                    <span>SIZE</span><br/>
                    <span>{{syndicate.employeeRange}}</span>
                  </div>
                </div>
                <div style="border-left: 1px solid grey"></div>
                <div class="row-flex">
                  <div class="custom-fab">
                    <v-icon>mdi-office-building</v-icon>
                  </div>
                  <div class="pl-5">
                    <span>Company Type</span><br/>
                    <span>{{syndicate.type}}</span>
                  </div>
                </div>
                <div style="border-left: 1px solid grey"></div>
                <div class="row-flex">
                  <div class="custom-fab">
                    <v-icon>mdi-link-variant</v-icon>
                  </div>
                  <div class="pl-5">
                    <span>Website</span><br/>
                    <span>{{syndicate.website}}</span>
                  </div>
                </div>
              </v-layout>
              <!-- who are we -->
              <div>
                <h3 class="weight5 mb-3">Who are we</h3>
                <div class="mb-3" >
                  <video style="width: 100%" controls>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/ogg">
                    Your browser does not support HTML5 video.
                  </video>
                </div>
                <pre class="paragraph-1 mb-5">
                  {{syndicate.about}}
                </pre>
              </div>
              <div>
                <h3 class="weight5 mb-3">Mission</h3>
                <p class="size-16">
                  <pre class="paragraph-1 ">
                    {{syndicate.mission}}
                  </pre>
                </p>
                <h3 class="weight5 mb-3">Transformation</h3>
                <p class="size-16">
                  We are the leading full-service law firm on the African continent. We combine the
                  collective knowledge and experience of our firm to provide clients with seamless, tailored
                  and commercially-minded business solutions within record times.<br/><br/>
                  We are the leading full-service law firm on the African continent. We combine the
                  collective knowledge and experience of our firm to provide clients with seamless, tailored
                  and commercially-minded business solutions within record times.<br/><br/>
                  We are the leading full-service law firm on the African continent. We combine the
                  collective knowledge and experience of our firm to provide clients with seamless, tailored
                  and commercially-minded business solutions within record times.<br/><br/>
                </p>
              </div>
            </div>
          </v-flex>
          <!-- panel2 -->
          <v-flex class="col-flex ml-5" column xs4>
            <!-- TOUCH -->
            <div class="white pa-8 br-x mb-5">
              <p><v-icon class="mr-2">mdi-forum-outline</v-icon> GET IN TOUCH</p>
              <v-layout class="row mb-5">
                <v-avatar class="elevation-2 mx-3" size="30"></v-avatar>
                <v-avatar class="elevation-2 mr-3" size="30"></v-avatar>
                <v-avatar class="elevation-2 mr-3" size="30"></v-avatar>
                <v-avatar class="elevation-2 mr-3" size="30"></v-avatar>
              </v-layout>
              <hr class="mb-5">
              <v-layout>
                <v-icon class="mr-5">mdi-email</v-icon>
                <div>
                  <span>EMAIL</span><br/>
                  <span>contact@xyndicate.com</span>
                </div>
              </v-layout>
            </div>
            <!-- CALENDAR -->
            <div class="mb-5 white br-x" align="center">
              <v-date-picker
                class="elevation-0"
                v-model="date1"
                :events="arrayEvents"
                event-color="green lighten-1"
                no-title
              ></v-date-picker>
            </div>
            <!-- ROLES -->
            <!-- <div>
              <h3 class="mb-2">Roles we hire for</h3>
              <v-layout class="white pa-5 br-x">
                <v-avatar class="elevation-3 mr-3"></v-avatar>
                <div>
                  <h4>Candidate Huey!</h4>
                  <p>This is very much lorem ipsum pum king</p>
                </div>
              </v-layout>
              <div class="py-2">See all roles ></div>
              <h3 class="mb-2">Our Assessment</h3>
              <div class="mt-4">
                <div class="row-flex mb-4">
                  <div class="pa-5 white br-x" style="width: 100%">
                    <h4>Candidate Huey!</h4>
                    <p>This is very much lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div class="py-2">See all assessments ></div>
            </div> -->
          </v-flex>
        </v-layout>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>  
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'company',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      arrayEvents : null,
      section: 'general'
    }
  },
  computed: {
    syndicate: function() {
      return this.$store.state.syndicateStore.activeSyndicate || {}
    }
  },
  mounted() {
    this.$store.dispatch('syndicateStore/getSyndicate', this.$route.params.id);
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },
  methods: {
    functionEvents (date) {
      const [,, day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    },
    onEdit() {
      this.$router.push({ path: '/create-syndicate', query: { mode: 'edit' }});
    }
  },
  watch: {
    '$route': function() {
      if(this.$route.params.id)
        this.$store.dispatch('syndicateStore/getSyndicate', this.$route.params.id);
    }
  }

}
</script>

<style lang="scss">
.company-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .company-content {
    flex: 1;

    .br-x {
      border-radius: 5px;
    }

    .nm-x {
      transform: translateY(-10px)
    }

    .container {
      // max-width: 900px;
    }

    .v-picker--date, .v-picker__body {
      background-color: white !important;
      border-radius: 15px;
    }

    .custom-fab {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      height: 50px;
      width: 50px;
      border: 1px solid gray;
    }
  }
  
}
</style>