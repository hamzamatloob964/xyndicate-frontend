<template>
  <v-layout wrap justify-center>
    <!-- LEFT -->
    <v-flex xs12 sm8 class="pr-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title>
          <div style="flex: 1">
            <h3 class="weight5">STEP 2: JOB DESCRIPTION</h3>
            <v-divider class="my-5"></v-divider>
          </div>
        </v-card-title>
        <v-card-text>
          <!-- <v-layout wrap>
            <v-flex v-for="(item, i) in fields" :key="i" xs12 sm4 class="px-2 mb-4">
              <v-text-field
                dense
                rounded
                class="grey lighten-4"
                hide-details
                solo 
                :label="item.key"
                :prepend-inner-icon="item.icon" 
                append-icon="mdi-plus"
              />
            </v-flex>
          </v-layout>
          <div class="grey mt-4 lighten-4 col-flex justify-center align-center" style="height: 200px">
            <v-icon size="100">mdi-file-upload</v-icon>
            <div class="grey mt-3" style="height: 25px; width: 80%"></div>
          </div> -->
          <v-layout>
            <v-flex sm10 xs12>
              <v-form class="my-form">
                <!-- <v-select
                  class="grey lighten-4"
                  dense solo 
                  :items="companies"
                  item-text="name"
                  item-value="_id"
                  label="Syndicate"
                  v-model="form.syndicate"
                />
                <v-text-field
                  class="grey lighten-4"
                  dense solo 
                  label="Title"
                  v-model="form.title"
                /> -->
                <v-textarea
                  dense solo 
                  label="Job Scope"
                  v-model="form.scope"
                  :append-icon="scopeErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="scopeErrors"
                />
                <!-- <v-combobox
                  dense solo 
                  label="Skills preferred"
                  v-model="form.skills"
                  multiple
                  chips
                /> -->

                <v-combobox
                  v-model="form.skills"
                  :items="items"
                  chips
                  clearable
                  label="Skills preferred"
                  multiple
                  dense solo 
                >
                  <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                      v-bind="attrs"
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="removeSkills(item)"
                    >
                      <strong>{{ item }}</strong>&nbsp;
                    </v-chip>
                  </template>
                </v-combobox>
                <v-textarea
                  dense solo 
                  label="Additional Info"
                  v-model="form.additionalInfo"
                  :append-icon="additionalInfoErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="additionalInfoErrors"
                />
                <v-text-field
                  dense solo 
                  label="Renumeration"
                  v-model="form.renumeration"
                  :append-icon="renumerationErrors.length ? 'mdi-close-circle-outline' : 'mdi-check-circle-outline'"
                  :error-messages="renumerationErrors"
                />
              </v-form>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            color="grey"
            class="darken-2"
            @click="submit"
          >
            <span class="color-white">Create</span>
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- RIGHT -->
    <!-- <v-flex xs12 sm4 class="pl-2">
      <v-card
        class="mb-12 br-15"
        color="grey lighten-3"
      >
        <v-card-text>
          <h2 class="weight5">Who to follow</h2>
          <v-divider class="my-4"></v-divider>
          <div v-for="n of 3" :key="n" class="row-flex align-center justify-space-between mb-2">
            <v-avatar class="grey"></v-avatar>
            <p>lorem ipsum lorem ipsum</p>
            <v-btn small rounded>action</v-btn>
          </div>
          <v-divider class="my-4"></v-divider>
          <p>Show more</p>
        </v-card-text>
      </v-card>
    </v-flex> -->
  </v-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'step-2',
  data: () => ({
    fields: [
      {icon: 'mdi-map-marker', key: 'Education'},
      {icon: 'mdi-map-marker', key: 'Visa Status'},
      {icon: 'mdi-map-marker', key: 'Work Experience'},
      {icon: 'mdi-map-marker', key: 'Experience'},
      {icon: 'mdi-map-marker', key: 'Location'},
      {icon: 'mdi-map-marker', key: 'Job Address'},
      {icon: 'mdi-map-marker', key: 'Certification'},
      {icon: 'mdi-map-marker', key: 'Job Title'},
      {icon: 'mdi-map-marker', key: 'Other Field'},
    ],
    chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
    items: ['Streaming', 'Eating'],
    form: {}
  }),
  validations: {
    form : {
      scope: { required },
      additionalInfo: { required },
      renumeration: { required }
    }
  },
  computed: {
    scopeErrors() {
      var field = this.$v.form.scope;
      return this.checkRequired(field, 'scope');
    },
    additionalInfoErrors() {
      var field = this.$v.form.additionalInfo;
      return this.checkRequired(field, 'additionalInfo');
    },
    renumerationErrors() {
      var field = this.$v.form.renumeration;
      return this.checkRequired(field, 'renumeration');
    },
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      
      if(this.$v.form.$invalid) {
        console.log("error submit func **********")
        this.errors = this.getError();
        return;
      }

      let payload = {...this.form};
      this.$emit('onComplete', payload);
    },
    getError() {
      return (
      this.scopeErrors[0] ||
      this.renumerationErrors[0] ||
      this.additionalInfoErrors[0])
    },
    checkRequired(field, name) {
      let errors = [];

      if (!field.$dirty) return errors;
      !field.required && errors.push(`${name} required`);

      return errors;
    },  
    removeSkills (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
  },
}
</script>

<style>

</style>