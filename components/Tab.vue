<template>
  <button type="button"
    class="font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2
      focus:outline-none transition-colors w-full grid
      grid-rows-1 grid-cols-[1.5rem_minmax(0,1fr)] gap-6 items-center"
    :class="classes"
    @click="onClick">
    <!-- Slot for icon -->
    <div>
      <slot name="icon" class="shrink-0"></slot>
    </div>

    <!-- Slot for text -->
    <div class="text-left overflow-clip whitespace-nowrap text-ellipsis"
      :class="isActive ? 'font-bold' : ''">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tab',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tabId: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.active
    },
    classes() {
      if (this.active) {
        return `text-white bg-adn-text`
      } else {
        return `text-adn-black hover:bg-adn-accent cursor-pointer`
      }
    }
  },
  methods: {
    onClick(e: Event) {
      e.preventDefault()
      this.$emit('tab-click', this.tabId)
    }
  }
})
</script>
