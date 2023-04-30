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
    bgClass: {
      type: String,
      default: 'bg-adn-accent-dark'
    },
    textClass: {
      type: String,
      default: 'text-adn-white'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classesString() {
      const sizing = this.small ? 'px-3 py-0.5 text-xs' : 'px-4 py-1 text-lg'
      return `${sizing} ${this.bgClass} ${this.textClass}`
    }
  }
})
</script>
