<template>
  <main class="page-login">

    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg">
      <h1 class="main-title">Log in</h1>
      <p class="auth-intro">Login to uocify to enjoy thousands of songs.</p>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label>
            <input placeholder="Correo electrónico" type="email" id="email" v-model="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input placeholder="Password" type="password" id="password" v-model="password" class="form-control">
          </div>
          <button v-on:click="login" class="btn btn-primary btn-lg">Log in</button>
      </form>

      <p v-if="error" class="auth-error">
        {{ error }}
      </p>      

      <p class="auth-bottom">You do not have an account?   <router-link to="/register" class="alink">Sign up</router-link></p>
    </section>

  </main>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
      error:''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            console.log(`Session successfully started with email: ${data.user.email}`);
            this.$router.push("/");
          },
          err => {
            this.error = err.message;
          }
        );
      e.preventDefault();
    }
  }
};
</script>