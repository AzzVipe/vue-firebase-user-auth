<template>
  <main class="container">
    <MyCard>
      <template #title>
        <h1> Create an Account </h1>
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
        <MyButton @click="register" label="Submit"></MyButton>
      </template>
    </MyCard>
  </main>
</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'RegisterPage',
  
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        console.log(data);
        this.$router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      })
    }
  }
};

</script>