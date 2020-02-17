<template>
  <v-card>
    <v-card-title>
      <h2 class="weight5 my-3">{{title}}</h2>
    </v-card-title>
    <v-card-text>
      <v-form class="my-5" ref="myForm">
        <template v-for="(item, i) in fields">
          <div :key="i">
            <v-text-field
              v-if="item.type === 'text'"
              solo
              validate-on-blur
              :hint="item.hint"
              :label="item.label"
              :prepend-icon="item.icon"
              v-model="form[item.model]"
              :rules="item.rules || []"
            />
            <v-select
              v-else-if="item.type === 'select'"
              solo
              validate-on-blur
              :hint="item.hint"
              :items="item.items"
              :label="item.label"
              :prepend-icon="item.icon"
              v-model="form[item.model]"
              :rules="item.rules || []"
            />
            <v-textarea
              v-else-if="item.type === 'textarea'"
              solo
              validate-on-blur
              :hint="item.hint"
              :items="item.items"
              :label="item.label"
              :prepend-icon="item.icon"
              v-model="form[item.model]"
              :rules="item.rules || []"
            />
            <div v-else-if="item.type === 'combo'">
              <v-combobox
                solo
                validate-on-blur
                :hint="item.hint"
                :items="item.items"
                :label="item.label"
                :prepend-icon="item.icon"
                v-model="form[item.model]"
                :rules="item.rules || []"
                chips
                multiple
              />
              <!-- <v-chip class="mr-2" label v-for="(item, i) in form[item.model]" :key="i">{{item}}</v-chip> -->
            </div>
            <div class="row-flex align-start" v-else-if="item.type === 'monthYear'">
              <v-icon class="mr-2">
                mdi-calendar-range
              </v-icon>
              <div class="col-flex">
                <v-label>{{item.label}}</v-label>
                <v-layout class="mt-2">
                  <v-select
                    style="flex: 1"
                    solo
                    validate-on-blur
                    :items="['January', 'February', 'March']"
                    label="month"
                    v-model="form[item.model[0]]"
                  />
                  <v-select
                    style="flex: 1"
                    solo
                    validate-on-blur
                    :items="['2018', '2019', '2020']"
                    label="year"
                    v-model="form[item.model[1]]"
                  />
                </v-layout>
              </div>
            </div>
          </div>
        </template>
      </v-form>
      <v-card-actions class="pa-0">
        <v-btn class="ml-auto" @click="submit">save</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'generic-form',
  props: ['title', 'fields'],
  data : () => ({
    form: {}
  }),
  methods: {
    submit() {
      let isValid = this.$refs.myForm.validate();
      if(isValid)
        this.$emit('onSubmit', {...this.form});
    }
  },
  mounted() {
    for(let item of this.fields) {
      this.$set(this.form, item.model, item.value || null);
    }
  }
}
</script>

<style>

</style>