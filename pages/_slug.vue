<template>
  <div class="container">
    <nuxt-content :document="doc" tag="categories" />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()
    return { doc }
  }
}
</script>
