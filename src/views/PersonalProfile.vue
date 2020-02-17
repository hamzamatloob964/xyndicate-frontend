<template>
  <div class="profile-container col-flex">
    <Header />
    <div class="profile-content grey lighten-5">
      <!-- BANNER -->
      <div class="row-flex" style="height: 340px; background-color: #e6e6e6">
        <div class="container row-flex align-center">
          <v-avatar size="150" class="elevation-5 mr-4 bg-white" >
            <div style="height: 150px; width: 150px; background-size: cover; background-position: center" :style="{ backgroundImage: 'url(' + require('@/assets/images/profile.jpg') + ')' }"></div>
          </v-avatar>
          <div class="basic-info pa-4 row-flex br-5" >
            <div class="col-flex mr-3">
              <h2 class="weight5 mb-2">{{user.firstName}}</h2>
              <span class="size-14 mb-1">
                <v-icon color="black" size="20" class="mr-3">mdi-phone</v-icon> {{user.phone}}
              </span>
              <span class="size-14">
                <v-icon color="black" size="20" class="mr-3">mdi-map-marker</v-icon> {{user.city}}, {{user.country}}
              </span>
            </div>
            <v-btn icon @click="showGenericForm('basicProfile')">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- MAIN CONTENT -->
      <div class="container pt-0 mt-n8">
        <v-layout>
          <!-- panel1 -->
          <v-flex class="col-flex" xs8 >
            <!-- ABOUT -->
            <div class="white pa-8 br-x mb-5 p-relative">
              <h3 class="weight5 mb-3">About</h3>
              <div class="size-16">
                <pre class="paragraph-1">
                  {{user.about}}
                </pre>
              </div>
              <v-btn style="position: absolute; top: 10px; right: 10px" @click="showGenericForm('about')" icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
            <!-- DASHBOARD -->
            <!-- <div class="white pa-8 br-x mb-5">
              <h3 class="weight5 mb-3">Dashboard</h3>
              <p class="size-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nos
              </p>
            </div> -->
            <!-- EXPERIENCE EDUCATION -->
            <div class="white pa-8 br-x mb-5">
              <div class="mb-3 p-relative">
                <v-btn class="p-absolute" style="top: 0px; right: 10px" icon @click="showGenericForm('experience')">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <h3 class="weight5 mb-3">Experience</h3>
                <div v-if="user.experience">
                  <template v-for="(item, i) of user.experience">
                    <div class="p-relative" :key="i">
                      <v-btn @click="deleteFromArray('experience', i)" icon class="del-btn">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <div class="size-14">
                        <div class="size-16 mb-1">{{item.name}}</div>
                        <div>
                          {{item.fromMonth}} {{item.fromYear}} - 
                          {{((item.toYear && item.toMonth && `${item.toMonth} ${item.toYear}`) || 'present')}}
                        </div>
                        <div>{{item.position}}</div>
                      </div>
                      <v-divider class="my-4" />
                    </div>
                  </template>
                </div>
              </div>
              <div class="mb-3 p-relative">
                <v-btn class="p-absolute" style="top: 0px; right: 10px" icon @click="showGenericForm('education')">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <h3 class="weight5 mb-3">Education</h3>
                <div v-if="user.education">
                  <template v-for="(item, i) in user.education">
                    <div class="p-relative" :key="i">
                      <v-btn @click="deleteFromArray('education', i)" icon class="del-btn">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <div class="size-14">
                        <div class="size-16 mb-1">{{item.name}}</div>
                        <div>
                          {{item.fromMonth}} {{item.fromYear}} - 
                          {{((item.toYear && item.toMonth && `${item.toMonth} ${item.toYear}`) || 'present')}}
                        </div>
                        <div>{{item.degree}}</div>
                      </div>
                      <v-divider class="my-4" />
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <!-- SKILLS -->
            <div class="white pa-8 br-x mb-5 p-relative">
              <h3 class="weight5 mb-3">Skills and Endorsement</h3>
              <div class="size-16">
                <v-chip class="mr-4" label v-for="(item, i) in user.skills" :key="i">
                  {{item}}
                </v-chip>
              </div>
              <v-btn style="position: absolute; top: 10px; right: 10px" @click="showGenericForm('skills')" icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
            <!-- INTERESTS -->
            <div class="white pa-8 br-x mb-5 p-relative">
              <h3 class="weight5 mb-3">Interests</h3>
              <div class="size-16">
                <pre class="paragraph-1">
                  {{user.interests}}
                </pre>
              </div>
              <v-btn style="position: absolute; top: 10px; right: 10px" @click="showGenericForm('interests')" icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </v-flex>
          <!-- panel2 -->
          <v-flex class="col-flex ml-5 p-relative" column xs4>
            <v-btn style="position: absolute; top: 10px; right: 10px" @click="showGenericForm('social')" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <!-- TOUCH -->
            <div class="white pa-8 br-x mb-5">
              <p><v-icon class="mr-2">mdi-forum-outline</v-icon> GET IN TOUCH</p>
              <v-layout class="row mb-5">
                <a class="mr-4" v-if="user.facebook" :href="user.facebook" target="_blank">
                  <v-btn fab small>
                    <v-icon class="blue--text" size="25">mdi-facebook-box</v-icon>
                  </v-btn>
                </a>
                <a class="mr-4" v-if="user.twitter" :href="user.twitter" target="_blank">
                  <v-btn fab color="blue" small>
                    <v-icon style="color: white" size="20">mdi-twitter</v-icon>
                  </v-btn>
                </a>
                <a class="mr-4" v-if="user.linkedin" :href="user.linkedin" target="_blank">
                  <v-btn fab color="blue darken-3" small>
                    <v-icon style="color: white" size="20">mdi-linkedin</v-icon>
                  </v-btn>
                </a>
                <!-- <v-avatar class="elevation-2 mx-3" size="30"></v-avatar>
                <v-avatar class="elevation-2 mr-3" size="30"></v-avatar>
                <v-avatar class="elevation-2 mr-3" size="30"></v-avatar>
                <v-avatar class="elevation-2 mr-3" size="30"></v-avatar> -->
              </v-layout>
              <hr class="mb-5">
              <v-layout>
                <v-icon class="mr-5">mdi-email</v-icon>
                <div>
                  <span>EMAIL</span><br/>
                  <span>{{user.email}}</span>
                </div>
              </v-layout>
            </div>
            <!-- CALENDAR -->
            <!-- <div class="mb-5 bg-mgray br-x" align="center">
              <v-date-picker
                class="elevation-0"
                v-model="date1"
                :events="arrayEvents"
                event-color="green lighten-1"
                no-title
              ></v-date-picker>
            </div> -->
            <!-- ROLES -->
            <!-- <div>
              <h3 class="mb-2">Roles we hire for</h3>
              <v-layout class="bg-mgray pa-5">
                <v-avatar class="elevation-3 mr-3"></v-avatar>
                <div>
                  <h4>Candidate Huey!</h4>
                  <p>This is very much lorem ipsum pum king</p>
                </div>
              </v-layout>
              <div class="py-2">See all roles ></div>
              <h3 class="mb-2">People also viewed</h3>
              <div class="mt-4">
                <div class="row-flex mb-4" v-for="n in 6" :key="n">
                  <v-avatar class="elevation-3 mr-3"></v-avatar>
                  <div>
                    <h4>Candidate Huey!</h4>
                    <p>This is very much lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div> -->
          </v-flex>
        </v-layout>
      </div>
    </div>
    <Footer />
  <v-dialog v-model="showForm" max-width="550">
    <GenericForm :title="formTitle" :fields="formFields" @onSubmit="submit" />
  </v-dialog>
  </div>
