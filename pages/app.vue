<template>
  <div>
    <h1>Logged in and inside the app!!</h1>
    <h2>Expand your app from here, using sub-components</h2>
    <h3></h3>
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
      this.$store.dispatch("saveWorkspaceAndSignout", this.currentDate);
    },
    redirectUserToLandingPage() {
      window.location = `/`;
    }
  }
};
</script>
