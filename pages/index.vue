<template>
  <div class="container">
    <a href="#" @click.prevent="signIn">Login with blockstack</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "landing",
  beforeMount() {
    if (this.$userSession.isUserSignedIn()) {
      this.redirectLoggedInUser();
    } else if (this.$userSession.isSignInPending()) {
      this.$userSession.handlePendingSignIn().then(userData => {
        this.redirectLoggedInUser();
      });
    }
  },
  methods: {
    signIn() {
      this.$userSession.redirectToSignIn();
    },
    redirectLoggedInUser() {
      window.location = `/app`;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
