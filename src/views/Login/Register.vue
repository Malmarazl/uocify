<template>
    <main class="page-register">


      <section class="box-auth">
        <img class="logo" alt="logo" src="@/assets/icon.svg">
        <h1 class="main-title">Register</h1>
        <p class="auth-intro"> Sign up for uocify to enjoy thousands of songs.</p>

        <form>
            <div class="form-group">
              <label class="form-label" for="username">Email</label>
              <input placeholder="Correo electrónico" type="email" id="email" v-model="email" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label" for="password">Password</label>
              <input placeholder="Password" type="password" id="password" v-model="password" class="form-control">
            </div>
            <button v-on:click="register" class="btn btn-primary btn-lg">Register</button>
        </form>

        <p v-if="error" class="auth-error">
          {{ error }}
        </p>          

        <p class="auth-bottom">Do you already have an account?   <router-link to="/login" class="alink"> Log in</router-link></p>
      </section>


    </main>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: '',
      error:''
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            console.log(`New user created with the mail: ${data.user.email}`);
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