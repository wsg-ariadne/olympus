<template>
  <div class="flex justify-center items-center w-full"
    :class="parentClasses">
    <div class="max-w-7xl w-full mx-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingContainer',
  props: {
    parentClasses: {
      type: String,
      default: ''
    }
  }
})
</script>