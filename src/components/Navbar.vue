<template>
  <nav
    class="w-full h-16 sticky top-0 left-0 flex items-center justify-center"
  >
    <div class="mx-4 flex items-center justify-between max-w-screen-md w-full">
      <img
        src="@/assets/logo.svg"
        alt="ariadne"
        class="h-4"
      >

      <div v-if="isAuthenticated">
        <p>Hello, {{ user.given_name }}</p>
        <Button pill color="red" @click="logout">Log out</Button>
      </div>
      <Button pill @click="login">Log in</Button>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import { Button } from 'flowbite-vue' 

export default defineComponent({
  name: 'Navbar',
  components: {
    Button
  },
  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0()

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
      user,
      isAuthenticated
    }
  }
})
</script>
