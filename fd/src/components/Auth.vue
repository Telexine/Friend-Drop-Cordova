 
 <template lang="html">
  <v-ons-page>
  <v-ons-toolbar>
    <div class="center">Login App</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item>
      <div class="center">
        <v-ons-input placeholder="ID" float
          v-model="ID">
        </v-ons-input>
      </div>
    </v-ons-list-item>
    <v-ons-list-item>
      <div class="center">
       <div id="firebaseui-auth-container"></div>
      </div>
    </v-ons-list-item>
  </v-ons-list>
  </v-ons-page>
  
</template>

<script>
  /* eslint-disable */
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';
export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/main',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style lang="css">
</style>