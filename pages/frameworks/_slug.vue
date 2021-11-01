<template>
  <div class="container">
    <nuxt-content :document="framework" tag="frameworks" />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData ({ $content, params }) {
    const framework = await $content('frameworks', params.slug).fetch()
    return { framework }
  }
}
</script>
