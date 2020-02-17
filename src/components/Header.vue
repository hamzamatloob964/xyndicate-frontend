<template>
  <v-layout class="my-header header-container" column align-center style="border-bottom: 2px solid black">
    <v-layout class="container py-0 pb-4" align-end row justify-end>
      <div class="mr-5" style="height: 80px; width: 140.69px">
        <img class="pointer" @click="$router.push('/')" src="@/assets/images/logo3.png" height="80"/>
      </div>
      <v-layout justify-end>
        <!-- AUTHENTICATED -->
        <template v-if="$route.name != 'home'" >
          <!-- ACTION ITEMS -->
          <div class="row-flex align-center">
            <v-icon class="mx-2">mdi-briefcase-outline</v-icon>
            <v-icon class="mx-2">mdi-forum-outline</v-icon>
            <v-badge class="mr-3" content="2" color="pink" overlap>
              <v-icon class="mx-2">mdi-bell-outline</v-icon>
            </v-badge>
            <span class="mx-2" style="vertical-align: middle">EN</span>
          </div>
          <!-- SEPARATER -->
          <div class="vertical-separater mx-4" v-if="$vuetify.breakpoint.smAndUp"></div>
          <!-- AVATAR -->
          <div class="row-flex" style="alignItems: center" >
            <v-menu offset-y nudge-top="-15">
              <template v-slot:activator="{ on }">
                <div
                  class="pointer"
                  v-on="on"
                >
                  <v-avatar class="mr-2" color="red">
                    <span class="white--text headline">CJ</span>
                  </v-avatar>
                  <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-menu-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-subheader>Syndicates</v-subheader>
                <v-list-item-group >
                  <v-list-item
                    v-for="(item, index) in $store.state.syndicateStore.syndicates"
                    :key="index"
                    :to="`/company/${item._id}`"
                  >
                    <!-- @click="$router.push(`/company/${item._id}`)" -->
                    <v-list-item-icon>
                      <v-icon class="">mdi-alpha-s-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <span>{{item.name}}</span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>

                <v-divider ></v-divider>

                <v-list-item
                  v-for="(item, index) in menuItems"
                  :key="index"
                  @click="$router.push(item.link)"
                >
                  <v-list-item-icon>
                    <v-icon class="">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <span>{{ item.name }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click="$router.push('/profile')"
                >
                  <v-list-item-icon>
                    <v-icon class="">mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <span>Profile</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click="logout"
                >
                  <v-list-item-icon>
                    <v-icon class="">mdi-logout</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <span>logout</span>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
            <!-- <v-btn class="ml-0" text>sign in</v-btn> -->
            <!-- <Auth class="ml-n3"/> -->
          </div>
        </template>
        <!-- NOT AUTHENTICATED -->
        <div v-else class="row-flex align-center">
          <Auth />
        </div>
      </v-layout>
    </v-layout>
    <!-- BOTTOM PANEL -->
    <div  
      class=""
      style="border-top: 3px solid black; width: 100%"
    >
      <div class="container row-flex wrap-it py-3">
        <!-- main menu items -->
        <div v-if="$vuetify.breakpoint.smAndUp" class="row-flex wrap-it align-center">
          <template v-if="$route.name === 'home'">
            <div class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Home</div>
            <div class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Recruitment</div>
            <div class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Events</div>
            <div class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Funding</div>
          </template>
          <template v-else>
            <!-- <span @click="$router.push('/Profile')" class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Profile</span> -->
            <router-link active-class="hover-active" to="/jobs" class="mr-10 size-16 color-gray pointer btn-hvr-dgray">
              Jobs
            </router-link>
            <router-link active-class="hover-active" to="/Events" class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Events</router-link>
            <router-link active-class="hover-active" to="/create-syndicate" class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Create Syndicate</router-link>
            <router-link active-class="hover-active" to="/error" class="mr-10 size-16 color-gray pointer btn-hvr-dgray">Funding</router-link>
          </template>
        </div>
        <!-- search -->
        <div class="row-flex justify-end align-center ml-auto">
          FAQ <v-icon class="ml-3 grey--text">mdi-help-circle</v-icon>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
import Auth from './Auth'

export default {
  name: 'my-header',
  components: {
    Auth
  },
  data: () => ({
    menuItems: [
    ]
  }),
  methods: {
    logout() {
      this.$store.dispatch('userStore/logout');
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
  .header-container {
    padding-top: 10px;
    a {
      text-decoration: none;
      color: initial !important;
    }
  }
  .vertical-separater {
    width: 4px;
    height: 30px;
    align-self: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: rgb(100, 100, 100);
  }
  .v-text-field--solo {

    .v-input__slot {
      background-color: unset !important;
    }
  }
  @media only screen and (max-width: 500px) {
    .header-container {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
</style>