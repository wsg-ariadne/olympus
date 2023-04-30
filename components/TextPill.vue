<template>
  <div>
    <span
      class="font-bold font-mono rounded-full uppercase"
      :class="classesString"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextPill',
  props: {
    bgColor: {
      type: String,
      default: 'adn-accent-dark'
    },
    textColor: {
      type: String,
      default: 'adn-white'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classesString() {
      const sizing = this.small ? 'px-3 py-0.5 text-xs' : 'px-4 py-1 text-lg'
      return `${sizing} bg-${this.bgColor} text-${this.textColor}`
    }
  }
})
</script>
