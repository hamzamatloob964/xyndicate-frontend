<template>
  <div>
    <!-- EVENT LISTING -->
      <section  class="pa-10 my-12" style="">
        <v-layout class="no-wrap my-5" row align-center>
          <!-- HEADING -->
          <h1 class="color-gray weight5 vertical-text mr-10">Event Listings</h1>
          <!-- 2 PANELS -->
          <div class="row-flex justify-center flex-wrap" style="flex: 1">
            <div class="col-flex" style="flex: 1; max-width: 400px; min-width: 300px; min-height: 600px">
              <div class="col-flex" style="flex: 1">
                <!-- card -->
                <v-card class="bg-lgray" style="flex: auto">
                  <v-card-title>
                    <v-icon class="ml-auto" size="34">mdi-heart-outline</v-icon>
                  </v-card-title>
                  <v-card-text>
                  </v-card-text>
                </v-card>
                <!-- fab buttons -->
                <div class="row-flex justify-center mb-2" style="margin-top: -18px">
                  <v-btn fab small class="mx-2 bg-white" outlined color="grey">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-btn fab small class="mx-2 bg-white" outlined color="grey">
                    <v-icon>mdi-thumb-up-outline</v-icon>
                  </v-btn>
                </div>
                <!-- author -->
                <div class="row-flex">
                  <v-avatar class="elevation-3"></v-avatar>
                  <v-flex class="col-flex justify-center px-2">
                    <div class="bg-mgray my-1" style="height: 10px; border-radius: 5px"></div>
                    <div class="bg-mgray my-1" style="height: 10px; border-radius: 5px"></div>
                  </v-flex>
                </div>
                <!-- button -->
                <v-btn class="mt-10">get started</v-btn>
              </div>
            </div>
            <div class="pa-5 col-flex flex-wrap" style="">
              <v-layout row class="justify-center">
                <v-flex xs6 v-for="n of 4" :key="n">
                  <div class="ma-3" style="max-width: 160px">
                    <v-card class="bg-lgray" style="height: 200px">
                      <v-card-text>
                        item {{n}}
                      </v-card-text>
                    </v-card>
                    <div class="bg-mgray mt-2" style="height: 10px; border-radius: 10px"></div>
                    <div class="bg-mgray mt-2" style="height: 10px; border-radius: 10px"></div>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </v-layout>
      </section>
      <!-- JOB LISTING -->
      <section class="pa-10 pt-0 my-12" style="">
        <v-layout class="no-wrap my-5" row align-center>
          <h1 class="color-gray weight5 vertical-text">Job Listings</h1>
          <v-slide-group show-arrows>
            <v-slide-item
              v-for="n in 25"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <v-layout class="mr-3" column>
                <v-card class="bg-lgray" style="height: 250px; width: 200px;">
                  <v-card-text>
                    item {{n}}
                  </v-card-text>
                </v-card>
                <div class="bg-mgray mt-2" style="height: 10px; border-radius: 10px"></div>
                <div class="bg-mgray mt-2" style="height: 10px; border-radius: 10px"></div>
              </v-layout>
            </v-slide-item>
          </v-slide-group>
        </v-layout>
      </section>
      <!-- TRENDY -->
      <section  class="pa-10 pt-0 my-12" style="">
        <v-layout class="no-wrap my-5" row align-center>
          <!-- HEADING -->
          <h1 class="color-gray weight5 vertical-text mr-10">TRENDY</h1>
          <!-- CONTENT -->
          <v-layout column>
            <v-layout class="" style="height: 400px">
              <v-layout column>
                <v-layout class="pa-2">
                  <div class="bg-gray" style="height: 100%; width: 100%"></div>
                </v-layout>
                <v-layout class="py-2">
                  <div class="mx-2 bg-mgray" style="height: 100%; width: 100%"></div>
                  <div class="mx-2 bg-mgray" style="height: 100%; width: 100%"></div>
                </v-layout>
              </v-layout>
              <v-layout row>
                <v-layout class="px-2" column>
                  <div class="my-2 bg-mgray" style="height: 60%; width: 100%"></div>
                  <div class="my-2 bg-gray" style="height: 40%; width: 100%"></div>
                </v-layout>
                <v-layout class="px-2" column>
                  <div class="my-2 bg-gray" style="height: 40%; width: 100%"></div>
                  <div class="my-2 bg-mgray" style="height: 60%; width: 100%"></div>
                </v-layout>
              </v-layout>
            </v-layout>
            <v-layout class="mt-10">
              <div>
                <div class="ma-2">
                  <h4 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                  <p class="mb-3 size-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p class="mb-3 size-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <v-layout align-center>
                    <v-avatar class="elevation-3 mr-3"></v-avatar>
                    <div style="width: 100%">
                      <div class="bg-mgray mb-2" style="height: 8px;"></div>
                      <div class="bg-mgray mb-2" style="height: 8px;"></div>
                    </div>
                  </v-layout>
                </div>
              </div>
              <div>
                <div class="ma-2">
                  <div v-for="n of 2" :key="n">
                    <div>
                      <h4 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    </div>
                    <v-layout align-center>
                      <v-avatar class="elevation-3 mr-3"></v-avatar>
                      <div style="width: 100%">
                        <div class="bg-mgray mb-2" style="height: 8px;"></div>
                        <div class="bg-mgray mb-2" style="height: 8px;"></div>
                      </div>
                      <v-icon class="ml-5">mdi-message-outline</v-icon>
                    </v-layout>
                  </div>
                </div>
              </div>
            </v-layout>
          </v-layout>
        </v-layout>
        <!-- POSTS -->
      </section>
      <!-- ACTIVE USERS -->
      <section class="pa-10 pt-0 my-12 mb-0" style="">
        <h1 class="color-gray weight5 mb-10">Active Users</h1>
        <v-layout justify-center>
          <div class="mx-4" align="center" v-for="n of 5" :key="n">
            <v-avatar class="elevation-3"></v-avatar>
            <p class="mt-3 mb-0">Lorem Ipsum</p>
            <p class="size-14">lorem ipsum lorem </p>
          </div>
        </v-layout>
      </section>
      <!-- SUBSCRIBE -->
      <section class="pa-10 pt-0 mb-10" style="">
        <h1 class="color-gray weight5 mb-10">Subscribe To Our Newsletter</h1>
        <v-layout class="row-flex">
          <div class="pa-4" style="border: 1px solid gray; flex: 3">
            <h4 class="weight5">Name</h4>
            <v-text-field hide-details placeholder="enter your name" solo flat></v-text-field>
          </div>
          <div class="pa-4" style="border: 1px solid gray; flex: 5">
            <h4 class="weight5">Email</h4>
            <v-text-field hide-details placeholder="enter your name" solo flat></v-text-field>
          </div>
        </v-layout>
        <v-btn class="my-5" style="float:right">subscribe</v-btn>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>