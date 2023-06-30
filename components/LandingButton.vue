<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="rounded-full flex flex-row justify-between
    items-center group border-2 px-6 py-4 cursor-pointer w-fit"
    :class="parentClasses">
    <slot></slot>

    <!-- Arrow icon -->
    <ArrowRightIcon class="ml-4 h-6 w-6 group-hover:ml-6
      transition-all" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingButton',
  props: {
    parentClasses: {
      type: String,
      default: ''
    }
  }
})
</script>
