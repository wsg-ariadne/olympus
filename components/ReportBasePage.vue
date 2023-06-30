<template>
  <main class="grid grid-rows-1 grid-cols-4 gap-1 min-h-screen">
    <!-- Navigation sidebar -->
    <Navbar class="col-start-1 col-end-1" />

    <!-- Page content -->
    <div class="col-start-2 col-span-3 overflow-scroll m-4">
      <div class="p-6 border-adn-border border-2 bg-adn-white rounded-lg">
        <slot></slot>
      </div>
    </div>
  </main>
</template>
