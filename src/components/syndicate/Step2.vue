<template>
  <v-layout wrap>
    <!-- LEFT -->
    <v-flex xs12 class="px-2">
      <v-card
        class="mb-12 br-15"
      >
        <v-card-title>
          <div style="flex: 1">
            <h3 class="weight5">STEP 2: Additional Details</h3>
            <v-divider class="my-5"></v-divider>
          </div>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap class="px-2 px-sm-4">
            <v-flex xs12 sm7>
              <v-label>About</v-label>
              <v-textarea
                class="mt-3"
                prepend-inner-icon="mdi-information-outline"
                label="tell us about your syndicate"
                rows="8"
                no-resize
                solo
                v-model="form.about"
              />
              
              <v-label>No. of Employees</v-label>
              <v-text-field
                class="mt-3"
                prepend-inner-icon="mdi-counter"
                label="size"
                no-resize
                solo
                v-model="form.employeeRange"
              />

              <v-checkbox
                v-model="checkbox"
                label="Investing Firm ?"
              ></v-checkbox>

              <v-combobox
                v-if="checkbox"
                v-model="form.investingFirm"
                :items="items"
                solo
                label="Select Investing Firm or create a new one"
              ></v-combobox>
              
              <v-label>Mission</v-label>
              <v-textarea
                class="mt-3"
                prepend-inner-icon="mdi-information-outline"
                label="tell us about your mission"
                rows="5"
                no-resize
                solo
                v-model="form.mission"
              />
              
              <v-label>Core Values</v-label>
              <v-textarea
                class="mt-3"
                prepend-inner-icon="mdi-information-outline"
                label="core values"
                rows="5"
                no-resize
                solo
                v-model="form.coreValues"
              />
              
              <v-label>Team</v-label>
              <div class="row-flex wrap mt-3">
                <div class="col-flex align-center mr-5" v-for="(item, i) of team" :key="i" >
                  <v-avatar class="grey">
                    <img :src="item.img" />
                  </v-avatar>
                  <div>
                    <span class="text-capitalize">{{item.name}}</span>
                    <v-icon @click="removeTeamMember(i)">mdi-close</v-icon>
                  </div>
                </div>
              </div>
              <v-divider v-if="team.length" class="my-5" />
              <div class="row-flex align-center mt-2">
                <div class="p-relative">
                  <v-avatar source size="80" class="grey lighten-1">
                    <img
                      v-if="imgSource"
                      :src="imgSource"
                      alt="John"
                    >
                  </v-avatar>
                  <v-btn @click="pickFile"  class="ml-n5 mt-n10" small dense icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </div>
                <v-text-field
                  class="ml-2"
                  solo
                  label="name"
                  v-model="name"
                  hide-details
                />
                <v-btn @click="addTeamMember" class="ml-2">add</v-btn>
                <input @input="onFileInput" hidden ref="file" type="file" />
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            color="grey"
            class="darken-2"
            @click="submit"
          >
            <span class="color-white">Continue</span>
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'step-1',
  data: () => ({
    team: [],
    form: {},
    imgSource: null,
    file: null,
    name: null,
    checkbox: false,
    items:['Incubator','Accelerator','Venture','Capital','Private',
    'Equity'],
  }),
  methods: {
    
    pickFile() {
      this.$refs.file.click();
    },
    async onFileInput(e) {
      var reader;
      let input = e.target;

      if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = (e) => {
          this.imgSource = e.target.result;
        }

        this.file = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    addTeamMember() {
      this.team.push({
        name: this.name,
        img: this.imgSource,
        file: this.file,
      });
      this.name = null;
      this.imgSource = null;
      this.file = null;
    },
    removeTeamMember(i) {
      this.team.splice(i, 1);
    },
    submit() {
      let payload = {...this.form};
      payload.team = [...this.team];
      this.$emit('onComplete', payload);
      this.$emit('changeStep', 3)
    }
  },
  props: ['values'],
  mounted() {
    for(let prop in this.values)
      this.$set(this.form, prop, this.values[prop])
  },
  watch: {
    'values': {
      deep: true,
      handler: function() {
        for(let prop in this.values)
          this.$set(this.form, prop, this.values[prop])
      }
    }
  }
}
</script>

<style>

</style>