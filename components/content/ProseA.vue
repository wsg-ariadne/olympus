<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="underline underline-offset-1"
  >
    <slot></slot>
  </a>
</template>
