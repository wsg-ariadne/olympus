<template>
  <main class="bg-adn-background grid grid-rows-1 grid-cols-4 gap-1 min-h-screen">
    <NuxtLayout>
      <!-- Navigation sidebar -->
      <Navbar class="col-start-1 col-end-1" />

      <!-- Page content -->
      <div class="col-start-2 col-span-3 overflow-scroll m-4">
        <div class="p-4 border-adn-border border-2 bg-adn-white">
          <NuxtPage/>
        </div>
      </div>
    </NuxtLayout>
  </main>
</template>
