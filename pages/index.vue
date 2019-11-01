<template>
  <div class="container">
    <a href="#" @click.prevent="signIn">Login with blockstack</a>
  </div>
</template>

<script>
import * as blockstack from "blockstack";
import { mapGetters, mapState } from "vuex";
export default {
  name: "landing",
  data: () => {
    return {
      blockstack: blockstack
    };
  },
  beforeMount() {
    if (this.blockstack.isUserSignedIn()) {
      this.redirectLoggedInUser();
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(userData => {
        this.redirectLoggedInUser();
      });
    }
  },
  methods: {
    signIn() {
      this.blockstack.redirectToSignIn();
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
