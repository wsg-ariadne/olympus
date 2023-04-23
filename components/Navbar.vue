
<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { HomeIcon } from '@heroicons/vue/24/outline'
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid'

/**
 * Auth0 stuff
 */
const auth0 = process.client ? useAuth0() : undefined
const user = computed(() => {
  return auth0?.user.value
})
const isAuthenticated = computed(() => {
  return auth0?.isAuthenticated.value
})
const login = () => {
  auth0?.checkSession()
  if (!auth0?.isAuthenticated.value) {
    auth0?.loginWithRedirect()
  }
}
const logout = () => {
  // navigateTo('/')
  auth0?.logout({ logoutParams: { returnTo: window.location.origin } })
}

/**
 * Tabs
 */
const tabs = ref([
  {
    id: 'tab-1',
    name: 'still i believe...',
    icon: HomeIcon
  },
  {
    id: 'tab-2',
    name: "i'm missing something real...",
    icon: ArrowRightOnRectangleIcon
  },
  {
    id: 'tab-3',
    name: 'i need someone who really sees me!!!',
    icon: ArrowLeftOnRectangleIcon
  }
])
let activeTab = ref(tabs.value[0].id)
const onTabClick = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <div>
    <nav class="p-8 h-screen flex flex-col items-start justify-between">
      <div>
        <!-- Logo -->
        <img
          src="@/assets/ariadne.svg"
          alt="ariadne"
          class="h-4 mb-8 ml-6"
        >

        <!-- Tabs -->
        <Tab v-for="tabDetail in tabs"
          :key="tabDetail.id"
          :tab-id="tabDetail.id"
          :active="tabDetail.id === activeTab"
          @tab-click="onTabClick"
        >
          <template #icon>
            <component :is="tabDetail.icon" class="h-6 w-6" />
          </template>
          <template #default>
            {{ tabDetail.name }}
          </template>
        </Tab>

        <Tab tab-id="login" @tab-click="login">
          <template #icon>
            <ArrowLeftOnRectangleIcon class="h-6 w-6" />
          </template>
          <template #default>
            Log in
          </template>
        </Tab>
      </div>

      <div class="text-xs text-adn-gray-light">
        <!-- Olympus logo -->
        <p class="mb-2">
          <img
            src="@/assets/olympus.svg"
            alt="olympus"
            class="h-4 inline-block mr-2"
          >
          <span class="text-adn-gray">dashboard for Ariadne</span>
        </p>
        <p class="mb-2">
          part of an ongoing research project<br>
          by <a class="text-adn-gray underline" href="https://twitter.com/jurisadorna">
            Juris Hannah Adorna
          </a> &amp; <a class="text-adn-gray underline" href="https://dantis.me">
            Aurel Jared Dantis
          </a>
        </p>
        <p class="mb-3">
          made with &#10084;&#65039; in the Philippines
        </p>
        <ul class="list-none flex flex-row flex-wrap justify-between items-center">
          <li><a class="text-adn-gray underline" href="/privacy">Privacy Policy</a></li>
          <li><a class="text-adn-gray underline" href="https://github.com/wsg-ariadne">GitHub</a></li>
          <li><a class="text-adn-gray underline" href="https://deceptive.design">Deceptive Design</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>