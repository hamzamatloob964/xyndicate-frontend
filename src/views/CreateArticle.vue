<template>
  <div class="article-container col-flex">
    <Header />
    <div class="article-content grey lighten-4 pa-4">
      <div class="container">
        <h2 class="weight5 my-5">Create an article</h2>
        <v-layout wrap>
          <!-- LEFT -->
          <v-flex xs12 sm8 class="pr-2">
            <v-card>
              <v-card-text class="pt-8">
                <v-text-field
                  solo
                  label="Add Title"
                />
                <v-textarea
                  label="Start writing or type / to choose block"
                  rows="8"
                  solo
                  no-resize
                  counter
                />
                <v-label>Add skills</v-label>
                <v-combobox
                  class="mt-4"
                  label="add skills"
                  solo
                  chips
                  multiple
                />
              </v-card-text>
              <v-card-actions class="pa-4">
                <v-btn class="ml-auto">cancel</v-btn>
                <v-btn class="" color="grey">
                  <span class="color-white">submit</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <!-- RIGHT -->
          <v-flex xs12 sm4 class="pl-2">
            <v-card class="br-15">
              <v-card-text>
                <v-layout align-center justify-center style="height: 250px; border: 1px dashed grey">
                  <v-icon size="150">mdi-plus</v-icon>
                </v-layout>
                <v-btn class="mt-5" style="width: 100%" color="grey">
                  <span class="color-white">add feature image</span>
                </v-btn>
              </v-card-text>
            </v-card>
           
            <v-card class="br-15 mt-10">
              <v-card-text>
                <h2 class="weight5">Choose Article Type</h2>
                <v-divider class="my-3"></v-divider>
                <v-radio-group>
                  <v-radio
                    label="Image"
                    value="Image"
                  ></v-radio>
                  <v-radio
                    label="Video"
                    value="Video"
                  ></v-radio>
                  <v-radio
                    label="Code"
                    value="Code"
                  ></v-radio>
                  <v-radio
                    label="Article"
                    value="Article"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
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
  name: 'job-creation',
  components: {
    Header,
    Footer
  },
  data: () =>({
  })
}
</script>

<style lang="scss">
.article-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .article-content {
    flex: 1;

    @media only screen and (min-width: 500px) {
      .v-stepper__header {
        width: 400px !important;
      }
    }
  }
}
</style>