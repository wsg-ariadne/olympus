<template>
  <nav
    class="w-full h-16 sticky top-0 left-0 flex items-center justify-center bg-white"
  >
    <div class="mx-4 flex items-center justify-between max-w-screen-md w-full">
      <img
        src="@/assets/logo.svg"
        alt="ariadne"
        class="h-4"
      >

      <div v-if="isAuthenticated">
        <p>Hello, {{ user.given_name }}</p>
        <NiceButton compact round mood="error" @click="logout">Log out</NiceButton>
      </div>
      <NiceButton compact round @click="login">Log in</NiceButton>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import NiceButton from '@/components/NiceButton.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    NiceButton
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