</template>

<script>  
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GenericForm from '@/components/GenericForm'
import { basicProfile, about, interests, experience, skills, education, social } from '@/utils/formFields'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'profile',
  components: {
    Header,
    Footer,
    GenericForm
  },
  computed: {
    ...mapState({
      user: state => state.userStore
    })
  },
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      arrayEvents : null,
      showForm: false,
      formFields: [],
      formTitle: []
    }
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },
  methods: {
    ...mapActions({
      update: 'userStore/updateUser'
    }),
    functionEvents (date) {
      const [,, day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    },
    submit(data) {
      console.log(data);
      this.showForm = false;
      let experience =this.user.experience ? [...this.user.experience] : [];
      let education = this.user.education ? [...this.user.education] : [];
      if(this.formTitle === 'Experience') {
        experience.push(data);
        this.update({experience});
        return;
      }
      if(this.formTitle === 'Education') {
        education.push(data);
        this.update({education});
        return;
      }
      this.update(data);
    },
    showGenericForm(type) {
      let model = null;

      switch(type) {
        case 'basicProfile':
          model = basicProfile;
          break;
        case 'about':
          model = about;
          break;
        case 'interests':
          model = interests;
          break;
        case 'experience':
          model = experience;
          break;
        case 'skills':
          model = skills;
          break;
        case 'education':
          model = education;
          break;
        case 'social':
          model = social;
          break;
      }
      this.formTitle = model.title;
      this.formFields = [...model.fields];
      for(let item of this.formFields) {
        item.value = this.user[item.model];
      }

      this.showForm = true;
    },
    deleteFromArray(key, index) {
      if(key == 'education') {
        let education = [...this.user.education];
        education.splice(index, 1);
        this.update({education});
      }
      else {
        let experience = [...this.user.experience];
        experience.splice(index, 1);
        this.update({experience});
      }
    }
  }

}
</script>

<style lang="scss">
.profile-container {
  min-height: 100vh;

  >* {
    flex: unset;
  }

  .profile-content {
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
      background-color: #F7F6FC !important;
      border-radius: 15px;
    }

    .basic-info:hover {
      background-color: rgb(211, 211, 211) !important;
    }

    a {
      text-decoration: none;
    }

    .del-btn {
      position: absolute;
      top: 0px;
      right: 10px;
    }
  }
  
}
</style>