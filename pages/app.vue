<template>
  <div>
    <h1>Logged in and inside the app!!</h1>
    <h2>Expand your app from here, using sub-components</h2>
    <h3></h3>
  </div>
</template>

<script>
import * as blockstack from "blockstack";
import { mapGetters } from "vuex";

export default {
  name: "app-page",
  data: () => {
    return {
      blockstack: blockstack
    };
  },
  beforeMount() {
    if (!this.blockstack.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    } else {
      this.userData = this.blockstack.loadUserData();
      this.user = new this.blockstack.Person(this.userData.profile);
      this.username = this.userData.username;
      this.$store.commit("SET_USERSESSION", userSession);
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