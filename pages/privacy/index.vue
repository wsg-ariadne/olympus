<template>
  <main class="max-w-lg text-base" id="privacy-main">
    <ContentRendererMarkdown :value="content" />
  </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Privacy',
  async setup() {
    const { data } = await useAsyncData(
      'privacy-policy',
      () => queryContent('/privacy-policy').findOne()
    )
    return {
      content: data
    }
  },
  mounted() {
    const paragraphs = document.querySelectorAll('#privacy-main p')
    paragraphs.forEach((p) => p.classList.add('mb-4'))

    const h2s = document.querySelectorAll('#privacy-main h2')
    h2s.forEach((h2) => h2.classList.add('text-2xl', 'font-mono', 'italic', 'mt-4', 'mb-2'))

    const pres = document.querySelectorAll('#privacy-main pre')
    pres.forEach((pre) => pre.classList.add('bg-gray-100', 'p-1', 'rounded', 'inline'))
  }
})
</script>
