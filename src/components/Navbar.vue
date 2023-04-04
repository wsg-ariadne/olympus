<template>
  <!-- Horizontal navbar with logo and login/logout button -->
  <main class="flex space-between">
    <h1>Ariadne</h1>

    <div v-if="isAuthenticated">
      <p>Hello, {{ user }}</p>
      <button class="p-4 bg-red-700 text-white" @click="logout">Log out</button>
    </div>
    <button v-else class="p-4 bg-teal-700 text-white" @click="login">Log in</button>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  name: 'Navbar',
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
