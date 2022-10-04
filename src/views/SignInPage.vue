<template>
  <main class="container">
    <MyCard>
      <template #title>
        <h1>Login to Your Account</h1>
      </template>
      <template #content>
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
        alert(error.message);
        console.log(error.code)
      })
    }
  }
};

</script>