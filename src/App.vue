<template>
  <main class="container">
    <nav class="navbar">
      <MenuBar :model="items">
        <template #end>
          <MyButton 
            label="Sign Out" 
            iconPos="right" 
            class="p-button-sm" 
            icon="pi pi-sign-out" 
            v-if="isLoggedIn == true" 
            @click="handleSignOut" /> 
        </template>
      </MenuBar>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </main>
</template>

<script>

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export default {
  data() {
    return {
      isLoggedIn: false,
      items: [
        {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
        {label: 'Feed', icon: 'pi pi-fw pi-calendar', to: '/feed', visible: () => this.isLoggedIn},
        {label: 'About', icon: 'pi pi-fw pi-calendar', to: '/about'},
        {label: 'Register', icon: 'pi pi-fw pi-pencil', to: '/register', visible: this.toShowTab},
        {label: 'Sign In', icon: 'pi pi-fw pi-sign-in', to: '/sign-in', visible: this.toShowTab},
      ]
    }
  },

  mounted() {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        this.isLoggedIn = true // if we have a user
      } else {
        this.isLoggedIn = false // if we do not
      }
    })    
  },

  methods: {
    handleSignOut() {
      signOut(getAuth())
      this.$router.push('/')
    },
    toShowTab() {
      if(this.isLoggedIn == true)
        return false;

      return true;
    }   
  },
};

</script>