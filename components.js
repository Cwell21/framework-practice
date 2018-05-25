
Vue.component('app-header', {
  props: ['text'],
  template: '<header><h1><img src="alligator-logo.png" alt="AlligatorLogo">{{ text }}</h1></header>'  
})
