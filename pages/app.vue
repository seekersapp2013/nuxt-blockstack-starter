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
  beforeMount() {
    if (!this.loggedUser.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    }
    this.userData = this.loggedUser.loadUserData();
    this.user = new Person(this.userData.profile);
    this.username = this.userData.username;
    if (this.$store.state.habits.length === 0) {
      this.$store.dispatch("loadDataFromGaia");
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedUser"])
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