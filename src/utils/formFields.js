import { parsePhoneNumberFromString } from 'libphonenumber-js'

function validatePhone(phone) {
  try {
    const result = parsePhoneNumberFromString(phone);
    return result.isValid();
  }
  catch(e){
    return false;
  }      
}


export const basicProfile = {

  title: 'Basic Info',
  fields: [
    {
      type: 'text',
      label: 'your name',
      model: 'fullName',
      icon: 'mdi-account',
      rules: [v => !!v || 'Required']
    },
    {
      type: 'text',
      label: 'phone number',
      model: 'phone',
      icon: 'mdi-phone',
      hint: 'include country code',
      rules: [
        v => !!v || 'Required',
        v => validatePhone(v) || 'please enter valid phone'
      ]
    },
    {
      type: 'select',
      label: 'Country',
      model: 'country',
      icon: 'mdi-map',
      items: ['Singapore','Malaysia','Indonesia'],
      rules: [v => !!v || 'Required']
    },
    {
      type: 'text',
      label: 'City',
      model: 'city',
      icon: 'mdi-map',
      items: [1,2,3],
      rules: [v => !!v || 'Required']
    }
  ]

};

export const about = {
  title: 'About',
  fields: [
    {
      type: 'textarea',
      label: 'your introduction',
      model: 'about',
      icon: 'mdi-book-open',
      rules: [v => !!v || 'Required']
    }
  ]
}

export const interests = {
  title: 'Interests',
  fields: [
    {
      type: 'textarea',
      label: 'share your interests',
      model: 'interests',
      icon: 'mdi-format-list-bulleted-type',
      rules: [v => !!v || 'Required']
    }
  ]
}

export const experience = {

  title: 'Experience',
  fields: [
    {
      type: 'text',
      label: 'company name',
      model: 'name',
      icon: 'mdi-office-building',
      rules: [v => !!v || 'Required']
    },
    {
      type: 'text',
      label: 'Position',
      model: 'position',
      icon: 'mdi-account-card-details',
      items: [1,2,3],
      rules: [v => !!v || 'Required']
    },
    {
      type: 'monthYear',
      label: 'From',
      model: ['fromMonth', 'fromYear'],
      icon: 'mdi-account-card-details'
    },
    {
      type: 'monthYear',
      label: 'To',
      model: ['toMonth', 'toYear'],
      icon: 'mdi-account-card-details'
    },

  ]

}

export const education = {

  title: 'Education',
  fields: [
    {
      type: 'text',
      label: 'institute name',
      model: 'name',
      icon: 'mdi-office-building',
      rules: [v => !!v || 'Required']
    },
    {
      type: 'text',
      label: 'Degree',
      model: 'degree',
      icon: 'mdi-account-card-details',
      items: [1,2,3],
      rules: [v => !!v || 'Required']
    },
    {
      type: 'monthYear',
      label: 'From',
      model: ['fromMonth', 'fromYear'],
      icon: 'mdi-account-card-details'
    },
    {
      type: 'monthYear',
      label: 'To',
      model: ['toMonth', 'toYear'],
      icon: 'mdi-account-card-details'
    },

  ]

}

export const skills = {
  
  title: 'Skills',
  fields: [
    {
      type: 'combo',
      label: 'Skills',
      model: 'skills',
      icon: 'mdi-format-list-bulleted-square',
      // rules: [v => !!v || 'Required']
    }
  ]

}

export const social = {

  title: 'Get more social',
  fields: [
    {
      type: 'text',
      label: 'Facebook link',
      model: 'facebook',
      icon: 'mdi-facebook',
    },
    {
      type: 'text',
      label: 'Twitter link',
      model: 'twitter',
      icon: 'mdi-twitter',
    },
    {
      type: 'text',
      label: 'Linkedin link',
      model: 'linkedin',
      icon: 'mdi-linkedin',
    },
    {
      type: 'text',
      label: 'Email',
      model: 'email',
      icon: 'mdi-at',
    },
  ]  

}