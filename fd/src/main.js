// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import {config} from './helpers/firebaseConfig'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
     });
    },
  el: '#app',
  render: h => h(App)
});
