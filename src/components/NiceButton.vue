<template>
  <button
    class="text-white transition-colors focus:outline-none focus:ring"
    :class="{
      'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300': mood === 'default',
      'bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-300': mood === 'error',
      'bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring-green-300': mood === 'success',
      'px-4 py-2': !compact,
      'px-3 py-1': compact,
      'rounded-full': round,
      'rounded-md': !round
    }"
  >
    <span
      class="font-bold"
      :class="{
        'text-sm': compact,
        'text-base': !compact
      }"
    >
      <slot />
    </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NiceButton',
  props: {
    mood: {
      type: String,
      required: false,
      default: 'default'
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    round: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>
