<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

 
 

<style>
  /* CSS goes here */
</style>

<script> /* eslint-disable */
  // Javascript goes here
  import firebase from 'firebase'
  import Home from './Home.vue'
  import News from './News.vue'
  import Settings from './Settings.vue'
//

  export default {
  name: 'main',
  components: {
    Home,
    News,
    Settings
  },
  data () {
      return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: Home,
          myProp: 'This is a page prop!',
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          page: News,
          badge: 7,
          key: "newsPage"
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: Settings,
          key: "settingsPage"
        }
      ]
      };
   },
    methods: {
    logOut() {
      firebase.auth().signOut();
    },
     md() {
         
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
  }
   
 
</script>