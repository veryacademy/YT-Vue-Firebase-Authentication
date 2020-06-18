<template>
  <v-app>
    <Navbar
      :login="login"
      :logout="logout"
      :userProfile="userProfile"
      :loggedIn="loggedIn"
    />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Navbar from '@/components/Navbar';
  export default {
    name: 'app',
    components: { Navbar },
    computed: {
      ...mapGetters('user', {
        userProfile: 'userProfile',
        loggedIn: 'loggedIn'
      })
    },
    methods: {
      ...mapActions('user', {
        login: 'login',
        logout: 'logout'
      })
    }
  };
</script>