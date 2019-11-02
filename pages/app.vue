<template>
  <div>
    <h1>Logged in and inside the app!!</h1>
    <h2>Expand your app from here, using sub-components</h2>
    <a href="#" @click.prevent="signOut">Logout</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app-page",
  data: () => {
    return {};
  },
  beforeMount() {
    if (!this.$userSession.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    } else {
      this.userData = this.$userSession.loadUserData();
      this.username = this.userData.username;
      this.$store.commit("SET_USERSESSION", this.$userSession);
      console.log(this.username);
    }
  },
  methods: {
    signOut() {
      this.$userSession.signUserOut(window.location.href);
    },
    redirectUserToLandingPage() {
      window.location = `/`;
    }
  }
};
</script>
