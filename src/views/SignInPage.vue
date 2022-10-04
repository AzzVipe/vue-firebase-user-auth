<template>
  <main class="container">
    <MyCard>
      <template #title>
        <h1>Login to Your Account</h1>
      </template>
      <template #content>
        <p class="error-msg" v-if="errMsg"> {{ errMsg }} </p>
        <span class="p-float-label">
          <InputText id="email" type="email" v-model="email" placeholder="Email"/>
          <label for="email">Email</label>
        </span>
        <span class="p-float-label">
          <InputText id="password" type="password" v-model="password" placeholder="Password"/>
          <label for="password">Password</label>
        </span>
      </template>
      <template #footer>
        <MyButton @click="signIn" label="Submit"></MyButton>
      </template>
    </MyCard>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'SignInPage',

  data() {
    return {
      email: '',
      password: '',
      errMsg: ''
    }
  },

  methods: {
    signIn() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
      .then(data => {
        console.log('Successfully Signed In!');
        console.log(data);
        
        this.$router.push('/feed')
      })

      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.errMsg = '*Invalid email'
            break
          case 'auth/user-not-found':
            this.errMsg = '*No account with that email was found'
            break
          case 'auth/wrong-password':
            this.errMsg = '*Incorrect password'
            break  
          default:
            this.errMsg = '*Email or password was incorrect'
            break
        }
      })
    }
  }
};

</script>